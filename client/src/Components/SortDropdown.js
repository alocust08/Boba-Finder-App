import React from 'react';
import { Form } from 'react-bootstrap';

const SortDropdown = ({ setSortBy, setPage }) => {

  const handleChange = (e) => {
    setSortBy(e.target.value)
    setPage(0);
}
  
  return (
    <Form.Group>
        <Form.Label>Sort by</Form.Label>
        <Form.Select defaultValue="rating" aria-label="Sort by" onChange={handleChange}>
            <option value="rating">Rating</option>
            <option value="distance">Distance</option>
        </Form.Select>
    </Form.Group>
  );
}

export default SortDropdown;