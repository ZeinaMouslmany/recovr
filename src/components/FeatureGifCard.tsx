import React from 'react';
import styles from './FeatureGifCard.module.css';

// Define the type here or import it from FeaturesGifSection
export type FeatureItem = {
  title: string;
  videoUrl: string;
};

type Props = {
  item: FeatureItem;
};

const FeatureGifCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <video
        className={styles.video}
        src={item.videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      <h4 className={styles.title}>{item.title}</h4>
    </div>
  );
};

export default FeatureGifCard;