import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform with advanced filtering, cart management, and payment integration. Built with modern best practices.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Project Three',
      description: 'A mobile-first progressive web app for task management with offline capabilities and push notifications.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['PWA', 'React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={20} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
