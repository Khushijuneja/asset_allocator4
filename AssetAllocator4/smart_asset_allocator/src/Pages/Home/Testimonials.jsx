const dummyReviews = [
  {
    video : "htt/videos/01JTWBBTGYK95GNN965F4946AA.mp4",
    customer_name: "Dinu Joe",
    feedback: "Excellent service! Highly recommend.",
  },
  {
    video_url: "https://www.w3schools.com/html/movie.mp4",
    customer_name: "Jane Smith",
    feedback: "Very professional and efficient!",
  },
  {
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    customer_name: "Alex Johnson",
    feedback: "Great experience. Will come back again.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say??
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      {/* Grid Layout for Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
        {dummyReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 text-center"
          >
            <video
              src={review.video_url}
              controls
              className="w-full h-60 rounded-lg"
            />
            <h4 className="font-semibold text-lg mt-3 text-gray-900">
              {review.customer_name}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
