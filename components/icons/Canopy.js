import React from "react";

function SvgCanopy(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" {...props}>
      <g clipPath="url(#canopy_svg__clip0)">
        <path
          d="M27.618 27.227h-1.051V12.938h.335c.21 0 .381-.17.381-.381V9.695 9.69v-.01c0-.01 0-.018-.002-.026l-.002-.019c0-.006-.002-.011-.003-.017a.331.331 0 00-.005-.022l-.003-.014a.347.347 0 00-.008-.022l-.005-.013a.359.359 0 00-.009-.02l-.006-.014-.01-.017-.01-.015a.389.389 0 00-.022-.03l-.01-.012-.014-.016-.012-.011-.015-.014-.016-.013-.013-.01a.374.374 0 00-.024-.015l-.007-.004h-.002l-.003-.002c-.171-.096-5.434-3.029-7.306-4.282-1.643-1.1-5.468-4.918-5.506-4.956a.382.382 0 00-.54 0c-.038.038-3.863 3.856-5.506 4.956C6.352 6.325 1.088 9.26.917 9.354l-.002.001-.002.001-.007.005a.392.392 0 00-.024.014l-.013.01-.016.013-.016.014-.01.01-.016.017-.01.011-.012.017-.01.013a.348.348 0 00-.01.016c-.002.006-.006.011-.009.017l-.007.014-.008.02-.005.014a.386.386 0 00-.007.02l-.004.016-.005.02-.003.02-.002.017a.371.371 0 00-.002.027v2.876c0 .21.17.381.381.381h.336v14.289H.382a.382.382 0 100 .763H27.618a.382.382 0 100-.763zM8.648 5.707c1.463-.98 4.436-3.879 5.352-4.784.916.905 3.889 3.804 5.352 4.783 1.356.909 4.364 2.628 6.09 3.602h-.69a.382.382 0 100 .763h1.768v2.104H1.48v-2.104h21.121a.382.382 0 100-.763H2.559c1.725-.974 4.733-2.693 6.09-3.602zm15.662 7.231v14.289h-1.67V12.938h1.67zm-3.927 0v14.289H7.617V12.938h12.766zm-15.022 0v14.289H3.69V12.938h1.67zM2.197 27.227V12.938h.73v14.289h-.73zm3.927 0V12.938h.73v14.289h-.73zm15.022 0V12.938h.73v14.289h-.73zm3.928 0V12.938h.73v14.289h-.73z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="canopy_svg__clip0">
          <path fill="currentColor" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCanopy;