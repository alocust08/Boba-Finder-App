import React from 'react';
import Result from './Result';
import {Container, Row, Col} from 'react-bootstrap';

const ResultList = ({ results, location, isLoading }) => {

    return (
        <Container>
            {location && results.length > 0 && (
                <Row sm={2} md={4} lg={5} className="mb-4">
                    {results && results.map(result => {
                        return (
                            <Col className="d-flex" key={`result-${result.id}`}>
                                <Result result={result}/>
                            </Col>
                        )
                    })}
                </Row>
            )}
            {location && results.length === 0 && !isLoading && (
                <Row lg={5} className="justify-content-center">
                    <Col>No Boba Shops Found</Col>
                </Row>
            )}
            {!location && (
                <Row align="middle">
                    <Col>Please select a location</Col>
                </Row>
            )}
        </Container>
    )
};

// This component takes an array of results and maps over them to render a list of Result components.
export default ResultList;