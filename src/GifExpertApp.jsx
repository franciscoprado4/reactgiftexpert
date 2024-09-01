import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
