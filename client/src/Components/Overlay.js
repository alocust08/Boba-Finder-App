import React from 'react';
import {Spinner} from 'react-bootstrap';


const Overlay = ({isLoading, children}) => {
    return (
        <div className="overlay-container">
            {isLoading && (
                <div className="overlay">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
            {children}
        </div>
    )
}

export default Overlay;