import React from "react";

function Location() {
  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Our Locations
        </h3>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9203686043675!2d73.76542404051962!3d20.011856581472518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9776aba275%3A0xcf7ba1b5d2616420!2sArchit%20Vihar%20Apartment!5e0!3m2!1sen!2sin!4v1742554911440!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
