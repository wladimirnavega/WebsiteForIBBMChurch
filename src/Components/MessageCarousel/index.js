import React from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import Carousel, { consts } from 'react-elastic-carousel'

import ArrowButton from '../../Components/ArrowButton'
import CardsMessages from '../../Components/CardsMessages'

import { imagesOfVideosList } from '../../utils/imageList'

import './styles.css';

function MessageCarousel() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1202, itemsToShow: 5 }
  ]

  return (
    <Carousel
      breakPoints={breakPoints}
      renderArrow={({ type, onClick }) => {
        const pointer = type === consts.PREV ?
          <ArrowButton
            icon={BsFillCaretLeftFill}
            color="#F5F5F5"
            colorMouserOver="#45B3E6"
          /> :
          <ArrowButton
            icon={BsFillCaretRightFill}
            color="#F5F5F5"
            colorMouserOver="#45B3E6"
          />
        return (
          <div className="message-carousel-arrows-container">
            <button onClick={onClick} className="message-carousel-arrows" >
              {pointer}
            </button>
          </div>
        )
      }}>

      {imagesOfVideosList.map(item => 
        <CardsMessages tag={item.tag} />  
      )}

    </Carousel>
  );
}

export default MessageCarousel;