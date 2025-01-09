'use client';

import { useState } from "react";
import "./Preview.css";

const Preview = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    setError(''); // Clear error on input change
  };

  const generatePreviews = () => {
    if (!url.startsWith("http")) {
      setError("Please enter a valid URL starting with http:// or https://");
      return;
    }

    setLoading(true);
    setError(''); // Clear error on preview generation

    // const devices = [
    //   { class: "desktop", label: "Desktop (1200px scaled)", width: 1200, height: 500 },
    //   { class: "tablet", label: "Tablet (768px)", width: 768, height: 500 },
    //   { class: "mobile", label: "Mobile (375px)", width: 375, height: 500 }
    // ];

    const devices = [
      { class: "desktop", label: "Desktop (1200px scaled)" },
      { class: "tablet", label: "Tablet (768px)" },
      { class: "mobile", label: "Mobile (375px)" }
    ];

    try {
      const newPreviews = devices.map(device => ({
        class: device.class,
        label: device.label,
        src: url,
        // width: device.width,
        // height: device.height
      }));

      setPreviews(newPreviews);
    } catch (err) {
      console.error("Error generating previews:", err);
      setError("An error occurred while generating previews.");
    } finally {
      setLoading(false);
    }
  };

  const resetPreview = () => {
    setUrl('');
    setPreviews([]);
    setLoading(false);
    setError(''); // Clear error on reset
  };

  return (
    <section className="preview">
      <h2>Enter a URL to preview how it looks on different devices:</h2>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter site URL (e.g., https://example.com)"
      />
      <button onClick={generatePreviews} disabled={!url.startsWith("http")}>Preview</button>
      <button onClick={resetPreview}>Reset</button>

      {loading && <div id="loading">Loading previews...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="iframe-container" id="iframeContainer">
        {previews.map((preview, index) => (
          <div key={index} className="iframe-wrapper">
            <h3>{preview.label}</h3>
            <iframe
              className={preview.class}
              src={preview.src}
              // Uncomment the following line if you want to set width and height dynamically
              // style={{ width: preview.width, height: preview.height }}
              onError={() => setError("Failed to load the preview. Please check the URL.")}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Preview;