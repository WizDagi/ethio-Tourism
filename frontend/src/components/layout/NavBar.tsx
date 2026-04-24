import { Link, useNavigate } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMe, logoutUser } from '../../features/auth/api';
import { ThemeToggle } from './ThemeToggle';
import { useState, useEffect } from 'react';

export const NavBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { data: userResponse } = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false
  });

  const user = userResponse?.data?.user;

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(['me'], null);
      queryClient.invalidateQueries({ queryKey: ['me'] });
      navigate('/');
    }
  });

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md border-b border-amber-100/50 dark:border-amber-900/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-amber-500' : 'bg-amber-500/90 backdrop-blur-sm'}`}>
            <Compass className="w-4 h-4 text-black" />
          </div>
          <span className={`transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
            Ethiopia<span className="text-amber-400">Premium</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <ThemeToggle />
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-amber-600 dark:hover:text-amber-400' : 'text-white/90 hover:text-amber-300 drop-shadow'}`}
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-amber-600 dark:hover:text-amber-400' : 'text-white/90 hover:text-amber-300 drop-shadow'}`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                className="text-sm font-semibold text-red-400 hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-amber-600 dark:hover:text-amber-400' : 'text-white/90 hover:text-amber-300 drop-shadow'}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X className={`w-6 h-6 ${scrolled ? '' : 'text-white'}`} />
            : <Menu className={`w-6 h-6 ${scrolled ? '' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-border shadow-xl px-4 py-4 flex flex-col gap-4">
          <ThemeToggle />
          <Link to="/" className="text-sm font-semibold" onClick={() => setMenuOpen(false)}>Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-semibold" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <button onClick={() => { logoutMutation.mutate(); setMenuOpen(false); }} className="text-sm font-semibold text-red-500 text-left">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="text-sm font-bold bg-amber-500 text-black px-4 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};
