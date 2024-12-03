import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Edu Dev</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a>
            {/* <a href="#projetos" className="text-gray-600 hover:text-gray-900">Projetos</a> */}
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Habilidades</a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Eduardojs1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-santos-4a6a35267/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:edujose2201@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <a href="#sobre" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#projetos" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projetos</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
              <a href="#contato" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}