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
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${scrolled ? 'bg-orange-500' : 'bg-orange-500/90 backdrop-blur-sm'}`}>
            <Compass className="w-4 h-4 text-black" />
          </div>
          <span className={`transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
            Ethiopia<span className="text-orange-500">Premium</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <ThemeToggle />
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-eth-deepblue dark:hover:text-blue-400' : 'text-white/90 hover:text-white drop-shadow'}`}
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-eth-deepblue dark:hover:text-blue-400' : 'text-white/90 hover:text-white drop-shadow'}`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm font-semibold transition-colors ${scrolled ? 'text-foreground hover:text-eth-deepblue dark:hover:text-blue-400' : 'text-white/90 hover:text-white drop-shadow'}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:scale-105"
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
              <button onClick={() => { logoutMutation.mutate(); setMenuOpen(false); }} className="text-sm font-semibold text-muted-foreground text-left">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="text-sm font-bold bg-orange-500 text-white px-4 py-2 rounded-full text-center shadow-md" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};
