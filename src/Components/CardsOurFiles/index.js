import React, { useState } from 'react';

import PhotosModal from '../PhotosModal'

import './styles.css'


export default function CardsOurFiles(props) {

  const [modalShow, setmodalShow] = useState(false)  

  return (
    <div className="cards-slider-container">
      <button className="cardLink" onClick={()=> setmodalShow(true)}>
        <div className="card-container">
          <img src={props.image} width="239.11" height="179.23" className="" alt="Title" />
          <p>{props.title}</p>
          <p>{props.text}</p>
        </div>
      </button>

      <PhotosModal
        show={modalShow}
        onHide={()=> setmodalShow(false)}
        photos={props.photo}
        title={props.title}
      />

    </div>
  )
}


