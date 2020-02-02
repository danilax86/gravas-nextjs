import React from "react";

function SvgArrowDown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <g clipPath="url(#arrow-down_svg__clip0)">
        <path
          d="M27.657 6.165c-.458-.46-1.2-.46-1.657 0L14 19.331 2 6.165c-.457-.46-1.2-.46-1.657 0a1.182 1.182 0 000 1.665l12.77 14.011c.243.246.568.35.886.334.32.017.643-.088.887-.334L27.656 7.83a1.18 1.18 0 000-1.664z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="arrow-down_svg__clip0">
          <path d="M0 0h28v28H0V0z" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowDown;
