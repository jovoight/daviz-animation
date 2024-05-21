import { motion } from 'framer-motion'

const LoadingAnimation = () => {

  return (
    <>
      <h2>Loading Animation</h2>
      <div>
        <svg
          width={450}
          height={450}
          viewBox="0 0 450 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="daviz-mascot">
            <g id="mascot-container">
              <g id="tail-container">
                <path
                  id="tail"
                  d="M270.12 315.84C270.12 315.84 290.19 309.65 290.19 311.14V392.52C290.19 414.85 272.09 432.94 249.77 432.94C227.45 432.94 209.35 414.84 209.35 392.52V383.96C209.35 401.56 223.62 415.83 241.22 415.83C258.82 415.83 273.09 401.56 273.09 383.96C273.07 383.96 273.39 321.66 270.12 315.84Z"
                  fill="#5FD9C5"
                />
                <motion.g 
                  id="pie-chart"
                  animate={{ rotate: [0, 0, 1080] }}
                  transition={{ duration: 5, repeat: Infinity, times: [0, 0.5, 1], ease: 'linear' }}
                >
                  <motion.path
                    id="pie-chart-slice"
                    d="M240.61 351.37C228.43 351.37 218.03 358.97 213.89 369.69L240.61 380.02V351.37Z"
                    fill="#5FD9C5"
                    animate={{ x: [0, -4.7, -4.7, 0, 0], y: [0, -6.7, -6.7, 0, 0] }}
                    transition={{ duration: 5, repeat: Infinity, times: [0, 0.1, 0.4, 0.5, 1] }}
                  />
                  <motion.path
                    id="pie-chart-main"
                    d="M240.61 351.37V380.02L213.89 369.69C212.65 372.9 211.96 376.38 211.96 380.02C211.96 395.84 224.79 408.67 240.61 408.67C256.43 408.67 269.26 395.84 269.26 380.02C269.26 364.2 256.43 351.37 240.61 351.37Z"
                    fill="#A3E9DC"
                  />
                </motion.g>
              </g>
              <path
                id="bar-graph-long"
                d="M359.1 307.19H82.54V332.19H359.1V307.19Z"
                fill="#103872"
              />
              <path
                id="bar-graph-medium"
                d="M186.76 274.65H82.54V299.65H186.76V274.65Z"
                fill="#103872"
              />
              <path
                id="bar-graph-short"
                d="M123.23 242.11H82.54V267.11H123.23V242.11Z"
                fill="#103872"
              />
              <g id="body-container">
                <g id="body">
                  <path
                    id="torso-outer"
                    d="M313.99 272.56C313.85 271.65 313.7 270.74 313.55 269.84C313.23 265.52 312.28 261.39 310.79 257.57C305.82 239.98 297.67 228.04 290.34 229.14C287.89 229.51 285.79 231.3 284.08 234.18C281.89 233.73 279.64 233.49 277.33 233.49C275.02 233.49 272.77 233.73 270.58 234.18C268.87 231.29 266.77 229.5 264.32 229.14C256.99 228.04 248.84 239.98 243.87 257.57C242.38 261.39 241.43 265.52 241.11 269.84C240.96 270.74 240.81 271.64 240.67 272.56C236.88 297.92 241.31 319.61 250.58 320.99C255.1 321.67 259.93 317.38 264.13 309.89C268.22 311.63 272.67 312.59 277.33 312.59C281.99 312.59 286.44 311.63 290.53 309.89C294.74 317.39 299.57 321.67 304.08 320.99C313.35 319.61 317.79 297.93 313.99 272.56Z"
                    fill="#5FD9C5"
                  />
                  <path
                    id="torso-inner"
                    d="M277.33 300.68C291.358 300.68 302.73 288.31 302.73 273.05C302.73 257.79 291.358 245.42 277.33 245.42C263.302 245.42 251.93 257.79 251.93 273.05C251.93 288.31 263.302 300.68 277.33 300.68Z"
                    fill="#A3E9DC"
                  />
                  <g id="arms-container">
                    <g id="right-arm">
                      <path
                        id="right-arm-shadow"
                        d="M315.31 269.74C310.99 259.58 309.94 249.88 312.3 245.47C311.18 245.15 310.14 245.17 309.21 245.56C304.33 247.64 304.68 259.47 310.01 271.99C315.34 284.51 323.61 292.97 328.5 290.9C329.42 290.51 330.16 289.77 330.71 288.74C325.89 287.38 319.63 279.89 315.31 269.74Z"
                        fill="#5FD9C5"
                      />
                      <path
                        id="right-arm-highlight"
                        d="M327.7 264.47C323.38 254.31 317.12 246.83 312.3 245.47C309.94 249.88 310.99 259.58 315.31 269.74C319.63 279.9 325.89 287.38 330.71 288.74C333.08 284.32 332.02 274.62 327.7 264.47Z"
                        fill="#A3E9DC"
                      />
                    </g>
                    <g id="left-arm">
                      <path
                        id="left-arm-shadow"
                        d="M245.62 245.56C244.7 245.17 243.65 245.15 242.53 245.47C244.89 249.88 243.84 259.58 239.52 269.74C235.2 279.9 228.94 287.38 224.12 288.74C224.67 289.77 225.4 290.51 226.33 290.9C231.21 292.98 239.49 284.51 244.82 271.99C250.15 259.47 250.5 247.64 245.62 245.56Z"
                        fill="#5FD9C5"
                      />
                      <path
                        id="left-arm-highlight"
                        d="M239.53 269.74C243.85 259.58 244.9 249.88 242.54 245.47C237.72 246.83 231.46 254.31 227.14 264.47C222.82 274.63 221.77 284.33 224.13 288.74C228.94 287.38 235.21 279.89 239.53 269.74Z"
                        fill="#A3E9DC"
                      />
                    </g>
                  </g>
                  <path
                    id="head-outer"
                    d="M300.4 68.69L286.9 28.37C283.65 18.65 269.94 18.52 266.5 28.18L251.93 69.17C205.01 79.45 170.16 117.58 170.16 163.04C170.16 216.4 218.14 259.65 277.32 259.65C336.5 259.65 384.48 216.4 384.48 163.04C384.49 116.83 348.5 78.2 300.4 68.69Z"
                    fill="#5FD9C5"
                  />
                  <path
                    id="head-inner"
                    d="M296.59 76.35L286.16 43.23C283.16 34.27 270.53 34.15 267.37 43.06L255.93 76.8C212.7 86.27 178.59 119.37 178.59 161.26C178.59 210.42 222.8 250.27 277.33 250.27C331.86 250.27 376.07 210.42 376.07 161.26C376.07 118.68 340.9 85.12 296.59 76.35Z"
                    fill="#A3E9DC"
                  />
                  <g id="eyes-container">
                    <path
                      id="glasses-crossbar"
                      d="M399.08 146.4H155.57C151.73 146.4 148.62 143.29 148.62 139.45C148.62 135.61 151.73 132.5 155.57 132.5H399.08C402.92 132.5 406.03 135.61 406.03 139.45C406.03 143.29 402.92 146.4 399.08 146.4Z"
                      fill="#103872"
                    />
                    <path
                      id="left-frame-and-white"
                      d="M215.66 196.73C247.295 196.73 272.94 171.085 272.94 139.45C272.94 107.815 247.295 82.17 215.66 82.17C184.025 82.17 158.38 107.815 158.38 139.45C158.38 171.085 184.025 196.73 215.66 196.73Z"
                      fill="white"
                      stroke="#103872"
                      strokeWidth={6}
                      strokeMiterlimit={10}
                    />
                    <path
                      id="left-pupil-main"
                      d="M215.77 156.79C225.347 156.79 233.11 149.027 233.11 139.45C233.11 129.873 225.347 122.11 215.77 122.11C206.193 122.11 198.43 129.873 198.43 139.45C198.43 149.027 206.193 156.79 215.77 156.79Z"
                      fill="#103872"
                    />
                    <path
                      id="left-pupil-highlight"
                      d="M203.92 138.59C208.471 138.59 212.16 134.901 212.16 130.35C212.16 125.799 208.471 122.11 203.92 122.11C199.369 122.11 195.68 125.799 195.68 130.35C195.68 134.901 199.369 138.59 203.92 138.59Z"
                      fill="white"
                    />
                    <g id="left-iris">
                      <path
                        id="orange"
                        d="M211.99 116.5C200.94 118.3 192.5 127.89 192.5 139.45C192.5 142.29 193.01 145.01 193.94 147.52L187.69 151.13C186.19 147.53 185.36 143.59 185.36 139.45C185.36 123.94 196.98 111.15 211.98 109.29V116.5H211.99Z"
                        fill="#FF8307"
                      />
                      <path
                        id="green"
                        d="M238.75 143.05H245.94C245.3 148.48 243.24 153.47 240.12 157.63L235.01 152.52C236.9 149.74 238.21 146.52 238.75 143.05Z"
                        fill="#1AC9A8"
                      />
                      <path
                        id="dark-blue"
                        d="M197.68 154.08C201.94 159.35 208.46 162.71 215.76 162.71C221.04 162.71 225.9 160.95 229.8 157.99L234.88 163.07C229.66 167.3 223.01 169.84 215.76 169.84C205.81 169.84 196.98 165.06 191.44 157.67L197.68 154.08Z"
                        fill="#004BFF"
                      />
                      <path
                        id="purple"
                        d="M238.69 135.5C238.05 131.75 236.52 128.31 234.31 125.4L239.39 120.32C242.84 124.58 245.16 129.79 245.9 135.49H238.69V135.5Z"
                        fill="#9200E6"
                      />
                      <path
                        id="light-blue"
                        d="M228.84 120.21C226.1 118.35 222.95 117.06 219.54 116.5V109.3C224.9 109.96 229.83 112.02 233.95 115.1L228.84 120.21Z"
                        fill="#4D81FF"
                      />
                    </g>
                    <path
                      id="right-frame-and-white"
                      d="M339 196.73C370.635 196.73 396.28 171.085 396.28 139.45C396.28 107.815 370.635 82.17 339 82.17C307.365 82.17 281.72 107.815 281.72 139.45C281.72 171.085 307.365 196.73 339 196.73Z"
                      fill="white"
                      stroke="#103872"
                      strokeWidth={6}
                      strokeMiterlimit={10}
                    />
                    <path
                      id="right-pupil-main"
                      d="M339 156.79C348.577 156.79 356.34 149.027 356.34 139.45C356.34 129.873 348.577 122.11 339 122.11C329.423 122.11 321.66 129.873 321.66 139.45C321.66 149.027 329.423 156.79 339 156.79Z"
                      fill="#103872"
                    />
                    <path
                      id="right-pupil-highlight"
                      d="M350.85 138.59C355.401 138.59 359.09 134.901 359.09 130.35C359.09 125.799 355.401 122.11 350.85 122.11C346.299 122.11 342.61 125.799 342.61 130.35C342.61 134.901 346.299 138.59 350.85 138.59Z"
                      fill="white"
                    />
                    <g id="right-iris">
                      <path
                        id="orange_2"
                        d="M342.78 116.5C353.83 118.3 362.27 127.89 362.27 139.45C362.27 142.29 361.76 145.01 360.83 147.52L367.08 151.13C368.58 147.53 369.41 143.59 369.41 139.45C369.41 123.94 357.79 111.15 342.79 109.29V116.5H342.78Z"
                        fill="#FF8307"
                      />
                      <path
                        id="green_2"
                        d="M316.02 143.05H308.83C309.47 148.48 311.53 153.47 314.65 157.63L319.76 152.52C317.87 149.74 316.56 146.52 316.02 143.05Z"
                        fill="#1AC9A8"
                      />
                      <path
                        id="dark-blue_2"
                        d="M357.09 154.08C352.83 159.35 346.31 162.71 339.01 162.71C333.73 162.71 328.87 160.95 324.97 157.99L319.89 163.07C325.11 167.3 331.76 169.84 339.01 169.84C348.96 169.84 357.79 165.06 363.33 157.67L357.09 154.08Z"
                        fill="#004BFF"
                      />
                      <path
                        id="purple_2"
                        d="M316.08 135.5C316.72 131.75 318.25 128.31 320.46 125.4L315.38 120.32C311.93 124.58 309.61 129.79 308.87 135.49H316.08V135.5Z"
                        fill="#9200E6"
                      />
                      <path
                        id="light-blue_2"
                        d="M325.93 120.21C328.67 118.35 331.82 117.06 335.23 116.5V109.3C329.87 109.96 324.94 112.02 320.82 115.1L325.93 120.21Z"
                        fill="#4D81FF"
                      />
                    </g>
                  </g>
                  <path
                    id="mouth"
                    d="M216.84 207.19L223.71 213C229.5 217.9 237.38 219.51 244.62 217.29L270.97 209.2C275.25 207.89 279.82 207.89 284.09 209.22L309.7 217.16C317.13 219.46 325.21 217.72 331.04 212.57L337.12 207.19"
                    stroke="#103872"
                    strokeWidth={6}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  )
}

export default LoadingAnimation