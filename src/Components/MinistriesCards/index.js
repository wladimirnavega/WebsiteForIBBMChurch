import React from 'react';

import './styles.css'

function MinistriesCards(props) {

  const Icon = props.icon

  return (
    
      <div className="ministries-card-container">
        <div className="ministries-card-icon-container">
          <Icon
            size={67}
            color="#3F4359"
          />
        </div>
        <div className="ministries-card-title">
          <p>{ props.title }</p>
          <span>{ props.description }</span>
        </div>
      </div>     
    
  );
}

export default MinistriesCards;

