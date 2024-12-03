import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedText';
import { ParticlesBackground } from './ParticlesBackground';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16 relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text="Olá, me chamo"
            className="text-5xl font-bold text-gray-900 mb-2"
          />
          <AnimatedText
            text="Edu : )"
            className="text-5xl font-bold text-indigo-600 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Especializando em Desenvolvimento Web e apaixonado por tecnologia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a 
              href="#skills"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105"
            >
              Ver Habilidades
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all hover:scale-105"
            >
              Contato
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://media1.tenor.com/m/DneaOf7azzcAAAAd/%D0%B5%D0%BD%D0%BE%D1%82.gif"
            alt="Workspace"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}