import { useState, useEffect } from 'react'

interface WeatherData {
  temperature: number
  description: string
  icon: string
  location: string
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Fetch weather data for Tórshavn, Faroe Islands
    const fetchWeather = async () => {
      try {
        // Using Open-Meteo API (free, no API key needed)
        const lat = 62.0079 // Tórshavn latitude
        const lon = -6.7900 // Tórshavn longitude
        
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Atlantic/Faroe`
        )
        const data = await response.json()
        
        const weatherCode = data.current.weather_code
        const weatherDesc = getWeatherDescription(weatherCode)
        const weatherIcon = getWeatherIcon(weatherCode)
        
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          description: weatherDesc,
          icon: weatherIcon,
          location: 'Havn, Faroe Islands'
        })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching weather:', error)
        setLoading(false)
      }
    }

    fetchWeather()
    // Refresh weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 600000)

    return () => {
      clearInterval(timer)
      clearInterval(weatherInterval)
    }
  }, [])

  const getWeatherDescription = (code: number): string => {
    const weatherCodes: { [key: number]: string } = {
      0: 'Clear',
      1: 'Mainly Clear',
      2: 'Partly Cloudy',
      3: 'Overcast',
      45: 'Foggy',
      48: 'Foggy',
      51: 'Light Drizzle',
      53: 'Drizzle',
      55: 'Heavy Drizzle',
      61: 'Light Rain',
      63: 'Rain',
      65: 'Heavy Rain',
      71: 'Light Snow',
      73: 'Snow',
      75: 'Heavy Snow',
      77: 'Snow Grains',
      80: 'Light Showers',
      81: 'Showers',
      82: 'Heavy Showers',
      85: 'Light Snow Showers',
      86: 'Snow Showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with Hail',
      99: 'Heavy Thunderstorm'
    }
    return weatherCodes[code] || 'Unknown'
  }

  const getWeatherIcon = (code: number): string => {
    if (code === 0 || code === 1) return '☀️'
    if (code === 2) return '⛅'
    if (code === 3) return '☁️'
    if (code >= 45 && code <= 48) return '🌫️'
    if (code >= 51 && code <= 55) return '🌦️'
    if (code >= 61 && code <= 65) return '🌧️'
    if (code >= 71 && code <= 77) return '❄️'
    if (code >= 80 && code <= 82) return '🌧️'
    if (code >= 85 && code <= 86) return '🌨️'
    if (code >= 95) return '⛈️'
    return '🌤️'
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="boxy bg-dark-surface animate-fade-in">
      <div className="border-b-2 border-dark-border px-4 py-2 bg-dark-bg">
        <span className="text-dark-text font-mono text-sm">/Weather.app</span>
      </div>
      <div className="p-4">
        {/* Time Display */}
        <div className="text-center mb-3">
          <div className="text-2xl font-bold text-dark-text font-mono">
            {formatTime(currentTime)}
          </div>
          <div className="text-xs text-dark-muted mt-1">
            {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Weather Display */}
        {loading ? (
          <div className="text-center text-dark-muted text-sm">Loading...</div>
        ) : weather ? (
          <div className="text-center border-t-2 border-dark-border pt-3">
            <div className="flex items-center justify-center gap-3">
              <div className="text-4xl">{weather.icon}</div>
              <div className="text-left">
                <div className="text-2xl font-bold text-dark-text">
                  {weather.temperature}°C
                </div>
                <div className="text-sm text-dark-muted">
                  {weather.description}
                </div>
              </div>
            </div>
            <div className="text-xs text-dark-muted mt-2">
              📍 Havn, FO
            </div>
          </div>
        ) : (
          <div className="text-center text-dark-muted text-sm">Weather unavailable</div>
        )}
      </div>
    </div>
  )
}

export default WeatherWidget
