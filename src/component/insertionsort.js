import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';  // Assuming your style.css is directly under the src directory

function InsertionSort() {
  const [array, setArray] = useState([/* Your initial array values here */]);
  const arrayRef = useRef();

  useEffect(() => {
    arrayRef.current = array;
  }, [array]);

  function div_update(el, height, color) {
    setTimeout(() => {
      el.style.height = `${height}px`;
      el.style.backgroundColor = color;
    }, c_delay);
  }

  function enable_buttons() {
    // Implement this function if you want to enable/disable certain buttons during/after the sort
  }

  function insertionSort() {
    const divs = document.querySelectorAll('.array-bar');
    let div_sizes = [...array];
    const array_size = div_sizes.length;
    let c_delay = 0;

    for (let j = 0; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "yellow");

      let key = div_sizes[j];
      let i = j - 1;
      while (i >= 0 && div_sizes[i] > key) {
        div_update(divs[i], div_sizes[i], "red");
        div_update(divs[i + 1], div_sizes[i + 1], "red");

        div_sizes[i + 1] = div_sizes[i];

        div_update(divs[i], div_sizes[i], "red");
        div_update(divs[i + 1], div_sizes[i + 1], "red");

        div_update(divs[i], div_sizes[i], "blue");
        if (i === (j - 1)) {
          div_update(divs[i + 1], div_sizes[i + 1], "yellow");
        } else {
          div_update(divs[i + 1], div_sizes[i + 1], "blue");
        }
        i -= 1;
      }
      div_sizes[i + 1] = key;

      for (let t = 0; t < j; t++) {
        div_update(divs[t], div_sizes[t], "green");
      }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "green");

    setArray(div_sizes);
    enable_buttons();
  }

  return (
    <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={insertionSort}>Sort</button>
    </div>
  );
}

export default InsertionSort;
