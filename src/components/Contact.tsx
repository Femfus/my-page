import { useState, FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's talk about everything!</h3>
            <p className="text-gray-600 mb-8">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-primary-600 mr-4" size={24} />
                <span className="text-gray-700">your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-600 mr-4" size={24} />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary-600 mr-4" size={24} />
                <span className="text-gray-700">Your City, Country</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
