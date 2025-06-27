import React from "react";

export default function Uberlytics() {
  return (
    <article className="project-detail active">
      <header>
        <h2 className="h2">Uberlytics (Uber Surge Visualizer)</h2>
      </header>
      <section>
        <p>
          <b>Overview:</b><br />
          Built an interactive dashboard to visualize UberRUSH surge pricing trends. Uses real-time Firebase data and overlays surge heatmaps on Google Maps.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Live surge map overlays</li>
          <li>Interactive chart visualizations</li>
          <li>Historical and real-time data</li>
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          <li>React, Firebase Realtime DB, Google Maps API, Chart.js</li>
        </ul>
        <h3>Sample Code</h3>
        <b>1. Firebase Listener for Surge Data:</b>
        <pre>{`
import { onValue, ref } from "firebase/database";
const surgeRef = ref(db, "surgeData/");
onValue(surgeRef, (snapshot) => {
  setSurgeData(snapshot.val());
});
`}</pre>
        <b>2. Google Maps Heatmap Layer:</b>
        <pre>{`
import { GoogleMap, HeatmapLayer } from '@react-google-maps/api';
<GoogleMap ...>
  <HeatmapLayer data={surgePoints} />
</GoogleMap>
`}</pre>
        <b>3. Surge Trend Chart:</b>
        <pre>{`
import { Line } from "react-chartjs-2";
<Line data={surgeTrendData} options={chartOptions} />
`}</pre>
      </section>
    </article>
  );
}
