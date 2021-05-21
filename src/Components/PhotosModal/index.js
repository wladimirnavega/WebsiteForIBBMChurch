import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'

const PhotosModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Carousel>

          {props.photos.map(photo => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={photo}
                alt="test"
              />
            </Carousel.Item>
          ))}

        </Carousel>
      </Modal.Body>     
    </Modal>
  )
}

export default PhotosModal