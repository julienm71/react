import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <h1>Bienvenue à <strong>PrimateLand</strong> !</h1>
          <p>Ici vous trouverez tout les grands primates qui ont existé.</p>
          <a href="#more" className="btn btn-primary">En savoir plus</a>
          <a href="#primates" className="btn btn-success ml-2">Tout les primates</a>
        </div>
        <p className="scrolldown">
           <a title="En savoir plus" href="#more"><i className="fas fa-chevron-circle-down"></i></a>
        </p>
      </div>
    )
  }
}

export default Banner;
