import { useState, useEffect } from 'react'

interface GitHubRepo {
  name: string
  description: string
  stars: number
  language: string
  url: string
}

interface GitHubUser {
  name: string
  bio: string
  public_repos: number
  followers: number
  avatar_url: string
}

const GitHubWidget = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [totalStars, setTotalStars] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/femfus')
        const userData = await userResponse.json()
        
        setUser({
          name: userData.name || userData.login,
          bio: userData.bio || 'Developer',
          public_repos: userData.public_repos,
          followers: userData.followers,
          avatar_url: userData.avatar_url
        })

        // Fetch all repos to calculate total stars
        const allReposResponse = await fetch('https://api.github.com/users/femfus/repos?per_page=100')
        const allReposData = await allReposResponse.json()
        
        const stars = allReposData.reduce((total: number, repo: any) => total + repo.stargazers_count, 0)
        setTotalStars(stars)

        // Fetch specific repositories
        const gavResponse = await fetch('https://api.github.com/repos/Femfus/gav')
        const millionwareResponse = await fetch('https://api.github.com/repos/Femfus/Millionware-fix')
        
        const gavData = await gavResponse.json()
        const millionwareData = await millionwareResponse.json()
        
        const specificRepos = [
          {
            name: gavData.name,
            description: gavData.description || 'No description',
            stars: gavData.stargazers_count,
            language: gavData.language || 'Unknown',
            url: gavData.html_url
          },
          {
            name: millionwareData.name,
            description: millionwareData.description || 'No description',
            stars: millionwareData.stargazers_count,
            language: millionwareData.language || 'Unknown',
            url: millionwareData.html_url
          }
        ]
        
        setRepos(specificRepos)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
        setLoading(false)
      }
    }

    fetchGitHubData()
    // Refresh every 5 minutes
    const interval = setInterval(fetchGitHubData, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="boxy bg-dark-surface animate-fade-in">
      <div className="border-b-2 border-dark-border px-4 py-2 bg-dark-bg">
        <span className="text-dark-text font-mono text-sm">/GitHub.app</span>
      </div>
      <div className="p-4">
        {loading ? (
          <div className="text-center text-white text-sm">Loading...</div>
        ) : (
          <>
            {/* GitHub Stats */}
            {user && (
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🐙</div>
                  <div>
                    <a 
                      href="https://github.com/femfus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-gray-300"
                    >
                      @femfus
                    </a>
                    <p className="text-white text-xs">{user.bio}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 text-sm text-white">
                  <div>
                    <span className="font-semibold">{user.public_repos}</span> repos
                  </div>
                  <div>
                    <span className="font-semibold">{totalStars}</span> stars
                  </div>
                </div>
              </div>
            )}

            {/* Featured Repositories */}
            <div className="border-t-2 border-dark-border pt-3">
              <p className="text-xs font-bold text-white uppercase mb-2">Featured Repos</p>
              <div className="space-y-2">
                {repos.map((repo, index) => (
                  <a
                    key={index}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:bg-gray-900 p-2 rounded transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold">{repo.name}</span>
                      {repo.stars > 0 && (
                        <span className="text-white text-xs">⭐ {repo.stars}</span>
                      )}
                    </div>
                    <p className="text-white text-xs truncate">{repo.description}</p>
                    {repo.language && (
                      <span className="text-white text-xs">• {repo.language}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default GitHubWidget
