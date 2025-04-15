import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import {Tooltip } from 'react-tooltip';

const OfficeSelect = ({ setPage, setLocation, selectedLocation }) => {
    const [selectedOption, setSelectedOption] = useState(selectedLocation);
    
    const office_locations = ["Los Gatos", "New York", "Los Angeles"];

    const office_addresses =  {
        "Los Gatos": "121 Albright Wy, Los Gatos, CA 95032",
        "New York": "888 Broadway, New York, NY 10003",
        "Los Angeles": "5808 Sunset Blvd, Los Angeles, CA 90028"
    }

    const handleClick = (e) => {
        setLocation(selectedOption);
        setPage(0);
    }
      
  
  return (
    <Form.Group>
        <Form.Label>Select office location: </Form.Label>
        <div>
        {office_locations.map((location) => (
            <span key={`span-${location}`}>
                <a data-tooltip-id={`${location}-tooltip`} data-tooltip-content={office_addresses[location]}>
                    <Form.Check
                        inline
                        key={location}
                        type="radio"
                        label={location}
                        name="office_location"
                        value={location}
                        checked={selectedOption === location}
                        onChange={(e) => {
                            setSelectedOption(e.target.value);
                        }}
                    />
                </a>
                <Tooltip id={`${location}-tooltip`} place="top" className="tooltip" />
            </span>
        ))}
        <Button variant="primary" onClick={handleClick}>
            Search
        </Button>
        </div>
    </Form.Group>
  );
}

export default OfficeSelect;