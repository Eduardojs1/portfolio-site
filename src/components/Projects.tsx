import { ProjectCard } from './ProjectCard';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Seu projeto",
    description: "Sua Descrição.",
    image: "imagem",
    tags: ["linguagens / ferramentas utilizadas"],
    link: "#"
  },

];

export function Projects() {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}