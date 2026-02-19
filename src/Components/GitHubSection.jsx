import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar'; import './GitHubSection.css';

const GitHubSection = ({ username = "mathe-tess" }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch real-time top repositories
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=3`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching GitHub data:", err));
  }, [username]);

  const calendarTheme = {
    dark: ['#111a2e', '#07361d', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section id="projects" className="github-section">
      <div className="github-container">

        {/* Real-Time Contribution Calendar */}
        <div className="activity-card">
          <div className="activity-header">
            <div>
              <h3>Coding Activity</h3>
              <p>Real-time contribution frequency via GitHub API</p>
            </div>
            <div className="top-badge">Active Developer</div>
          </div>
          <div className="calendar-overflow">
            <GitHubCalendar
              username={username}
              theme={calendarTheme}
              fontSize={13}
              blockSize={12}
            />
          </div>
        </div>

        {/* Live Repository Cards */}
        <div className="repo-grid">
          {loading ? (
            <p className="loading-text">Fetching latest builds...</p>
          ) : (
            repos.map(repo => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="repo-card">
                <div className="repo-top">
                  <span className="repo-icon">📁</span>
                  <span className="repo-stars">★ {repo.stargazers_count}</span>
                </div>
                <h4 className="repo-name">{repo.name}</h4>
                <p className="repo-desc">{repo.description || "No description provided."}</p>
                <div className="repo-footer">
                  <span className="repo-lang">{repo.language}</span>
                  <span className="repo-link">View Source →</span>
                </div>
              </a>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;