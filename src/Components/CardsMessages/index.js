import React from 'react';

import './styles.css';

function CardsMessages(props) {
  return (
    <>
      <div className="cards-messages-container">
        <button className="cards-messages-button">
          <img
            src={`https://img.youtube.com/vi/${props.tag}/sddefault.jpg`}
            alt="Video-youtube"
            className="cards-messages-image"
          />
        </button>
      </div>

    </>
  );
}

export default CardsMessages;