import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';

function QuickSort() {
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

  function quick_partition(start, end) {
    const divs = document.querySelectorAll('.array-bar');
    let div_sizes = [...arrayRef.current];
    let i = start + 1;
    let piv = div_sizes[start];
    div_update(divs[start], div_sizes[start], "yellow");

    for(let j = start + 1; j <= end; j++) {
      if (div_sizes[j] < piv) {
        div_update(divs[j], div_sizes[j], "yellow");
        div_update(divs[i], div_sizes[i], "red");
        div_update(divs[j], div_sizes[j], "red");

        let temp = div_sizes[i];
        div_sizes[i] = div_sizes[j];
        div_sizes[j] = temp;

        div_update(divs[i], div_sizes[i], "blue");
        div_update(divs[j], div_sizes[j], "blue");

        i++;
      }
    }
    div_update(divs[start], div_sizes[start], "red");
    div_update(divs[i-1], div_sizes[i-1], "red");

    let temp = div_sizes[start];
    div_sizes[start] = div_sizes[i-1];
    div_sizes[i-1] = temp;

    div_update(divs[start], div_sizes[start], "green");
    div_update(divs[i-1], div_sizes[i-1], "green");

    setArray(div_sizes);
    return i-1;
  }

  function quick_sort(start, end) {
    if(start < end) {
      let piv_pos = quick_partition(start, end);
      quick_sort(start, piv_pos-1);
      quick_sort(piv_pos+1, end);
    }
  }

  function quick() {
    quick_sort(0, array.length-1);
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
      <button onClick={quick}>Sort</button>
    </div>
  );
}

export default QuickSort;
