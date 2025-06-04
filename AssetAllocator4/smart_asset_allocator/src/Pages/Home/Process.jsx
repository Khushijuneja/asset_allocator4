import { useState } from "react";

import React, { useRef } from "react";

const departments = [
  {
    id: 1,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/01.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/07.jpg",
    title: "Speciality Rhinology 1",
    content:
      "Procedur arrain  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 2,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/03.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/08.jpg",
    title: "Cardiology Care",
    content:
      "Procedur arrain  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 3,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/06.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/5.jpg",
    title: "Neurology Experts",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 9,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/06.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/5.jpg",
    title: "Neurology Experts",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 4,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/04.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/5.jpg",
    title: "Speciality Rhinology 1",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 5,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/07.png",
    image: "https://labartisan.net/demo/mukti/assets/images/blog/04.jpg",
    title: "Cardiology Care",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 6,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/08.png",
    image: "https://labartisan.net/demo/mukti/assets/images/blog/04.jpg",
    title: "Neurology Experts",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 7,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/06.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/5.jpg",
    title: "Neurology Experts",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 8,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/04.png",
    image: "https://labartisan.net/demo/mukti/assets/images/depart/5.jpg",
    title: "Speciality Rhinology 1",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
  {
    id: 9,
    icon: "https://labartisan.net/demo/mukti/assets/images/depart/icon/07.png",
    image: "https://labartisan.net/demo/mukti/assets/images/blog/04.jpg",
    title: "Cardiology Care",
    content:
      "Procedur arrain manu  arrain manu producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mant producs rather convenet cuvate mantna this man Manucur produc rather conven cuvatie mantan this conven cuvate bad Credibly envisioneer ubiquitous niche markets transparent relations Dramatically enable worldwide action items whereas magnetic source motin was procedur arramin.",
  },
];

export default function DepartmentSection() {
  const [selectedDept, setSelectedDept] = useState(departments[0]);

  return (
    <div className="text-center py-15 bg-gray-100">
      <h1 className="text-gray-900 text-4xl mb-2 ">We Are The</h1>
      <h1 className="text-4xl font-semibold  mb-20 text-black">
        Best Our Departments Centers
      </h1>
      <div className="flex max-w-6xl  mx-auto align-center justify-center  gap-1 space-x-4 my-4">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className={` py-3 p-3     justify-center cursor-pointer hover:scale-105 bg-white rounded-3xl flex items-center ${
              selectedDept.id === dept.id ? "border-b-4 border-blue-500" : ""
            }`}
            onClick={() => setSelectedDept(dept)}
          >
            <img src={dept.icon} className="w-12" alt="icon" />
          </div>
        ))}
      </div>
      <div className="  bg-white  shadow-lg p-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h1 className="text-2xl font-semibold">{selectedDept.title}</h1>
          <p className="my-2">{selectedDept.content}</p>
          <ul className="list-disc list-inside text-lh">
            <li>Qualified Doctors</li>
            <li>24x7 Emergency Services</li>
            <li>General Medical</li>
            <li>Feel like Home Services</li>
            <li>Qualified Doctors</li>
            {/* <li>24x7 Emergency Services</li>
            <li>General Medical</li>
            <li>Feel like Home Services</li> */}
          </ul>
          {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Appointment Now
          </button> */}
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src={selectedDept.image}
            className="w-full h-105 rounded-lg"
            alt="Department"
          />
        </div>
      </div>
    </div>
  );
}