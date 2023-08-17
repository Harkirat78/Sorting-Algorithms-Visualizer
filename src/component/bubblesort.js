import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';

function BubbleSort() {
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

    function bubbleSort() {
        const divs = document.querySelectorAll('.array-bar');
        let div_sizes = [...array];
        const array_size = div_sizes.length;

        for (let i = 0; i < array_size - 1; i++) {
            for (let j = 0; j < array_size - i - 1; j++) {
                div_update(divs[j], div_sizes[j], "yellow");

                if (div_sizes[j] > div_sizes[j + 1]) {
                    div_update(divs[j], div_sizes[j], "red");
                    div_update(divs[j + 1], div_sizes[j + 1], "red");

                    let temp = div_sizes[j];
                    div_sizes[j] = div_sizes[j + 1];
                    div_sizes[j + 1] = temp;

                    div_update(divs[j], div_sizes[j], "red");
                    div_update(divs[j + 1], div_sizes[j + 1], "red");
                }
                div_update(divs[j], div_sizes[j], "blue");
            }
            div_update(divs[array_size - 1 - i], div_sizes[array_size - 1 - i], "green");
        }
        div_update(divs[0], div_sizes[0], "green");

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
            <button onClick={bubbleSort}>Sort</button>
        </div>
    );
}

export default BubbleSort;
