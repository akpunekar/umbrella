import React from "react";
import { ReactComponent as Icon } from "../asset/loader_icon.svg";
import "./Image.css";

export default function Image({ change, select, color, Blue, brand }) {
  return (
    <div>
      {change ? (
        <div className="images">
          <Icon className="loadLogo" fill={select} />
        </div>
      ) : (
        <div className="images">
          <img className="umbrella-image" src={color || Blue} alt="umbrella" />
          {brand && <img className="umbrella-brand" src={brand} alt="brand" />}
        </div>
      )}
    </div>
  );
}
