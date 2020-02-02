import React from "react";

function SvgHome(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <g clipPath="url(#home_svg__clip0)" fill="currentColor">
        <path d="M27.702 11.378L14.43 1.66a.727.727 0 00-.86 0L.298 11.378a.728.728 0 10.86 1.174L14 3.149l12.843 9.403a.724.724 0 001.016-.157.727.727 0 00-.157-1.017z" />
        <path
          d="M23.458 25.526h.5v-12.08a.227.227 0 11.455 0s0 0 0 0v12.308a.228.228 0 01-.227.227H16.91a.227.227 0 01-.226-.21h0v-.013h0l-.001-.004v-7.049A2.685 2.685 0 0014 16.022a2.685 2.685 0 00-2.683 2.683v7.054h0v.013a.227.227 0 01-.227.21H3.815a.228.228 0 01-.228-.228V13.446a.228.228 0 01.455 0v12.08h6.82v-6.82A3.142 3.142 0 0114 15.566a3.142 3.142 0 013.138 3.138v6.821h6.32z"
          stroke="currentColor"
        />
      </g>
      <defs>
        <clipPath id="home_svg__clip0">
          <path fill="currentColor" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgHome;
