"use client";

import { useLLM } from "llmasaservice-client";

export default function Home() {
  const { send, response, idle } = useLLM({
    project_id: "...",
  });

  const sendChat = async () => {
    const cityInput = document.getElementById("city") as HTMLInputElement;
    if (cityInput) {
      send(
        `Write a short three sentence background on the city called: ${cityInput.value}`
      );
    }
  };

  return (
    <>
      <input id="city" type="text" placeholder="Enter city name" />
      <button onClick={sendChat} disabled={!idle}>
        Get short background for city
      </button>
      <p>{response}</p>
    </>
  );
}
