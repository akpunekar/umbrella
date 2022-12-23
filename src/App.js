import React, { useEffect, useState } from "react";
import Blue from "./asset/Blue.png";
import Pink from "./asset/Pink.png";
import Yellow from "./asset/Yello.png";
import upload from "./asset/upload_icon.svg";
import Selector from "./components/Selector";
import Image from "./components/Image";

import "./styles.css";

function App() {
  const [color, setColor] = useState();
  const [select, setSelect] = useState("blue");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setChange(true);
    setTimeout(() => {
      setChange(false);
      const file = e.target.files[0];

      const acceptFile =
        file.name.split(".")[1] === "jpg" || file.name.split(".")[1] === "png"
          ? file
          : "";
      if (acceptFile === "") {
        setError("Brand logo must be .png or .jpg");
      } else {
        const acceptSize = acceptFile.size < 5242880 ? file : "";
        if (acceptSize === "") {
          setError("Brand logo must be below 5mb.");
        } else {
          setBrand(e && e.target && URL.createObjectURL(acceptSize));
          setName(acceptSize.name);
          setError("");
        }
      }
    }, 3000);
  };

  const handleClear = () => {
    setBrand("");
    setName("");
  };
  useEffect(handleClear, []);

  useEffect(handleChange, []);

  return (
    <div className="App">
      <div className="flex-container">
        <Image
          change={change}
          select={select}
          color={color}
          Blue={Blue}
          brand={brand}
        />
        <Selector
          select={select}
          setColor={setColor}
          Pink={Pink}
          handleChange={handleChange}
          setSelect={setSelect}
          Blue={Blue}
          Yellow={Yellow}
          upload={upload}
          name={name}
          handleClear={handleClear}
          change={change}
          setName={setName}
          setBrand={setBrand}
          brand={brand}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
