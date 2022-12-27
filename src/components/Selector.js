import Button from "./Button";
import React from "react";
import "./Selector.css";

// You can change colors from here as needed,
// Make sure you also added umbrella images of same color in App.js
const select1 = "pink";
const select2 = "blue";
const select3 = "yellow";

export default function Selector({
  select,
  setColor,
  umbrellaColor1,
  handleChange,
  handleClear,
  setSelect,
  umbrellaColor2,
  umbrellaColor3,
  upload,
  name,
  change,
  setName,
  setBrand,
  brand,
  error,
}) {
  return (
    <div>
      <h1 className="heading">Custom Umbrella</h1>
      <div className="colors">
        <ul>
          <li
            className={select === select1 ? select1 : ""}
            onClick={() => {
              setColor(umbrellaColor1);
              handleChange();
              setSelect(select1);
            }}
            style={{
              backgroundColor: select1,
            }}
          />
          <li
            className={select === select2 ? select2 : ""}
            onClick={() => {
              setColor(umbrellaColor2);
              handleChange();
              setSelect(select2);
            }}
            style={{
              backgroundColor: select2,
            }}
          />
          <li
            className={select === select3 ? select3 : ""}
            onClick={() => {
              setColor(umbrellaColor3);
              handleChange();
              setSelect(select3);
            }}
            style={{
              backgroundColor: select3,
            }}
          />
        </ul>
      </div>
      <h2>Customize your umbrella</h2>

      <p>Upload a logo for an instant preview.</p>
      <p>.png and .jpg files only. Max file size is 5MB.</p>

      <Button
        select={select}
        handleChange={handleChange}
        handleClear={handleClear}
        upload={upload}
        name={name}
        change={change}
        setName={setName}
        setBrand={setBrand}
        brand={brand}
      />
      <p className="error">{error}</p>
    </div>
  );
}
