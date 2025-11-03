import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-primary-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Your Name
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
