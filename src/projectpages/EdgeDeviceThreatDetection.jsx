import React from "react";
import { useNavigate } from 'react-router-dom';

export default function EdgeDeviceThreatDetection() {
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
        <h2 className="h2">Edge Device Cyber Threat Detection Using ML</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Designed and implemented a real-time cyber threat detection system for edge devices (e.g., Raspberry Pi 5), leveraging machine learning to identify malicious network traffic. The project enables local intrusion detection at the network edge, empowering IoT and small device deployments with advanced security—without relying on cloud connectivity.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>
            Captures live network packets using <b>Scapy</b> on a Raspberry Pi
          </li>
          <li>
            Extracts features from packet flows in real time (protocol, port, packet size, etc.)
          </li>
          <li>
            Loads a pre-trained ML model (Random Forest, SVM, or Deep Learning) exported via <b>joblib</b> or <b>ONNX</b>
          </li>
          <li>
            Classifies network traffic into benign or malicious (DoS, Probe, R2L, U2R, etc.) using the model
          </li>
          <li>
            Provides CLI/dashboard alerts for detected threats
          </li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>Python, Scapy, scikit-learn, PyTorch, joblib, ONNX, Raspberry Pi OS</li>
        </ul>
        <h3>Workflow</h3>
        <ol>
          <li>
            <b>Dataset & Model Training:</b> Used public datasets (NSL-KDD, CICIDS) to train and evaluate ML models for network intrusion detection. Tuned for low resource usage and fast inference.
          </li>
          <li>
            <b>Model Deployment:</b> Exported trained model to <code>.pkl</code> (joblib) or ONNX, deployed on Raspberry Pi.
          </li>
          <li>
            <b>Real-time Packet Capture:</b> Used Scapy to sniff packets on the device network interface, extract features, and preprocess for ML input.
          </li>
          <li>
            <b>Prediction & Alerting:</b> Ran predictions locally and flagged anomalous or malicious flows via command line, local dashboard, or push notification.
          </li>
        </ol>
        <h3>Key Code Snippets</h3>
        <b>1. Packet Capture and Feature Extraction (Python):</b>
        <pre>{`
from scapy.all import sniff, IP, TCP, UDP
def extract_features(pkt):
    features = []
    if IP in pkt:
        features.append(pkt[IP].len)
        features.append(pkt[IP].proto)
        features.append(pkt[IP].ttl)
        if TCP in pkt:
            features.extend([pkt[TCP].sport, pkt[TCP].dport])
        elif UDP in pkt:
            features.extend([pkt[UDP].sport, pkt[UDP].dport])
        else:
            features.extend([0, 0])
    return features

def on_packet(pkt):
    feats = extract_features(pkt)
    # Preprocess feats, reshape, scale, predict...
    pred = clf.predict([feats])
    if pred[0] == "malicious":
        print("[ALERT] Threat detected:", feats)
sniff(prn=on_packet, store=0)
`}</pre>
        <b>2. Load Pre-trained Model (scikit-learn/joblib):</b>
        <pre>{`
import joblib
clf = joblib.load('ids_rf_model.pkl')
`}</pre>
        <b>3. CLI Alerting (simple):</b>
        <pre>{`
if pred[0] == "malicious":
    print("\\033[91m[ALERT] Malicious packet detected!\\033[0m")
`}</pre>
        <h3>Result</h3>
        <ul>
          <li>Local detection of cyber threats with <b>&lt;1s</b> latency per flow</li>
          <li>Resource-light enough to run on a Raspberry Pi 5 or similar SBCs</li>
          <li>Scalable to any edge/IOT network deployment</li>
        </ul>
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
