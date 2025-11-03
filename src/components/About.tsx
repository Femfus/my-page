import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that users love.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing for speed and delivering exceptional user experiences.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate developer with a love for creating elegant solutions
            to complex problems. With expertise in modern web technologies, I bring
            ideas to life through code.
          </p>
          <p className="text-lg text-gray-600">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or sharing knowledge with the developer
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
