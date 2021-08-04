import React from "react";

export const Button = (props) => {
  const { onClickAction, className = "btn-quote", disabled, children } = props;

  return (
    <button className={className} onClick={onClickAction} disabled={disabled}>
      {children}
    </button>
  );
};
