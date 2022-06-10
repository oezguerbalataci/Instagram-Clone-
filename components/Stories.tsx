// @ts-nocheck
import React from "react";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = (props: {}) => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div
      className="flex space-x-2 
      p-6
      scrollbar-thin scrollbar-thumb-black
      bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scrol"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((suggestion) => (
        <Story
          key={suggestion.id}
          img={suggestion.avatar}
          username={suggestion.name}
        />
      ))}
    </div>
  );
};
export default Stories;
