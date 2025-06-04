import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  // Fetch reviews data from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/reviews');
        console.log(response, 'Review Debug');
        if (response.data.success) {
          setReviews(response.data.data);
        } else {
          setError('Failed to fetch reviews');
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Handle video play/pause
  const handleVideoPlay = (id) => {
    // Pause the currently playing video
    if (currentPlayingVideo && currentPlayingVideo !== id) {
      const prevVideo = videoRefs.current[currentPlayingVideo];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }

    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video
          .play()
          .then(() => setCurrentPlayingVideo(id))
          .catch((err) => {
            console.error('Video play failed:', err);
            setError('Failed to play video. Please try again.');
          });
      } else {
        video.pause();
        setCurrentPlayingVideo(null);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-6 max-w-4xl mx-auto">
        <p className="font-bold">Error</p>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No reviews available yet.</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Customer Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => {
            const videoPath = `http://127.0.0.1:8000/uploads/${review.video}`;
            const thumbnailPath = `http://127.0.0.1:8000/uploads/${review.video_thumbnail}`;

            return (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{review.customer_name}</h3>
                    <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="ml-1 text-gray-700 font-medium">{review.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-5 whitespace-pre-line">{review.feedback}</p>

                  <div className="relative rounded-lg overflow-hidden bg-black">
                    {/* Thumbnail */}
                    <div
                      className={`relative ${currentPlayingVideo === review.id ? 'hidden' : 'block'}`}
                      onClick={() => handleVideoPlay(review.id)}
                    >
                      <img
                        src={thumbnailPath}
                        alt={`${review.customer_name}'s testimonial`}
                        className="w-full h-48 object-cover opacity-90 hover:opacity-80 transition-opacity"
                        onError={(e) => {
                          e.target.src = '/default-thumbnail.jpg'; // Add a default image in public folder if needed
                          e.target.className = 'w-full h-48 object-cover bg-gray-200';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all transform hover:scale-110"
                          aria-label="Play video"
                        >
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.8L17.2 10l-10.9 7.2V2.8z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Video player */}
                    <video
                      ref={(el) => (videoRefs.current[review.id] = el)}
                      src={videoPath}
                      className={`w-full h-48 object-contain bg-black ${currentPlayingVideo === review.id ? 'block' : 'hidden'}`}
                      controls
                      onClick={(e) => e.stopPropagation()}
                      onEnded={() => setCurrentPlayingVideo(null)}
                      onError={(e) => {
                        setError('Video playback error. Please try another testimonial.');
                      }}
                      preload="metadata"
                      playsInline
                      muted
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewContainer;
