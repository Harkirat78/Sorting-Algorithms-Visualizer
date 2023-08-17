import React from 'react';
import './css/style.css';
import SortingVisualizer from './component/SortingVisualizer';
// Import the SortingVisualizer

function App() {
    return (
        <div className="App">
            <SortingVisualizer />
            {/* We only render the SortingVisualizer, it takes care of the rest. */}
        </div>
    );
}

export default App;
