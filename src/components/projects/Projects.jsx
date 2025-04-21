import React, { useEffect, useState } from 'react'
import './Projects.css'

function Projects() {
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
      const fetchRepos = async () => {
        setIsLoading(true)
        try {
          const res = await fetch('https://api.github.com/users/holyalmond/repos')
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          const data = await res.json()
          if (Array.isArray(data)) {
            setRepos(data)
          } else {
            throw new Error('Invalid data format received from GitHub API')
          }
        } catch (error) {
          console.error('Failed to fetch repos', error)
          setError(error.message)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchRepos()
    }, [])

    if (!isMounted) {
      return null
    }

    return(
        <>
        <div className="projects">
            <h3 id="projects" className='zetta'>projects</h3>
            <div className='terminal'>
                <span className="command">$ <span className="highlight-orange">fetch-projects</span></span>
                <div className="output">
                {isLoading ? (
                    <p className="loading">Loading projects...</p>
                ) : error ? (
                    <p className="error">Error: {error}</p>
                ) : (
                    Array.isArray(repos) && repos.length > 0 ? (
                        repos
                            .filter(repo => repo.name.toLowerCase() !== repo.owner.login.toLowerCase() && repo.name !== "holyalmond.github.io")
                            .map((repo) => (
                                <div key={repo.id} className="project-block">
                                <p className="repo-name">{'>'}<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='highlight-pink'>{` ${repo.name}`}</a></p>
                                <div className="repo-details">
                                    <p><span className='highlight-teal'>description</span> {repo.description || 'No description'}</p>
                                    <p><span className='highlight-teal'>language</span> {repo.language || 'N/A'}</p>
                                    <p><span className='highlight-teal'>stars</span> {repo.stargazers_count}</p>
                                    <p><span className='highlight-teal'>updated</span> {repo.updated_at.slice(0, 10)}</p>
                                </div>
                                </div>
                        ))
                    ) : (
                        <p className="no-projects">No projects found</p>
                    )
                )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects