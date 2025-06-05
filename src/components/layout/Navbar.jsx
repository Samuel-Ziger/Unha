
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/#sobre" }, 
    { label: "Serviços", href: "/#servicos" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Depoimentos", href: "/#depoimentos" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(2)); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect pattern-dots">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold gradient-text">
          <Sparkles className="w-7 h-7" />
          Mel
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => {
                if (item.href.startsWith("/#")) {
                  e.preventDefault();
                  scrollToSection(item.href);
                }
              }}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Link to="/agendamento">Agendar Horário</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-purple-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-effect border-t border-slate-700/50"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navItems.map(item => (
                 <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-slate-200 hover:text-purple-300 transition-colors text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="w-full max-w-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4" onClick={() => setIsOpen(false)}>
                <Link to="/agendamento">Agendar Horário</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

