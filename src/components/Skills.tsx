interface SkillCategory {
  title: string
  skills: string[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
