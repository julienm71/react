import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <div class="banner">
        <div class="container">
          <h1>Bienvenue à <strong>PrimateLand</strong> !</h1>
          <p>Ici vous trouverez tout les grands primates qui ont existé.</p>
        </div>
        <p className="scrolldown">
           <a title="En savoir plus" href="#more"><i class="fas fa-chevron-circle-down"></i></a>
        </p>
      </div>
    )
  }
}

export default Banner;
