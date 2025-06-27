import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { title: 'Edge Device Cyber Threat Detection Using ML', category: 'AI / Cybersecurity', img: '/assets/images/Raspi.png', 
    description: 'Designed and deployed a real-time network intrusion detection system for edge devices (e.g., Raspberry Pi 5) using machine learning. Captures live network packets, extracts features, and locally classifies traffic as benign or malicious using a pre-trained ML model. Enables on-device cyber threat detection for IoT and small-network deployments—no cloud dependency required.', 
    route: '/projects/edge-threat-detection' },
  { title: 'Cloud-Based Source Code Vulnerability Detector (AWS)', category: 'Cloud Security', img: '/assets/images/project-vulnscan.png', description: 'Serverless AWS app scanning GitHub repos for vulnerabilities...', link: 'https://github.com/Abhi270600/Cloud-Based-Source-Code-Vulnerability-Detector' },
  { title: '3D Scene Reconstruction from Single Camera Video', category: 'Computer Vision', img: '/assets/images/project-3d.png', description: 'End-to-end 3D pipeline using COLMAP, MiDaS, NeRF...', route: '/projects/ThreeDReconstruction' },
  {
  title: 'AI Code Assistant (Gemini Flash Edition)',
  category: 'AI / Productivity',
  img: '/assets/images/project-ai-code-assistant.png', // Use a screenshot of your GUI!
  description: `Desktop AI coding assistant with PyQt6 GUI — reviews, suggests, and auto-edits code using Google Gemini 2.5 Flash API. One-click VS Code integration and secure API key management.`,
  link: 'https://github.com/anish-vempaty/ai-code-assistant'
},
  { title: 'AI Chat Assistant App (Android)', category: 'Mobile / AI', img: '/assets/images/project-chat.png', description: 'Kotlin Android app using Gemini API with voice/chat...', link: 'https://github.com/anish-vempaty/android-ai-chat' },
  { title: 'Volcano Project Security Self‑Assessment', category: 'Security Audit', img: '/assets/images/project-volcano.png', description: 'Threat model for CNCF Volcano project; community-driven.', link: 'https://github.com/volcano-sh/volcanot' },
  {
  title: 'Linux Disk I/O & System Call Benchmark Suite (NYU)',
  category: 'Systems / OS',
  img: '/assets/images/project-os-bench.png', // Swap in a screenshot or graph
  description: `Suite of C programs benchmarking Linux file I/O, caching, system call overhead, and multi-threaded performance. Features real-world comparisons with 'dd', detailed performance graphs, and a Matplotlib-based analysis report.`,
  link: 'https://github.com/anish-vempaty/Intro_to_OS_NYU_final_project'
},

  { title: 'DeepFake Detection Using CNN‑LSTM', category: 'Deep Learning', img: '/assets/images/project-deepfake.png', description: 'Hybrid CNN-LSTM model with Flask UI and Grad-CAM.', link: 'https://github.com/anish-vempaty/deepfake-detector' },
  { title: 'AI-Enhanced WiFi Decryption (Pwnagotchi)', category: 'Edge AI / Security', img: '/assets/images/project-pwnagotchi.png', description: 'RL-powered handshake capture & decryption on Pi Zero.', link: 'https://github.com/anish-vempaty/pwnagotchi_v2' },
  { title: 'AI-Powered Coding Mentor', category: 'GenAI / EdTech', img: '/assets/images/project-coding-mentor.png', description: 'GPT-3.5 assistant for code explainability & debugging.', link: 'https://github.com/anish-vempaty/coding-mentor-llm' },
  {
  title: 'Dining Concierge Chatbot (Serverless Microservices, NYU)',
  category: 'Cloud / AWS',
  img: '/assets/images/project-dining-chatbot.png', // Use a diagram of your architecture or frontend screenshot
  description: `Serverless restaurant recommender chatbot (React + AWS Lex, Lambda, SQS, SNS, DynamoDB, OpenSearch). Full cloud deployment—collects preferences and emails personalized restaurant matches via chat.`,
  link: 'https://github.com/anish-vempaty/Cloud_Computing_Assignment-1'
},
{
  title: 'AI Photo Album (AWS, Rekognition, Lex, OpenSearch)',
  category: 'Cloud / AI / Fullstack',
  img: '/assets/images/project-ai-photo-album.png', // Use a screenshot of your app's UI!
  description: `AI-powered web photo album using AWS S3, Lambda, Rekognition, Lex, OpenSearch. Upload, auto-label, and natural language search photos from a beautiful cloud-hosted frontend.`,
  link: 'https://github.com/anish-vempaty/AI-photo-album'
},
  { title: 'Vibe (Spotify‑Clone)', category: 'Web Dev', img: '/assets/images/project-vibe.png', description: '"Instagram for music" full‑stack app using Spotify API.', link: 'https://github.com/anish-vempaty/vibe' },
  { title: 'Perspective (VR Puzzle Game)', category: 'Game Dev', img: '/assets/images/project-perspective.png', description: 'Unity VR maze game with gravity-shifting puzzles.', link: 'https://github.com/anish-vempaty/perspective' },
  { title: 'Uberlytics (Uber Surge Visualizer)', category: 'Frontend / Data Viz', img: '/assets/images/project-uberlytics.png', description: 'Website visualizing UberRUSH surge trends via Firebase.', link: 'https://github.com/anish-vempaty/uberlytics' },
  { title: 'ChatBox (Community Chat Platform)', category: 'App Dev', img: '/assets/images/project-chatbox.png', description: 'Elegant group chat app for communities.', link: 'https://github.com/anish-vempaty/firechat_1' },
  { title: 'Micello Integrations', category: 'API / Mapping', img: '/assets/images/project-micello.png', description: 'Indoor map integrations with FlightStats and Uber.', link: 'https://github.com/anish-vempaty/micello-integrations' },
  {
  title: 'Live Indian Railways Tweet Emergency Classifier',
  category: 'NLP / Streaming AI',
  img: '/assets/images/project-irctc-tweets.png',
  description: `Built a dataset of 5,000+ manually labeled tweets mentioning IRCTC/Indian Railways. Trained an AI model to classify tweets as emergencies or feedback. Used Kafka, Spark, and a web frontend for live tweet ingestion and classification—helping IRCTC teams triage urgent cases in real time.`,
  link: 'https://github.com/anish-vempaty/major_proj'
},
{
  title: 'Twitter User Personality Classification (MBTI)',
  category: 'NLP / ML',
  img: '/assets/images/project-mbti.png',
  description: `Analyzed 8,000+ Twitter users to predict MBTI personality types from tweet history. Implemented and compared Naive Bayes, Random Forest, SVM, Decision Tree, and XGBoost—Random Forest outperformed others. Demonstrates NLP feature engineering and model comparison.`,
  link: 'https://github.com/anish-vempaty/Personality-Classification-using-twitter'
},


];

export default function Portfolio({ show }) {
  return (
    <article className={`portfolio${show ? ' active' : ''}`} data-page="portfolio">
      <header><h2 className="h2 article-title">Portfolio</h2></header>
      <section className="projects">
        <ul className="project-list">
          {projects.map((p, i) => (
            <li key={i} className="project-item active" data-category={p.category.toLowerCase()}>
              {p.route ? (
                <Link to={p.route}>
                  <figure className="project-img">
                    <div className="project-item-icon-box"><span role="img" aria-label="eye">👁️</span></div>
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-category">{p.category}</p>
                  <p style={{ color: '#9fffa6' }}>{p.description}</p>
                </Link>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <figure className="project-img">
                    <div className="project-item-icon-box"><span role="img" aria-label="eye">👁️</span></div>
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-category">{p.category}</p>
                  <p style={{ color: '#9fffa6' }}>{p.description}</p>
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
