import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Creative Problem Solver
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            I build exceptional digital experiences that combine beautiful design
            with powerful functionality.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-gray-100 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-20 animate-bounce">
            <a href="#about">
              <ArrowDown className="mx-auto text-gray-400" size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
