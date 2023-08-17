import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';

function MergeSort() {
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

  function merge_sort(start,mid,end) {
    const divs = document.querySelectorAll('.array-bar');
    let div_sizes = [...arrayRef.current];

    let p=start, q=mid+1;
    let Arr=[], k=0;

    for(let i=start; i<=end; i++) {
      if(p>mid) {
        Arr[k++]=div_sizes[q++];
        div_update(divs[q-1], div_sizes[q-1], "red");
      } else if(q>end) {
        Arr[k++]=div_sizes[p++];
        div_update(divs[p-1], div_sizes[p-1], "red");
      } else if(div_sizes[p]<div_sizes[q]) {
        Arr[k++]=div_sizes[p++];
        div_update(divs[p-1], div_sizes[p-1], "red");
      } else {
        Arr[k++]=div_sizes[q++];
        div_update(divs[q-1], div_sizes[q-1], "red");
      }
    }

    for(let t=0; t<k; t++) {
      div_sizes[start++]=Arr[t];
      div_update(divs[start-1], div_sizes[start-1], "green");
    }

    setArray(div_sizes);
  }

  function merge_partition(start,end) {
    const divs = document.querySelectorAll('.array-bar');
    let div_sizes = [...arrayRef.current];

    if(start < end) {
      let mid=Math.floor((start + end) / 2);
      div_update(divs[mid], div_sizes[mid], "yellow");

      merge_partition(start,mid);
      merge_partition(mid+1,end);

      merge_sort(start,mid,end);
    }
  }

  function merge() {
    merge_partition(0, array.length-1);
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
      <button onClick={merge}>Sort</button>
    </div>
  );
}

export default MergeSort;
