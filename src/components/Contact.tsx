import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Vamos conversar!</h3>
            <p className="text-gray-600 mb-8">
              Estou sempre aberto a novas oportunidades e parcerias interessantes. 
              Se você tem um projeto em mente ou quer bater um papo sobre tecnologia, 
              não hesite em entrar em contato!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-600" size={20} />
                <a href="mailto:edujose2201@gmail.com" className="text-gray-600 hover:text-indigo-600">
                  edujose2201@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" size={20} />
                <span className="text-gray-600">Belém, PA - Brasil</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}