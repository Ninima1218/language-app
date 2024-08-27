import React from 'react';
import './LoadingSpinner.css'; // Create CSS for styling the spinner

function LoadingSpinner() {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    );
}

export default LoadingSpinner;