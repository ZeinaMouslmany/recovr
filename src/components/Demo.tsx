import React from 'react';
import './Demo.css';

const Demo: React.FC = () => {
  return (
    <section className="demo">
      <h2>PsyTechVR Demo</h2>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/cNC2EIu0YX0?rel=0"
          title="PsyTechVR Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Demo;
