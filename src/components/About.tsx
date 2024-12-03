export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://media1.tenor.com/m/TDY3rDhJ6MMAAAAC/racoon.gif"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Atualmente me especializando em Desenvolvimento Web.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Educação</h3>
                <p className="text-gray-600">Cursando Bacharel em Sistemas da Informação</p>
                <p className="text-gray-500">Universidade Federal Rural da Amazônia</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Localização</h3>
                <p className="text-gray-600">Belém PA, Brasil</p>
                <p className="text-gray-500">Disponível para remoto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}