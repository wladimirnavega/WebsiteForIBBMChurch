import React from 'react';

import './styles.css';
function CardsLinks(props) {

  const openPage = () => {
    const newWindow = window.open(props.url, '_blank', 'noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null
    }
  }

  return (
    <div className="cards-links-container" onClick={openPage}>
      <div className="cards-links-logo-container">
        <img src={props.logo} alt="logo-CBF" />
      </div>
      <hr />
      <p>{props.text}</p>
    </div >

  );
}

export default CardsLinks;