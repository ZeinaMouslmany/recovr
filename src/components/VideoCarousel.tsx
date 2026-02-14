import React, { useState, useRef, useEffect } from 'react';
import { VideoCarouselItem } from '../types';
import styles from './VideoCarousel.module.css';

type VideoCarouselProps = {
  items: VideoCarouselItem[];
  title?: string;
};

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  items,
  title = 'Video Carousel',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const hasUserInteracted = useRef<boolean>(false);

  // Add autoplay parameters to the provided URL without parsing
  const addAutoplayParams = (url: string): string => {
    // Check if URL already has query parameters
    const hasParams = url.includes('?');
    const separator = hasParams ? '&' : '?';
    return `${url}${separator}autoplay=1&mute=1`;
  };

  // Sync iframe src with activeIndex after user interaction
  useEffect(() => {
    if (!hasUserInteracted.current) {
      return;
    }

    videoRefs.current.forEach((videoRef, idx) => {
      if (videoRef) {
        if (idx === activeIndex) {
          // Active video: add autoplay params
          videoRef.src = addAutoplayParams(items[idx].videoUrl);
        } else {
          // Inactive videos: use original URL (stops playback)
          videoRef.src = items[idx].videoUrl;
        }
      }
    });
  }, [activeIndex, items]);

  const handleCardClick = (index: number) => {
    // Mark that user has interacted
    hasUserInteracted.current = true;
    
    // Update active index first to change title immediately
    setActiveIndex(index);
    
    // Stop all videos by resetting their src to original URL (without autoplay)
    videoRefs.current.forEach((videoRef, idx) => {
      if (videoRef && idx !== index) {
        // Reset to original URL - this stops the video
        videoRef.src = items[idx].videoUrl;
      }
    });

    // Start the active video with autoplay
    const activeVideoRef = videoRefs.current[index];
    if (activeVideoRef) {
      activeVideoRef.src = addAutoplayParams(items[index].videoUrl);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{items[activeIndex]?.title || title}</h2>
        </header>
        <div className={styles.carousel} aria-label="Video carousel">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${item.videoUrl}-${index}`}
                className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}
                onClick={() => handleCardClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`Play ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
              >
                <div className={styles.videoWrapper}>
                  <iframe
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;

