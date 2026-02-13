import React from 'react';
import FeatureGifCard, { FeatureItem } from './FeatureGifCard';
import styles from './FeaturesGifSection.module.css';

const FEATURES: FeatureItem[] = [
  {
    title: 'Immersive VR Environments',
    videoUrl: 'https://drive.google.com/file/d/190SqUkf6yYjJbRcrAKHqVoJICLeI4g1I/view?usp=sharing',
  },
  {
    title: 'Exposure Therapy',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_2',
  },
  {
    title: 'Patient Monitoring',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_3',
  },
  {
    title: 'Clinician Dashboard',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_4',
  },
  {
    title: 'Biofeedback',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_5',
  },
  {
    title: 'Session Recording',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_6',
  },
  {
    title: 'Progress Analytics',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_7',
  },
  {
    title: 'Relaxation Spaces',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_8',
  },
  {
    title: 'Remote Sessions',
    videoUrl: 'https://drive.google.com/uc?export=download&id=VIDEO_ID_9',
  },
];

const FeaturesGifSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Platform Features</h2>
          <p className={styles.subtitle}>
            Short video previews of the PsyTechVR platform in action.
          </p>
        </header>

        <div className={styles.grid}>
          {FEATURES.map((item) => (
            <FeatureGifCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGifSection;