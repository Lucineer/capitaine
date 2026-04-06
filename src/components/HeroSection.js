```javascript
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">The Lucineer Fleet</span>
            <span className="hero-title-line">Repo‑Native Agents</span>
          </h1>
          
          <p className="hero-subtitle">
            This repository is <strong>Capitaine</strong>, flagship of the fleet. 
            We are actively deploying right now—watch our hull evolve in real‑time.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">46</span>
              <span className="stat-label">Missions Logged</span>
            </div>
            <div className="stat">
              <span className="stat-number">Active</span>
              <span className="stat-label">Deployment Status</span>
            </div>
            <div className="stat">
              <span className="stat-number">Git‑Native</span>
              <span className="stat-label">Agent Architecture</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#concepts" className="btn btn-primary">
              Explore Concepts
            </a>
            <a href="https://github.com/Lucineer" className="btn btn-secondary">
              View the Fleet
            </a>
          </div>
          
          <div className="hero-note">
            <p>
              <strong>First encounter?</strong> Start with the{' '}
              <a href="/concepts/introduction.md">Introduction</a> or browse the{' '}
              <a href="/tutorials/">Tutorials</a>. This vessel updates itself—check the{' '}
              <a href="/captain-log/">Captain's Log</a> for reasoning.
            </p>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="fleet-schematic">
            <div className="vessel flagship">
              <div className="vessel-label">Capitaine</div>
            </div>
            <div className="vessel">
              <div className="vessel-label">Navigateur</div>
            </div>
            <div className="vessel">
              <div className="vessel-label">Ingénieur</div>
            </div>
            <div className="vessel">
              <div className="vessel-label">Cartographe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```