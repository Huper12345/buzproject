import React from "react"
import { useState } from "react";
import "./BiologyDrop.scss";
import { BiologyDropIcon } from "./BiologyDropIcon";


export const BiologyDrop = () => {
const [biologyDrop, setBiologyDrop] = useState("Biology-Drop-Button");

const [iconClass, setIconClass] = useState("")

const handleBiology = () => {
  setBiologyDrop(!biologyDrop);
}

return(
  <div className="Biology-Drop">
    <button onClick={handleBiology} className={biologyDrop ? "Biology-Drop-Button" : "Biology-Drop-Button active"}>
      <BiologyDropIcon />
      Подробнее
      </button>
  </div>
)

}
 

   