import React from 'react';
import { Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

export default function About({ show }) {
  return (
    <article className={`about${show ? ' active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          Recent MS in Cybersecurity graduate from NYU with strong experience in backend development, cloud infrastructure, and system design. Proficient in building scalable, secure applications using AWS, REST APIs, and containerized environments.
        </p>
        <p>
          Passionate about delivering clean, maintainable code and solving real-world engineering problems.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Cloud color="#00ff41" size={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud & Backend Development</h4>
              <p className="service-item-text">
                Build secure, scalable APIs and cloud-native systems with AWS, Docker, and Kubernetes.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <Brain color="#00ff41" size={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI/ML Solutions</h4>
              <p className="service-item-text">
                Apply ML/DL models for cybersecurity, computer vision, and automation.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <ShieldCheck color="#00ff41" size={40} />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Security Engineering</h4>
              <p className="service-item-text">
                Vulnerability assessment, threat detection, and penetration testing.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
