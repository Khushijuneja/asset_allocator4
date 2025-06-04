"use client";
import React, { useState, useEffect } from "react";
import servicesData from "../../../constants/service.json";
import TabSwitcher from "../../../Components/TabSwitcher/TabSwitcher";
import CarouselABout from "./CarouselABout";

function AboutDetailSection() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("ALL");
  console.log(details);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDetails(servicesData);
      setLoading(false);
    }, 1000);
  }, []);

  function onTabChange(tab) {
    setType(tab.toUpperCase());
  }

  const filteredDetails =
    type === "ALL"
      ? details
      : details?.filter((item) => item.lobDisplayText.toUpperCase() === type);

  return (
    <section
      id="offerSection"
      className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center"
    >
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">
        Our Services
      </p>

      <TabSwitcher onTabChange={onTabChange} tabs={["All"]} />

      <CarouselABout details={filteredDetails} loading={loading} />
    </section>
  );
}

export default AboutDetailSection;
