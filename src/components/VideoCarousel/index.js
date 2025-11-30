import React, { useState } from 'react';
import styles from './styles.module.css';

/**
 * VideoCarousel - A carousel component for embedding multiple YouTube videos
 * 
 * Usage:
 * <VideoCarousel videos={[
 *   { id: 'VIDEO_ID', title: 'Video Title' },
 *   { id: 'VIDEO_ID', title: 'Another Video' }
 * ]} />
 * 
 * The 'id' can be:
 * - Just the video ID: 'CKRIjej1nMI'
 * - Full YouTube URL: 'https://www.youtube.com/watch?v=CKRIjej1nMI'
 * - Short YouTube URL: 'https://youtu.be/CKRIjej1nMI'
 */

function extractVideoId(input) {
  if (!input) return null;
  
  // If it's already just an ID (no slashes or dots)
  if (!input.includes('/') && !input.includes('.')) {
    return input;
  }
  
  // Handle youtu.be format
  const shortMatch = input.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  
  // Handle youtube.com/watch?v= format
  const longMatch = input.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (longMatch) return longMatch[1];
  
  // Handle youtube.com/embed/ format
  const embedMatch = input.match(/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  
  return input;
}

export default function VideoCarousel({ videos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videos[currentIndex];
  const videoId = extractVideoId(currentVideo.id);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={currentVideo.title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={goToPrevious} 
          className={styles.navButton}
          aria-label="Previous video"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        
        <div className={styles.videoInfo}>
          <span className={styles.videoTitle}>{currentVideo.title}</span>
          <span className={styles.videoCounter}>
            {currentIndex + 1} / {videos.length}
          </span>
        </div>
        
        <button 
          onClick={goToNext} 
          className={styles.navButton}
          aria-label="Next video"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      
      <div className={styles.dots}>
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
