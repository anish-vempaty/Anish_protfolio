import React from "react";

export default function PerspectiveVR() {
  return (
    <article className="project-detail active">
      <header>
        <h2 className="h2">Perspective (VR Puzzle Game)</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Created an immersive VR puzzle game in Unity for Oculus Quest. Players solve spatial and gravity-based puzzles, with levels that shift based on the player’s perspective.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Dynamic perspective-based level mechanics</li>
          <li>VR motion controls and object manipulation</li>
          <li>Custom shaders and sound effects</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>Unity, C#, Oculus SDK, Blender</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Gravity Flip Mechanic (C#):</b>
        <pre>{`
public class GravityFlip : MonoBehaviour {
  public void FlipGravity() {
    Physics.gravity = -Physics.gravity;
  }
  void Update() {
    if (OVRInput.GetDown(OVRInput.Button.One)) {
      FlipGravity();
    }
  }
}
`}</pre>
        <b>2. VR Controller Object Grab:</b>
        <pre>{`
void GrabObject() {
  RaycastHit hit;
  if (Physics.Raycast(controller.position, controller.forward, out hit, 2.0f)) {
    if (hit.collider.CompareTag("Grabbable")) {
      // Attach object to hand...
    }
  }
}
`}</pre>
      </section>
    </article>
  );
}
