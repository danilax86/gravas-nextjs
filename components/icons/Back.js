import React from "react";

function SvgBack(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <g clipPath="url(#back_svg__clip0)">
        <path
          d="M6.7 15l12.592 12.587a1.418 1.418 0 002.002 0 1.41 1.41 0 000-1.998L9.7 14.001 21.292 2.412a1.412 1.412 0 000-1.999 1.418 1.418 0 00-2.001 0L6.699 13.001a1.427 1.427 0 00.002 1.998z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="back_svg__clip0">
          <path fill="currentColor" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgBack;
