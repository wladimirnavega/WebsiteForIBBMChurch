import React from 'react';

import Modal from 'react-bootstrap/Modal'

import './styles.css';

function VideoMessagesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >

        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${props.tag}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>

      </Modal.Body>
    </Modal>
  );
}

export default VideoMessagesModal;