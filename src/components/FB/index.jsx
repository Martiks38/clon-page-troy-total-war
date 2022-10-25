function FB({ styles, hover }) {
  return (
    <a
      target="_blank"
      href="https://www.facebook.com/TotalWar/"
      rel="noreferrer noopener"
      className="inline-block"
    >
      <svg
        className={`group ${styles}`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="60.734px"
        height="60.733px"
        viewBox="0 0 60.734 60.733"
      >
        <defs>
          <polygon
            id="flogo_myk-c-a"
            points=".001 .001 22 .001 22 22 .001 22"
          ></polygon>
        </defs>
        <g fill="none" fillRule="evenodd">
          <rect
            id="inner_f"
            width="50.734"
            height="59.733"
            x="5"
            y="1"
            className={hover && 'group-hover:fill-[#FFF]'}
            fill="transparent"
            fillRule="nonzero"
            mask="url(#flogo_cmyk-c-b)"
          ></rect>
          <path
            className={hover && 'group-hover:fill-[#2F5A99]'}
            fill="#FFF"
            d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914 v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462 v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
          />
        </g>
      </svg>
    </a>
  )
}

export default FB
