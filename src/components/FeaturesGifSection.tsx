import React from 'react';
import FeatureGifCard, { FeatureItem } from './FeatureGifCard';
import styles from './FeaturesGifSection.module.css';

type FeaturesGifSectionProps = {
  title?: string;
  subtitle?: string;
  items?: FeatureItem[];
};

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    title: 'Immersive VR Environments',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-01.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-01.jpg',
  },
  {
    title: 'Exposure Therapy Scenarios',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-02.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-02.jpg',
  },
  {
    title: 'Real-Time Patient Monitoring',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-03.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-03.jpg',
  },
  {
    title: 'Clinician Control Panel',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-04.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-04.jpg',
  },
  {
    title: 'Biofeedback Integration',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-05.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-05.jpg',
  },
  {
    title: 'Session Recording',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-06.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-06.jpg',
  },
  {
    title: 'Progress Analytics',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-07.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-07.jpg',
  },
  {
    title: 'Custom Treatment Plans',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-08.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-08.jpg',
  },
  {
    title: 'Remote Therapy Sessions',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-09.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-09.jpg',
  },
  {
    title: 'Calm Relaxation Spaces',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-10.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-10.jpg',
  },
  {
    title: 'Guided Breathing Exercises',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-11.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-11.jpg',
  },
  {
    title: 'Multi-Patient Management',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-12.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-12.jpg',
  },
  {
    title: 'Clinic-Wide Dashboards',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-13.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-13.jpg',
  },
  {
    title: 'Outcome Reporting',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-14.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-14.jpg',
  },
  {
    title: 'Secure Cloud Access',
    gifUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-15.gif',
    stillUrl:
      'https://res.cloudinary.com/demo/image/upload/f_auto,q_auto/vr-sample-15.jpg',
  },
];

const FeaturesGifSection: React.FC<FeaturesGifSectionProps> = ({
  title = 'Platform Features',
  subtitle = 'A calm, clinical-grade VR platform designed for modern behavioral health teams.',
  items = DEFAULT_FEATURES,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
        <div className={styles.grid} aria-label={title}>
          {items.map((item) => (
            <FeatureGifCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGifSection;

