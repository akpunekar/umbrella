import Button from "./Button";
import React from "react";
import "./Selector.css";
export default function Selector({
  select,
  setColor,
  Pink,
  handleChange,
  handleClear,
  setSelect,
  Blue,
  Yellow,
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
            className={select === "pink" ? "pink" : ""}
            onClick={() => {
              setColor(Pink);
              handleChange();
              setSelect("pink");
            }}
            style={{
              backgroundColor: "pink",
            }}
          />
          <li
            className={select === "blue" ? "blue" : ""}
            onClick={() => {
              setColor(Blue);
              handleChange();
              setSelect("blue");
            }}
            style={{
              backgroundColor: "blue",
            }}
          />
          <li
            className={select === "yellow" ? "yellow" : ""}
            onClick={() => {
              setColor(Yellow);
              handleChange();
              setSelect("yellow");
            }}
            style={{
              backgroundColor: "yellow",
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
