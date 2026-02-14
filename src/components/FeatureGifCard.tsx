import React, { useEffect, useRef, useState } from 'react';
import styles from './FeatureGifCard.module.css';

export type FeatureItem = {
  title: string;
  gifUrl: string;
  stillUrl: string;
};

type FeatureGifCardProps = {
  item: FeatureItem;
};

const FeatureGifCard: React.FC<FeatureGifCardProps> = ({ item }) => {
  const { title, gifUrl, stillUrl } = item;
  const [isHovered, setIsHovered] = useState(false);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(stillUrl);
  const preloadRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Reset state if URLs change
    setIsHovered(false);
    setIsGifLoaded(false);
    setCurrentSrc(stillUrl);
  }, [gifUrl, stillUrl]);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (!isGifLoaded) {
      const img = new Image();
      preloadRef.current = img;
      img.src = gifUrl;
      img.onload = () => {
        setIsGifLoaded(true);
        setCurrentSrc(gifUrl);
      };
    } else {
      setCurrentSrc(gifUrl);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentSrc(stillUrl);
  };

  const handleFocus = () => {
    // Mirror hover behavior for keyboard users
    handleMouseEnter();
  };

  const handleBlur = () => {
    handleMouseLeave();
  };

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      aria-label={title}
    >
      <img
        src={currentSrc}
        alt={title}
        className={styles.image}
        loading="lazy"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default FeatureGifCard;

