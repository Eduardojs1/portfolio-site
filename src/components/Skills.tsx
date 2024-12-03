import { SkillCard } from './SkillCard';

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["JS", "HTML CSS", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Python", "Java", "PostgreSQL", "Mysql", "Groovy"]
  },
  {
    category: "DevOps",
    items: ["Git", "Docker", "Linux"]
  },
  {
    category: "Ferramentas",
    items: ["VS Code", "Figma", "Postman", "DBeaver", "IntelliJ"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}