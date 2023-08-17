import React, { useState } from 'react';  

// Instead of ./css/style.css
import '../css/style.css'; 

// For all algorithm components
import BubbleSort from './bubblesort';
import SelectionSort from './selectionsort';
import InsertionSort from './insertionsort';
import MergeSort from './mergesort';
import QuickSort from './quicksort';
import HeapSort from './heapsort';


function SortingVisualizer() {
   const [array, setArray] = useState([]);
   const [arraySize, setArraySize] = useState(50); // Default size
   const [isSorting, setIsSorting] = useState(false);

   function handleGenerateArray() {
       let newArray = [];
       for (let i = 0; i < arraySize; i++) {
           newArray.push(Math.floor(Math.random() * 0.5 * 100) + 10);
       }
       setArray(newArray);
   }

   function handleArraySizeChange(e) {
       setArraySize(e.target.value);
   }

   function handleSort(algoName) {
       setIsSorting(true);
       switch (algoName) {
           case 'Bubble':
               BubbleSort(array, setArray);
               break;
           case 'Selection':
               SelectionSort(array, setArray);
               break;
           case 'Insertion':
               InsertionSort(array, setArray);
               break;
           case 'Merge':
               MergeSort(array, setArray);
               break;
           case 'Quick':
               QuickSort(array, setArray);
               break;
           case 'Heap':
               HeapSort(array, setArray);
               break;
           default:
               break;
       }
       setIsSorting(false);
   }

   return (
       <div className="sortingVisualizer">
           <input type="range" value={arraySize} onChange={handleArraySizeChange} disabled={isSorting} />
           <button onClick={handleGenerateArray} disabled={isSorting}>Generate New Array</button>
           
           <div id="array_container">
               {array.map((value, idx) => (
                   <div key={idx} className="arrayBar" style={{height: `${value}%`}}></div>
               ))}
           </div>

           <div className="algoButtons">
               <button onClick={() => handleSort('Bubble')} disabled={isSorting}>Bubble Sort</button>
               <button onClick={() => handleSort('Selection')} disabled={isSorting}>Selection Sort</button>
               <button onClick={() => handleSort('Insertion')} disabled={isSorting}>Insertion Sort</button>
               <button onClick={() => handleSort('Merge')} disabled={isSorting}>Merge Sort</button>
               <button onClick={() => handleSort('Quick')} disabled={isSorting}>Quick Sort</button>
               <button onClick={() => handleSort('Heap')} disabled={isSorting}>Heap Sort</button>
           </div>
       </div>
   );
}

export default SortingVisualizer;
