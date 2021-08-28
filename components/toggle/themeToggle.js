
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { useMoralis } from "react-moralis";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    const { user } = useMoralis();
    useEffect(() => setMounted(true), [])
    const handleClick = () => {
    const nextTheme = theme === "dark" ? 'light' : 'dark'
      
    console.log("nextTheme")
      console.log(nextTheme)
      setTheme(nextTheme),
        user.set("theme", nextTheme)
        user.save()
      if (user) {
          console.log("yes is user")
        setTheme(user.attributes.theme)
      }
      console.log("theme")
      console.log(user.attributes.theme)
    }
    return (
      <div className="flex justify-between items-center">
          <pre> {JSON.stringify(user?.attributes, undefined, 4)} </pre>
        <h2 className="mr-3">{user?.attributes.theme === 'dark' ? 'Dark' : 'Light'} Mode</h2>
        <div
          className="w-16 h-10 bg-gray-300 dark:bg-green-400 rounded-full flex-shrink-0 p-1"
          onClick={handleClick}
          aria-label="Toggle Dark Mode"
          role="button"
        >
          <div
            className={`bg-white w-8 h-8 rounded-full shadow-md duration-300 ease-in-out flex items-center justify-center dark:bg-gray-800 ${
              mounted && (user?.attributes.theme === 'dark' ? 'translate-x-6' : '')
            }`}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-400 dark:text-gray-200"
              >
                {user?.attributes.theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
              </svg>
            )}
          </div>
        </div>
      </div>
    )
  }

export default ThemeToggle