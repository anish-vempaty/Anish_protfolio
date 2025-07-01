import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AICodingMentor() {
  const navigate = useNavigate();
  return (
    <article className="project-detail active">
        <button
        className="back-btn"
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          color: '#00ff41',
          border: 'none',
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginBottom: '2rem',
          textDecoration: 'underline',
        }}
      >
        ← Back to Portfolio
      </button>
      <header>
        <h2 className="h2">AI-Powered Coding Mentor</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Built an AI pair-programming mentor using GPT-3.5, providing live code review, explanation, and instant bug suggestions via a web and desktop UI.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Reads and analyzes source files (Python, JS, C++)</li>
          <li>Suggests code refactors, fixes, and best practices</li>
          <li>Explains code logic and answers natural language queries</li>
          <li>Applies changes with user approval (desktop app)</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>Python, GPT-3.5 (OpenAI), React, PyQt6, dotenv</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Calling GPT-3.5 for Code Review:</b>
        <pre>{`
import openai
openai.api_key = os.environ["OPENAI_API_KEY"]
def get_suggestion(code):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": f"Review and improve this code:\n{code}"}
        ]
    )
    return response['choices'][0]['message']['content']
`}</pre>
        <b>2. File Selection in PyQt6:</b>
        <pre>{`
from PyQt6.QtWidgets import QFileDialog
filename, _ = QFileDialog.getOpenFileName(self, "Open Source File", "", "All Files (*)")
`}</pre>
        <b>3. Auto-applying AI Suggestion:</b>
        <pre>{`
def apply_suggestion(filepath, suggestion):
    with open(filepath, 'w') as f:
        f.write(suggestion)
`}</pre>
      </section>
      <button
        className="back-btn"
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          color: '#00ff41',
          border: 'none',
          fontSize: '1.1rem',
          cursor: 'pointer',
          marginBottom: '2rem',
          textDecoration: 'underline',
        }}
      >
        ← Back to Portfolio
      </button>
    </article>
  );
}
