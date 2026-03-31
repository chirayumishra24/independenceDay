import React from 'react';

export default function VideoPlayer({ videoId, start, end }) {
  // Construct YouTube embed URL with vanilla parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&rel=0&modestbranding=1`;

  return (
    <div className="video-wrapper">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
