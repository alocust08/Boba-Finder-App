import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const PageCountFooter = ({ totalResults, page, setPage }) => {
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    
    const totalPages = Math.ceil(totalResults / 20);

    return (
        <Container>
            <Row lg={5} className="justify-content-center">
                <Col>
                    <Button disabled={page === 0} onClick={() => handlePageChange(page - 1)}>
                        Previous
                    </Button>
                </Col>
                <Col>
                    Page {page + 1} of {totalPages} 
                </Col>
                <Col>
                    <Button disabled={page === totalPages - 1} onClick={() => handlePageChange(page + 1)}>
                        Next
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default PageCountFooter;