import React, { useState } from "react";
import ReactGA from "react-ga";


function TestButton() {

    const starttracking = function() {
        console.log('druk op button');
        Event('1', '2', 'druk op save the date')
    }

    /**
   * Event - Add custom tracking event.
   * @param {string} category
   * @param {string} action
   * @param {string} label
   */
    const Event = (category, action, label) => {
        console.log('ik ben in event');
        ReactGA.event({
            category: category,
            action: action,
            label: label
        });
  };

  return (
   <div>
        <button onClick={() => starttracking()}>
        Save the date
        </button>
   </div>  );
}

export default TestButton;
