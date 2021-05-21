import React from 'react';



import './styles.css';

function CardsMessages(props) {
  
  const openMessageLink = () => {

    const url = `https://youtu.be/${props.tag}`

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null
    }
  }

  return (
    <>
      <div className="cards-messages-container">
        <button className="cards-messages-button" onClick={openMessageLink}>
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