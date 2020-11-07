import React from "react";
import Icons from "../assets/image/SVG/shopping.svg"; // Path to your icons.svg

const SvgShoppingCard = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);



export default SvgShoppingCard;