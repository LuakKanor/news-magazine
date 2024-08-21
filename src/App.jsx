// import React from 'react'

import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [country, setCountry] = useState("in");

  useEffect(() => {
    // Set up a debounce delay
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500); // 500ms delay

    // Clear the timeout if the component is unmounted or if keyword changes
    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  return (
    <div>
      <Navbar
        setCategory={setCategory}
        setKeyword={setKeyword}
        keyword={keyword}
        setCountry={setCountry}
        country={country}
      />
      <NewsBoard
        country={country}
        category={category}
        debouncedKeyword={debouncedKeyword}
      />
    </div>
  );
};
export default App;
