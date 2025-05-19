import React from "react";
import { org } from "./data"; 

const Organizers = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {org.map((person, index) => (
        <div
          key={index}
          className={`max-w-sm p-4 border rounded-xl m-4 shadow-md ${
            index >= org.length - 2 ? "mx-auto text-center" : ""
          }`}
        >
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-auto rounded cursor-pointer"
          />
          <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
          {person.bio.map((para, i) => (
            <p key={i} className="mt-2 text-gray-700 text-sm">
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Organizers;
