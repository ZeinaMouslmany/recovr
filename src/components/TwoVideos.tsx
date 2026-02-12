import React from 'react';
import './TwoVideos.css';

const TwoVideos: React.FC = () => {
  return (
    <section className="two-videos">
      <div className="container">

        <div className="video video-medium appear delay-1">
          <div className="video-inner">
            <iframe
              src="https://www.youtube.com/embed/60PZoqSqyKg?rel=0"
              title="Main Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="video video-small appear delay-2">
          <div className="video-inner">
            <iframe
              src="https://www.youtube.com/embed/a70fkc5F9aM?rel=0"
              title="Short Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TwoVideos;
