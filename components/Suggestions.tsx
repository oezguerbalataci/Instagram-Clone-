import React, { useEffect } from "react";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div
        className="flex justify-between text-sm mb-5
      "
      >
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="rounded-full w-10 h-10 border p-[2px]"
            src={suggestion.avatar}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.name}</h2>
            <h3 className="text-xs text-gray-400">Suggested for you</h3>
          </div>

          <button className="text-blue-400 text-xs font-semibold">
            Follow{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
