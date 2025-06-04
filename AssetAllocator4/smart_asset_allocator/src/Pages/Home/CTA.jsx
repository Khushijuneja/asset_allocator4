import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";

const CTA = () => {
  const navigate = useNavigate();

  console.log(`inside CTA`);
  return (
    <ContentWrapper>
      <div className="md:mx-20 md:my-10 bg-blue-800 text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 flex-col md:flex-row gap-4">
          <img
            src="https://ionexchangeglobal.com/app/uploads/2021/09/call-support-full.jpg"
            alt="Support"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl"
          />
          <div>
            <h2 className="text-3xl md:text-2xl font-semibold mb-2">
              Let our experts help you.
            </h2>
            <p className="text-sm md:text-lg font-medium">
              Contact us: <strong>1800 4250 788</strong> (365 days, 9am – 9pm
              IST)
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-4 mt-6 md:mt-0 ">
          <a
            href="tel:18004250788"
            className="flex items-center gap-2 bg-transparent border border-white text-white px-6 py-2 text-lg md:text-xs font-medium hover:bg-white hover:text-blue-800 transition duration-300"
          >
            <Phone className="w-5 h-5" /> CALL
          </a>
          <button
            onClick={() => {
              navigate("/contactus");
            }}
            className="bg-transparent border border-white text-white px-6 py-2 text-lg font-medium hover:bg-white md:text-xs hover:text-blue-800 transition duration-300"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CTA;

