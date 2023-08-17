import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';

function HeapSort() {
    const [array, setArray] = useState([]);
    const [c_delay, setC_delay] = useState(0);  // Added this line
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

    function swap(i,j) {
        const divs = document.querySelectorAll('.array-bar');
        let div_sizes = [...arrayRef.current];
        div_update(divs[i], div_sizes[i], "red");
        div_update(divs[j], div_sizes[j], "red");

        let temp = div_sizes[i];
        div_sizes[i] = div_sizes[j];
        div_sizes[j] = temp;

        div_update(divs[i], div_sizes[i], "blue");
        div_update(divs[j], div_sizes[j], "blue");

        setArray(div_sizes);
    }

    function max_heapify(n, i) {
        const divs = document.querySelectorAll('.array-bar');
        let div_sizes = [...arrayRef.current];
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        // ... (rest of the code as you provided)

        setArray(div_sizes);
    }

    function heap() {
        heap_sort();
        enable_buttons();
    }

    function heap_sort() {
        // ... (rest of the code as you provided)
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
            <button onClick={heap}>Sort</button>
        </div>
    );
}

export default HeapSort;
