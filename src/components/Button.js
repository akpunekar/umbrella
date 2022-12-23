import React from "react";
import loadBtn from "../asset/loader_icon1.svg";
import "./Button.css";

export default function Button({
  select,
  handleChange,
  handleClear,
  upload,
  name,
  change,
}) {
  return (
    <>
      <div
        className="combineBtn"
        style={{
          backgroundColor: select,
        }}
      >
        <input
          onChange={handleChange}
          type="file"
          id="file"
          accept=".png, .jpg"
          hidden
        />
        <label
          htmlFor="file"
          style={{
            backgroundColor: select,
          }}
        >
          <img
            className={change ? "loadBtn" : "upload"}
            src={change ? loadBtn : upload}
            alt="upload"
          />
        </label>
        {name === ""
          ? "UPLOAD LOGO"
          : name.slice(
              0,
              name.split(".")[0].length < 7 ? name.split(".")[0].length : 7
            ) +
            "." +
            name.split(".")[1]}
        <input id="clear" hidden />
        <label
          onClick={handleClear}
          htmlFor="clear"
          className="clear"
          style={{
            backgroundColor: select,
          }}
        >
          {name === "" ? "" : "✕"}
        </label>
      </div>
    </>
  );
}
