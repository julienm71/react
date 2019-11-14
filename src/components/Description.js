import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <div className="bg-description" id="more">
        <div className="container">
          <h1 className="some-title underline-title">A propos de PrimateLand</h1>
          <div className="description">
            <div className="row">
              <div className="col-6">
                <img className="img-description" src="./primate1.jpg" alt="img"/>
              </div>
              <div className="col-6">
                <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas congue lacinia urna vitae blandit.
                Praesent hendrerit gravida est, a venenatis orci mattis sit amet.
                Nullam pellentesque sit amet nisi eget maximus. Sed id congue elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris tincidunt, velit quis pharetra eleifend, odio lacus faucibus urna, eget tincidunt elit neque eget lorem.
                Duis justo arcu, mollis fringilla urna nec, scelerisque euismod erat. Nunc sollicitudin elit tristique blandit imperdiet.
                Nulla facilisis arcu nisi, at feugiat nisl luctus non. eu lacus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Description;
