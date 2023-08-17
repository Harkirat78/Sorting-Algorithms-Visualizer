import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';  // Importing your style.css which should be in the src folder

function SelectionSort() {
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

  function selectionSort() {
    const divs = document.querySelectorAll('.array-bar');
    let div_sizes = [...array];
    const array_size = div_sizes.length;
    let c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
      div_update(divs[i], div_sizes[i], "red");
      let index_min = i;

      for (let j = i + 1; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow");
        if (div_sizes[j] < div_sizes[index_min]) {
          if (index_min !== i) {
            div_update(divs[index_min], div_sizes[index_min], "blue");
          }
          index_min = j;
          div_update(divs[index_min], div_sizes[index_min], "red");
        } else {
          div_update(divs[j], div_sizes[j], "blue");
        }
      }

      if (index_min !== i) {
        let temp = div_sizes[index_min];
        div_sizes[index_min] = div_sizes[i];
        div_sizes[i] = temp;

        div_update(divs[index_min], div_sizes[index_min], "red");
        div_update(divs[i], div_sizes[i], "red");
        div_update(divs[index_min], div_sizes[index_min], "blue");
      }
      div_update(divs[i], div_sizes[i], "green");
    }
    div_update(divs[array_size - 1], div_sizes[array_size - 1], "green");

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
      <button onClick={selectionSort}>Sort</button>
    </div>
  );
}

export default SelectionSort;
