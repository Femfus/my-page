import WeatherWidget from './components/WeatherWidget'
import GitHubWidget from './components/GitHubWidget'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in">
              {/* Profile Header */}
              <div className="boxy bg-dark-surface">
                <div className="border-b-2 border-dark-border px-4 py-3 bg-dark-bg">
                  <span className="text-dark-text font-mono text-sm">/Profile.app</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Left side - Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src="/src/sources/profile-picture.png" 
                          alt="Cila's profile" 
                          className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
                        />
                        <div className="flex-1">
                          <h1 className="text-3xl font-bold text-dark-text mb-1">
                            I'm Cila <span className="inline-block animate-wave">👋</span>
                          </h1>
                          <p className="text-dark-muted mb-2">(she/her)</p>
                          <p className="text-dark-text mb-3">A developer based in the Faroe Islands.</p>
                          <div className="flex flex-wrap gap-3 text-sm text-dark-muted">
                            <span>📍 Faroe Islands</span>
                            <span>💼 Available for work</span>
                            <span>✉️ hi@femfus.dev</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Devices */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">💻</span>
                        <span className="font-semibold text-dark-text">My Devices</span>
                      </div>
                      <div className="space-y-1 text-sm text-dark-muted">
                        <p>• Thinkpad T480</p>
                        <p>• Oneplus Nord 2 5G</p>
                        <p>• Gaming PC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me & Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* About Me */}
                <div className="boxy bg-dark-surface">
                  <div className="border-b-2 border-dark-border px-4 py-3 bg-dark-bg">
                    <span className="text-dark-text font-mono text-sm">/AboutMe.txt</span>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🐧</span>
                          <span className="font-semibold text-dark-text">Tech Nerd</span>
                        </div>
                        <p className="text-sm text-dark-muted ml-7">Tech nerd who likes Linux</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">☕</span>
                          <span className="font-semibold text-dark-text">Caffeine Addict</span>
                        </div>
                        <p className="text-sm text-dark-muted ml-7">Caffeine addict</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💻</span>
                          <span className="font-semibold text-dark-text">Developer</span>
                        </div>
                        <p className="text-sm text-dark-muted ml-7">I do both frontend and backend development</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="boxy bg-dark-surface">
                  <div className="border-b-2 border-dark-border px-4 py-3 bg-dark-bg">
                    <span className="text-dark-text font-mono text-sm">/Skills.app</span>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🛠️</span>
                          <span className="font-semibold text-dark-text">Tools</span>
                        </div>
                        <p className="text-sm text-dark-muted ml-7">VS Code, Adobe Suite, Figma</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🌐</span>
                          <span className="font-semibold text-dark-text">Networking</span>
                        </div>
                        <p className="text-sm text-dark-muted ml-7">Network configuration & management</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">💻</span>
                          <span className="font-semibold text-dark-text">Tech Stack</span>
                        </div>
                        <div className="ml-7 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-dark-bg text-pink-400 rounded text-xs font-mono">Python</span>
                          <span className="px-2 py-1 bg-dark-bg text-pink-400 rounded text-xs font-mono">React</span>
                          <span className="px-2 py-1 bg-dark-bg text-pink-400 rounded text-xs font-mono">Electron</span>
                          <span className="px-2 py-1 bg-dark-bg text-pink-400 rounded text-xs font-mono">TypeScript</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Widgets */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {/* Weather Widget */}
              <WeatherWidget />
              
              {/* GitHub Widget */}
              <GitHubWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
