import React from "react";
import "./cardStyles.css";

export default function Menu() {
    return (
    <div className="menuTop">
        <div className="menuLeft">
          
            <h3>New Course</h3>
        </div>
        <div className="menuRight">
            <button className="menuSaveDraft">Save Draft</button>
            <button className="menuNext">Next</button>
        </div>
    </div>
    )
}