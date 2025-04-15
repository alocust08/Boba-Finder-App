import React from 'react';
import {Rating} from 'react-simple-star-rating';
import {Card} from 'react-bootstrap';

const Result = ({result}) => {
    const convertDistance = (distance) => {
        const miles = distance * 0.000621371;
        return miles.toFixed(2);
    }

    return (
        <Card style={{ width: '18rem'}} className="result-card flex-fill">
            <Card.Img variant="top" src={result.image_url} alt={result.name} className="h-50" />
            <Card.Body align="middle">
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>{result.location.display_address.join(', ')}</Card.Text>
                <Card.Text>
                    Distance: {convertDistance(result.distance)} miles
                </Card.Text>
                <Card.Text>
                    <Rating initialValue={result.rating} readOnly allowFraction size={20}/>
                </Card.Text>
                <Card.Text>
                    {result.rating} stars
                </Card.Text>
                <Card.Text>
                    ({result.review_count} reviews)
                </Card.Text>
            </Card.Body>
        </Card>
    )

};

export default Result;