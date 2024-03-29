const CircleChevronDownIcon = (props: { height: number; width: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <g
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth=".5"
      transform="translate(2 2)"
    >
      <circle cx={8.5} cy={8.5} r={8} />
      <path d="m5.466 7.466 3 3.068 3-3.068" />
    </g>
  </svg>
);
export default CircleChevronDownIcon;
