import React from 'react';
import {Card} from 'react-bootstrap';

class Cards extends React.Component {
  render() {
    return (
      <div className="container" id="primates">
        <h1 className="some-title underline-title">Tous nos primates</h1>
        <div className="flex-cards">
          {JSON.parse(localStorage.getItem("primates")).length > 0 ? (
            JSON.parse(localStorage.getItem("primates")).map(primate => (
              <Card key={primate.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./primate1.jpg" alt="img" />
                <Card.Body>
                  <Card.Title>{primate.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>Aucun primates</p>
          )}
        </div>
      </div>
    )
  }
}

export default Cards;
