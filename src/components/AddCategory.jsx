import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <>
      <div className="main">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={(e) => onInputChange(e)}
            className="input-bar"
          />
        </form>
        <button className="btn" onClick={(e) => onSubmit(e)}>
          Add
        </button>
      </div>
    </>
  );
};
