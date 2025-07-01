import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Vibe() {
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
        <h2 className="h2">Vibe (Spotify‑Clone)</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Designed and developed a social music platform where users can share tracks, like/comment, and listen via Spotify integration. Features a modern, mobile-responsive UI and live activity feed.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Spotify OAuth2 login and track playback</li>
          <li>Post music, like, comment, and follow users</li>
          <li>Real-time updates with WebSockets</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>React, Node.js, Express, MongoDB, Spotify API, Socket.IO</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Spotify Auth Flow:</b>
        <pre>{`
app.get("/auth/spotify/callback", async (req, res) => {
  const { code } = req.query;
  // Exchange code for access_token
  const tokenRes = await axios.post(
    "https://accounts.spotify.com/api/token",
    // ...body and headers
  );
  res.redirect("/app?token=" + tokenRes.data.access_token);
});
`}</pre>
        <b>2. React: Playing a Track:</b>
        <pre>{`
const playTrack = (uri) => {
  fetch("/api/play", {
    method: "POST",
    body: JSON.stringify({ uri }),
    headers: { Authorization: "Bearer " + accessToken }
  });
};
`}</pre>
        <b>3. MongoDB Post Schema:</b>
        <pre>{`
const PostSchema = new mongoose.Schema({
  user: String,
  trackId: String,
  caption: String,
  likes: [String],
  comments: [{ user: String, text: String }]
});
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
