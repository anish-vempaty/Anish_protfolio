import React from "react";

export default function DeepFakeDetection() {
  return (
    <article className="project-detail active">
      <header>
        <h2 className="h2">DeepFake Detection Using CNN‑LSTM</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Designed and trained a hybrid CNN-LSTM model to detect DeepFake videos. The model extracts features from facial frames using a CNN, then analyzes temporal consistency using LSTM layers.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Automated frame extraction and face detection</li>
          <li>Hybrid CNN-LSTM pipeline</li>
          <li>Grad-CAM visualizations for explainability</li>
          <li>Deployed as a simple Flask web app for demo</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>PyTorch, OpenCV, Dlib, Flask, Grad-CAM</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Face Extraction with OpenCV + Dlib:</b>
        <pre>{`
import cv2
import dlib

detector = dlib.get_frontal_face_detector()
frame = cv2.imread("frame.jpg")
faces = detector(frame)
for face in faces:
    x, y, w, h = face.left(), face.top(), face.width(), face.height()
    crop = frame[y:y+h, x:x+w]
    # Save or preprocess crop...
`}</pre>
        <b>2. CNN-LSTM Model Skeleton (PyTorch):</b>
        <pre>{`
class CNNLSTM(nn.Module):
    def __init__(self):
        super().__init__()
        self.cnn = torchvision.models.resnet18(pretrained=True)
        self.lstm = nn.LSTM(input_size=512, hidden_size=256, num_layers=2)
    def forward(self, x_seq):
        cnn_feats = [self.cnn(x) for x in x_seq]
        feats = torch.stack(cnn_feats)
        out, _ = self.lstm(feats)
        return out
`}</pre>
        <b>3. Grad-CAM Visualization:</b>
        <pre>{`
from pytorch_grad_cam import GradCAM
cam = GradCAM(model=model, target_layers=[model.cnn.layer4])
grayscale_cam = cam(input_tensor=input_tensor)
`}</pre>
      </section>
    </article>
  );
}
