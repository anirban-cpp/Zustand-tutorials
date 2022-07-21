import React from "react";
import { usePeopleStore } from "../store";

const People = () => {
  const people = usePeopleStore((state) => state.people);

  return (
    <div className="people">
      <p>We have {people.length} people</p>
      <ul>
        {people.map((person, i) => (
          <li key={i}>{person}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
