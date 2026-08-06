/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Play, Menu, X } from 'lucide-react';

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c1.9-1.4,3.74-2.92,5.5-4.52a75.41,75.41,0,0,0,67,0c1.76,1.6,3.6,3.12,5.5,4.52a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

interface HeaderProps {
  onDiscordClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ onDiscordClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'My Work', href: '#portfolio' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 py-4 border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-xs border-gray-200/40'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer" id="header-brand-logo">
          <img 
            src="https://i.ibb.co/tw1gh8kw/logo-NO-BACKGROUND.png" 
            alt="Atlantic Media Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform duration-300" 
            referrerPolicy="no-referrer"
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-secondary-dark group-hover:text-youtube transition-colors uppercase">
            Atlantic<span className="font-light text-gray-500">Media</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-bold uppercase text-gray-500 hover:text-youtube transition-colors tracking-widest relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-youtube after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <button
            id="nav-cta-discord"
            onClick={(e) => {
              e.preventDefault();
              onDiscordClick(e);
            }}
            className="px-4 py-2 bg-secondary-dark hover:bg-youtube text-white text-xs font-bold uppercase tracking-widest font-mono rounded-lg transition-all shadow-sm flex items-center gap-2.5 cursor-pointer border border-transparent"
          >
            <DiscordIcon className="w-4 h-4" />
            Discord
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary-dark hover:text-youtube transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden absolute top-full inset-x-0 bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-fade-in-down"
        >
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase font-mono tracking-wider text-gray-600 hover:text-youtube py-2 px-3 hover:bg-gray-50 rounded-lg transition-all"
            >
              {link.name}
            </a>
          ))}
          <button
            id="mobile-nav-cta"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onDiscordClick(e);
            }}
            className="mt-2 w-full text-center py-3 bg-youtube text-white font-bold tracking-widest font-mono text-xs uppercase rounded-lg shadow-sm cursor-pointer"
          >
            Discord DM
          </button>
        </div>
      )}
    </header>
  );
}
