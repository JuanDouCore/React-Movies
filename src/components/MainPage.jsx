// MainPage.jsx
import { useState } from 'react';
import AllMovies from './AllMovies';
import SearchMovie from './SearchMovie';
import { Container, Row, Col } from 'react-bootstrap';

export function MainPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (filteredMovies) => {
    setSearchResults(filteredMovies);
  };

  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <Row style={{ textAlign: 'center' }}>
        <h1>Peliculas React</h1>
      </Row>
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12} md={8} lg={6} className="">
          <SearchMovie onSearch={handleSearch} />
          {searchResults.length > 0 ? (
            <AllMovies peliculas={searchResults} />
          ) : (
            <AllMovies />
          )}
        </Col>
      </Row>
    </Container>
  );
}

