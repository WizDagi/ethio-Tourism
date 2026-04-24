import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin } from 'lucide-react';

// Inline SVG social icons (not available in lucide-react v1.8)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const destinations = [
  { name: 'Lalibela', href: '/' },
  { name: 'Danakil Depression', href: '/' },
  { name: 'Simien Mountains', href: '/' },
  { name: 'Blue Nile Falls', href: '/' },
  { name: 'Axum Obelisks', href: '/' },
  { name: 'Gondar Castles', href: '/' },
];

const company = [
  { name: 'About Us', href: '/' },
  { name: 'Our Story', href: '/' },
  { name: 'Why Ethiopia', href: '/' },
  { name: 'Your Dashboard', href: '/dashboard' },
  { name: 'Book a Tour', href: '/register' },
];

const support = [
  { name: 'Travel FAQ', href: '/' },
  { name: 'Safety Guidelines', href: '/' },
  { name: 'Cancellation Policy', href: '/' },
  { name: 'Privacy Policy', href: '/' },
  { name: 'Terms of Service', href: '/' },
];

const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TwitterXIcon, href: '#', label: 'Twitter / X' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-zinc-950 text-background dark:text-zinc-100">
      {/* Main footer content */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-2xl mb-5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
                <Compass className="w-5 h-5 text-black" />
              </div>
              <span>Ethiopia<span className="text-amber-400">Premium</span></span>
            </Link>
            <p className="text-sm opacity-60 leading-relaxed mb-6 max-w-xs">
              Crafting premium travel experiences across the ancient lands of Ethiopia. Your journey into history, nature, and culture starts here.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-3 text-sm opacity-60">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Bole, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>hello@ethiopiapremium.et</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+251 911 000 000</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-amber-400 mb-5">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-amber-300 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-amber-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-amber-300 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase text-amber-400 mb-5">Support</h4>
            <ul className="space-y-3">
              {support.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-60 hover:opacity-100 hover:text-amber-300 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Ethiopian flag colors strip */}
            <div className="flex gap-1 mt-8 rounded-full overflow-hidden w-16 h-1.5">
              <div className="flex-1 bg-green-500" />
              <div className="flex-1 bg-amber-400" />
              <div className="flex-1 bg-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Ethiopia Premium Tourism. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs opacity-40">
            <span>Made with</span>
            <span className="text-red-400">❤</span>
            <span>for Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
