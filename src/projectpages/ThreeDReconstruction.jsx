import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ThreeDReconstruction() {
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
        <h2 className="h2">3D Scene Reconstruction from Single Camera Video</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b> <br />
          Developed an end-to-end system to reconstruct 3D scenes from a single video source, using a combination of structure-from-motion, monocular depth estimation, and neural rendering (NeRF). Result: users can create photorealistic 3D models of real-world environments using only a phone camera.
        </p>
        <h3>Tech Stack</h3>
        <ul>
          <li>Python, OpenCV, COLMAP, PyTorch, MiDaS/DPT, NeRF (Instant-NGP)</li>
        </ul>
        <h3>Workflow</h3>
        <ol>
          <li>Extract frames from the input video using OpenCV.</li>
          <li>Use COLMAP to estimate camera poses and build a sparse 3D point cloud.</li>
          <li>Apply MiDaS/DPT for dense monocular depth estimation on each frame.</li>
          <li>Fuse all depth maps to generate a full 3D scene.</li>
          <li>Train NeRF for photorealistic rendering.</li>
        </ol>
        <h3>Key Code Snippets</h3>
        <b>1. Extract frames with OpenCV:</b>
        <pre>{`
import cv2
video_path = "input.mp4"
cap = cv2.VideoCapture(video_path)
frame_idx = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    cv2.imwrite(f"frames/frame_{frame_idx:04d}.jpg", frame)
    frame_idx += 1
cap.release()
`}</pre>
        <b>2. Run COLMAP via subprocess (pseudo):</b>
        <pre>{`
import subprocess
# Feature extraction & mapping
subprocess.run([
    "colmap", "automatic_reconstructor",
    "--workspace_path", "colmap_workspace",
    "--image_path", "frames"
])
`}</pre>
        <b>3. Run MiDaS for depth estimation:</b>
        <pre>{`
import torch
from midas.dpt_depth import DPTDepthModel
from torchvision.transforms import Compose, Resize, ToTensor

model = DPTDepthModel("dpt_large", False)
model.eval()
img = cv2.imread("frames/frame_0001.jpg")
input_tensor = Compose([Resize(384), ToTensor()])(img).unsqueeze(0)
with torch.no_grad():
    depth = model(input_tensor)
`}</pre>
        <b>4. Train NeRF (using Instant-NGP):</b>
        <pre>{`
# Prepare data and call ngp scripts
# Refer: https://github.com/NVlabs/instant-ngp
python scripts/run.py --scene ./colmap_workspace
`}</pre>
        <h3>Result</h3>
        <ul>
          <li>Dense 3D point cloud and mesh of room/scene</li>
          <li>NeRF output: flythrough videos, photorealistic 3D renders</li>
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
