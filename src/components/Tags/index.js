import React from 'react'
import { tagCheck } from '../../helpersVariable/tagCheck';

const Tag = (props) => {
    const {bgColor, color, text} = props;
  return (
    <span
    style={{
      backgroundColor:tagCheck[text] ?? bgColor ?? "red",
      padding: "7px",
      borderRadius: "4px",
      color: color ?? "white",
    }}
  >
    {text}
  </span>
  )
}

export default Tag;
