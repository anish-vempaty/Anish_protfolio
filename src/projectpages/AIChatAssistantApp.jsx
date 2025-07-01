import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AIChatAssistantApp() {
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
        <h2 className="h2">AI Chat Assistant App (Android)</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b> <br />
          Built a full-featured AI-powered chatbot app for Android, using <b>Kotlin</b>, <b>Jetpack Compose</b>, and Google Gemini API. App supports both voice and text input, persistent chat, and a clean Material3 interface.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Voice and text chat with Gemini LLM</li>
          <li>Multi-turn session support</li>
          <li>Persistent chat history via Firestore</li>
          <li>Material3 dark mode and accessibility</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>Kotlin, Jetpack Compose, Google Gemini API, Firebase Firestore, Retrofit, Android Studio</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Making Gemini API call (Kotlin):</b>
        <pre>{`
suspend fun getGeminiReply(prompt: String): String {
    val request = GeminiRequest(prompt = prompt)
    val response = geminiApi.chat(request)
    return response.reply
}
`}</pre>
        <b>2. Firestore Integration for Message Logging:</b>
        <pre>{`
val message = hashMapOf("text" to userText, "timestamp" to Timestamp.now())
db.collection("chats").document(userId)
    .collection("messages").add(message)
`}</pre>
        <b>3. Compose UI Sample:</b>
        <pre>{`
@Composable
fun ChatBubble(text: String, isUser: Boolean) {
    Card(
        backgroundColor = if (isUser) Color(0xFF00ff41) else Color(0xFF222222),
        modifier = Modifier.padding(8.dp)
    ) {
        Text(text, style = MaterialTheme.typography.body1)
    }
}
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
