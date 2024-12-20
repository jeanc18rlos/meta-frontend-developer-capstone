export const Star = ({ fill = "gray", height = 24, width = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <path
      d="M12 2l2.3 7.1h7.1l-5.7 4.2 2.3 7.1-6-4.5-6 4.5 2.3-7.1-5.7-4.2h7.1z"
      fill={fill}
    />
  </svg>
);
export const Close = ({ height = 24, width = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);
export const ThreeHorizontalLines = ({ height = 24, width = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  </svg>
);
export const Scooter = ({ height = 24, width = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 17 11"
    fill="none"
  >
    <path
      d="M14.4708 1.72713C14.4708 0.8993 13.7206 0.221985 12.8036 0.221985H10.3028V1.72713H12.8036V3.72145L9.9027 6.99513H6.96843V3.23227H3.63404C1.79179 3.23227 0.299652 4.57938 0.299652 6.24256V8.50028H1.96685C1.96685 9.74955 3.08387 10.758 4.46764 10.758C5.85141 10.758 6.96843 9.74955 6.96843 8.50028H10.7029L14.4708 4.24825V1.72713ZM4.46764 9.25285C4.00916 9.25285 3.63404 8.91419 3.63404 8.50028H5.30124C5.30124 8.91419 4.92612 9.25285 4.46764 9.25285Z"
      fill="black"
    />
    <path
      d="M6.96844 0.974548H2.80045V2.47968H6.96844V0.974548Z"
      fill="black"
    />
    <path
      d="M14.4708 6.24255C13.087 6.24255 11.97 7.251 11.97 8.50026C11.97 9.74952 13.087 10.758 14.4708 10.758C15.8546 10.758 16.9716 9.74952 16.9716 8.50026C16.9716 7.251 15.8546 6.24255 14.4708 6.24255ZM14.4708 9.25283C14.0123 9.25283 13.6372 8.91417 13.6372 8.50026C13.6372 8.08635 14.0123 7.74769 14.4708 7.74769C14.9293 7.74769 15.3044 8.08635 15.3044 8.50026C15.3044 8.91417 14.9293 9.25283 14.4708 9.25283Z"
      fill="black"
    />
  </svg>
);

export const Chevron = ({
  height = 24,
  width = 24,
  stroke = "inherit",
  className = "chevron",
  position = "down",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      transform: (() => {
        switch (position) {
          case "up":
            return "rotate(180deg)";
          case "down":
            return "";
          case "left":
            return "rotate(90deg)";
          case "right":
            return "rotate(-90deg)";
          default:
            return "";
        }
      })(),
    }}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const BirthdayCake = ({ height = 24, width = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="-32 0 512 512"
  >
    <path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z" />
  </svg>
);
export const EngagementRing = ({ height = 24, width = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 512 512"
  >
    <path d="M256 64C110.06 64 0 125.91 0 208v98.13C0 384.48 114.62 448 256 448s256-63.52 256-141.87V208c0-82.09-110.06-144-256-144zm0 64c106.04 0 192 35.82 192 80 0 9.26-3.97 18.12-10.91 26.39C392.15 208.21 328.23 192 256 192s-136.15 16.21-181.09 42.39C67.97 226.12 64 217.26 64 208c0-44.18 85.96-80 192-80zM120.43 264.64C155.04 249.93 201.64 240 256 240s100.96 9.93 135.57 24.64C356.84 279.07 308.93 288 256 288s-100.84-8.93-135.57-23.36z" />
  </svg>
);

export const Cheers = ({ height = 24, width = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    version="1.1"
    viewBox="0 0 512.001 512.001"
  >
    <g>
      <g>
        <path d="M255.999,0c-9.336,0-16.9,7.565-16.9,16.9v33.8c0,9.336,7.565,16.9,16.9,16.9s16.9-7.565,16.9-16.9V16.9    C272.899,7.565,265.335,0,255.999,0z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M200.345,50.018l-33.8-33.8c-6.601-6.601-17.297-6.601-23.898,0c-6.601,6.596-6.601,17.301,0,23.898l33.801,33.8    c3.301,3.301,7.625,4.952,11.948,4.952s8.648-1.651,11.948-4.952C206.947,67.32,206.947,56.615,200.345,50.018z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M369.348,16.217c-6.601-6.601-17.297-6.601-23.898,0l-33.8,33.8c-6.601,6.596-6.601,17.301,0,23.898    c3.301,3.301,7.625,4.952,11.95,4.952c4.324,0,8.648-1.651,11.948-4.952l33.8-33.8C375.95,33.52,375.95,22.814,369.348,16.217z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M493.602,458.297c-2.256-9.061-11.443-14.578-20.482-12.312l-49.2,12.267l-24.812-99.524    c57.552-23.203,85.164-86.744,64.273-146.68c-4.489-12.875-1.209-5.694-61.206-118.365c-3.647-6.843-11.525-10.288-19.007-8.456    l-127.177,31.707L128.83,85.228c-7.536-1.903-15.36,1.612-19.007,8.456c-8.529,16.016-48.536,91.147-53.897,101.214h0.006    c-3.399,6.383-6.013,13.063-8.203,19.851c-19.297,59.777,8.924,121.276,65.163,143.975l-24.813,99.529l-49.195-12.267    c-9.055-2.277-18.226,3.252-20.487,12.312c-2.256,9.055,3.257,18.226,12.312,20.487l131.186,32.711    c9.089,2.263,18.232-3.284,20.488-12.312c2.256-9.055-3.257-18.226-12.312-20.487l-49.193-12.266l24.813-99.527    c45.849,4.841,87.899-17.723,110.312-55.978c22.401,38.274,64.497,60.808,110.31,55.977l24.814,99.529l-49.193,12.266    c-9.055,2.261-14.568,11.431-12.312,20.488c2.26,9.046,11.412,14.571,20.487,12.312l131.196-32.711    C490.357,476.522,495.869,467.352,493.602,458.297z M95.616,192.282l37.839-71.065l105.643,26.341v82.057l0.012,0.003    L95.616,192.282z M272.914,226.68l0.052-79.138l105.577-26.324l36.472,68.49L272.914,226.68z" />
      </g>
    </g>
  </svg>
);

export const Candle = ({ height = 24, width = 24, fill = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M4,21a1,1,0,0,1,1-1H9V11a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v9h4a1,1,0,0,1,0,2H5A1,1,0,0,1,4,21ZM12,8c1.105,0,2-.343,2-2,0-2-2-4-2-4s-2,2-2,4C10,7.657,10.9,8,12,8Z" />
  </svg>
);

export const Icon = ({ icon }) => {
  switch (icon) {
    case "star":
      return <Star />;
    case "close":
      return <Close />;
    case "menu":
      return <ThreeHorizontalLines />;
    case "scooter":
      return <Scooter />;
    case "cheers":
      return <Cheers />;
    case "candle":
      return <Candle />;
    case "birthday":
      return <BirthdayCake />;
    case "engagement":
      return <EngagementRing />;

    default:
      return null;
  }
};
