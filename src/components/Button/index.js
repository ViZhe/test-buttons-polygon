
import React from 'react';


const Button = ({ type, size, disabled, icon, onClick, onMouseDown, onMouseUp, children }) => {
  const classes = ['button'];

  if (type) {
    classes.push(`button_type_${type}`);
  }

  if (size) {
    classes.push(`button_size_${size}`);
  }

  if (disabled) {
    classes.push(`button_disabled`);
  }

  let innerIcon = null;
  if (icon) {
    innerIcon = <span className={`button__icon button__icon_${icon}`} />;
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >{innerIcon}{children}</button>
  );
}



export default Button;
