import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, MessageCircle, Clock, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              <Link to="/">Mel</Link>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Especialista em unhas de Fibra de vidro, transformando unhas comuns 
              em obras de arte com acabamento premium e designs exclusivos.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="hover:text-purple-400 transition-colors">Início</Link></li>
              <li><Link to="/agendamento" className="hover:text-purple-400 transition-colors">Agendamento</Link></li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Serviços</li>
              <li className="hover:text-purple-400 cursor-pointer transition-colors">Portfólio</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-slate-400">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:Mel@Fibradevidro.com" className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Mel@Fibradevidro.com</span>
              </a>
              <div className="flex items-center gap-3"><Users className="w-4 h-4 text-purple-400" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Seg-Sab: 9h às 19h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Mel - Unhas de Fibra de Vidro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
