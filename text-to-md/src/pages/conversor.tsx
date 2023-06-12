import React, { useState } from "react";
import MarkdownViewer from "../components/markdown";

const Conversor = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <>
      <div className="flex w-full h-screen">
        <textarea
          className="w-full m-3 text-black h-1/2"
          onChange={handleInputChange}
          placeholder="Ingrese Texto"
        />
        <div className="w-full m-3 text-black bg-white h-1/2">
          <MarkdownViewer currentDoc={inputValue} />
        </div>
      </div>
    </>
  );
};

export default Conversor;
