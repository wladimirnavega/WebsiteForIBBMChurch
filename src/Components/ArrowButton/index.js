import React from 'react';

function ArrowButton(props) {
  const IconName = props.icon
  const color = props.color
 // const colorMouserOver = props.colorMouserOver
  return (
    <IconName
      size={40}
      color={color}
      className="arrows"       
    />
  );
}

export default ArrowButton;