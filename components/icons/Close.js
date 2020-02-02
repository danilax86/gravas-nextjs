import React from "react";

function SvgClose(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <g clipPath="url(#close_svg__clip0)">
        <path
          d="M16.476 14l11.01-11.01A1.75 1.75 0 1025.012.512L14 11.523 2.988.514A1.75 1.75 0 10.513 2.99L11.524 14 .514 25.01a1.75 1.75 0 102.475 2.476L14 16.476l11.01 11.01a1.746 1.746 0 002.477 0 1.75 1.75 0 000-2.476L16.477 14z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="close_svg__clip0">
          <path fill="currentColor" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgClose;
