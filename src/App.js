import React, { useEffect, useState } from "react";
import upload from "./asset/upload_icon.svg";
import Selector from "./components/Selector";
import Image from "./components/Image";

// Change umbrella images from here as color needed
import umbrellaColor1 from "./asset/Pink.png";
import umbrellaColor2 from "./asset/Blue.png";
import umbrellaColor3 from "./asset/Yello.png";

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
          Blue={umbrellaColor2}
          brand={brand}
        />
        <Selector
          select={select}
          setColor={setColor}
          umbrellaColor1={umbrellaColor1}
          handleChange={handleChange}
          setSelect={setSelect}
          umbrellaColor2={umbrellaColor2}
          umbrellaColor3={umbrellaColor3}
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
