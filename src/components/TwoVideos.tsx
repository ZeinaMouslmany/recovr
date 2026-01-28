import React from 'react';
import './TwoVideos.css';

const TwoVideos: React.FC = () => {
  return (
    <section className="two-videos">
      <div className="container">
        <div className="video video-medium">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video video-small">
          <iframe
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TwoVideos;
