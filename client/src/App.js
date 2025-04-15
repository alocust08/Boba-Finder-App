import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Col, Container, Row} from 'react-bootstrap';


import ResultList from './Components/ResultLists';
import Header from './Components/Header';
import PageCountFooter from './Components/PageCountFooter';
import SortDropdown from './Components/SortDropdown';
import OfficeSelect from './Components/OfficeSelect';
import Overlay from './Components/Overlay';


function App() {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState('rating');
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const LIMIT = 20;


  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        setIsLoading(true);
        if (location) {
          const response = await axios.get(
            `http://localhost:3001/boba-search?location=${location}&sort_by=${sortBy}&page=${page}&limit=${LIMIT}`
          );

          setResults((results) => [...response.data.businesses]);
          setTotalResults(response.data.total)
        }
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusinesses();
  }, [page, sortBy, location]);

  return (
    <Container className="main-section">
      <Row className="justify-content-center mb-2 mt-4">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg={10}>
          <OfficeSelect setPage={setPage} setLocation={setLocation} selectedLocation={location} />
        </Col>
        <Col>
          <SortDropdown setSortBy={setSortBy} setPage={setPage} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Overlay isLoading={isLoading}>
            <ResultList results={results} location={location} isLoading={isLoading} />
          </Overlay>
        </Col>
      </Row>
      <Row>
        <Col>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        </Col>
      </Row>
      <Row>
        <Col>
          {location && <PageCountFooter
            totalResults={totalResults}
            page={page}
            setPage={setPage}
          />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
