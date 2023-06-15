import styles from "../styles/main.module.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <defs>
              <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="25%" stopColor="#E8B4B8" />
                <stop offset="100%" stopColor="#A49393" />
              </linearGradient>
              <clipPath id="b">
                <path d="M0 0h800v38H0z" />
                <path d="M0 22h800v37H0z" />
                <path d="M0 43h800v36H0z" />
                <path d="M0 65h800v35H0z" />
                <path d="M0 86h800v34H0z" />
                <path d="M0 108h800v33H0z" />
                <path d="M0 130h800v32H0z" />
                <path d="M0 151h800v31H0z" />
                <path d="M0 173h800v30H0z" />
                <path d="M0 195h800v29H0z" />
                <path d="M0 216h800v28H0z" />
                <path d="M0 238h800v27H0z" />
                <path d="M0 259h800v26H0z" />
                <path d="M0 281h800v25H0z" />
                <path d="M0 303h800v24H0z" />
                <path d="M0 324h800v23H0z" />
                <path d="M0 346h800v22H0zM0 368h800v21H0zM0 389h800v20H0zM0 411h800v19H0zM0 432h800v18H0zM0 454h800v17H0zM0 476h800v16H0zM0 497h800v15H0zM0 519h800v14H0zM0 541h800v13H0zM0 562h800v12H0zM0 584h800v11H0zM0 605h800v10H0zM0 627h800v9H0zM0 649h800v8H0zM0 670h800v7H0zM0 692h800v6H0zM0 714h800v5H0zM0 735h800v4H0zM0 757h800v3H0zM0 778h800v2H0zM0 800h800v1H0z" />
              </clipPath>
            </defs>
            <path fill="url(#a)" d="M0 0h800v800H0z" clipPath='url("#b")' />
            <circle cx={400} r={400} fill="url(#a)" clipPath='url("#b")' />
            <circle
              cx={400}
              cy={800}
              r={400}
              fill="url(#a)"
              clipPath='url("#b")'
            />
          </svg> */
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <main className={`${styles.pageContainer} ${roboto.className}`}>
        <div className={styles.linkContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <g
              fill="none"
              stroke="#e8b4b8"
              strokeLinecap="round"
              strokeWidth={13.5}
            >
              <path d="M154.5 400h491" opacity={0.57} />
              <path d="m625.948 415.8-451.896-31.6" opacity={0.49} />
              <path d="m384.65 397.843 30.7 4.314" opacity={0.87} />
              <path d="m400.978 400.208-1.956-.416" opacity={0.49} />
              <path d="M545.631 441.76 254.37 358.24" opacity={0.3} />
              <path d="M172.594 317.231 627.406 482.77" opacity={0.31} />
              <path d="m405.025 402.237-10.05-4.474" opacity={0.09} />
              <path d="m215.464 301.88 369.072 196.24" />
              <path d="m188.412 267.785 423.176 264.43" opacity={0.64} />
              <path d="m279.052 312.126 241.896 175.748" opacity={0.61} />
              <path d="m372.04 376.538 55.92 46.924" opacity={0.71} />
              <path d="m209.375 215.916 381.25 368.168" opacity={0.92} />
              <path d="m280.895 267.72 238.21 264.56" opacity={0.9} />
              <path d="m395.69 394.484 8.62 11.032" opacity={0.66} />
              <path d="m532.25 596.067-264.5-392.134" opacity={0.97} />
              <path d="m415.5 426.847-31-53.694" opacity={0.6} />
              <path d="m332.49 261.586 135.02 276.828" opacity={0.72} />
              <path d="m310.094 177.476 179.812 445.048" opacity={0.87} />
              <path d="m392.275 376.224 15.45 47.552" opacity={0.93} />
              <path d="M461.327 645.97 338.673 154.03" opacity={0.1} />
              <path d="m348.774 109.482 102.452 581.036" opacity={0.33} />
              <path d="m384.634 253.805 30.732 292.39" opacity={0.63} />
              <path d="m404.694 534.418-9.388-268.836" opacity={0.58} />
              <path d="m394.276 563.9 11.448-327.8" opacity={0.37} />
              <path d="m402.404 377.126-4.808 45.748" opacity={0.3} />
              <path d="m386.455 476.815 27.09-153.63" opacity={0.81} />
              <path d="M454.19 182.654 345.81 617.346" opacity={0.59} />
              <path d="M470.147 184.11 329.853 615.89" opacity={0.55} />
              <path d="M491.779 172.84 308.22 627.16" opacity={0.85} />
              <path d="M305.97 592.791 494.03 207.21" opacity={0.23} />
              <path d="m267.75 629.064 264.5-458.128" opacity={0.2} />
              <path d="M484.718 274.4 315.282 525.6" opacity={0.65} />
              <path d="m352.902 460.283 94.196-120.566" opacity={0.69} />
              <path d="m557.915 224.618-315.83 350.764" opacity={0.54} />
              <path d="m345.33 452.794 109.34-105.588" opacity={0.73} />
              <path d="m292.754 489.99 214.492-179.98" opacity={0.66} />
              <path d="m272.984 492.282 254.032-184.564" opacity={0.36} />
              <path d="m120.568 574.608 558.864-349.216" opacity={0.54} />
              <path d="m284.334 461.5 231.332-123" opacity={0.8} />
              <path d="M661.274 283.673 138.726 516.327" opacity={0.08} />
              <path d="m168.366 484.308 463.268-168.616" opacity={0.65} />
              <path d="m497.087 372.16-194.174 55.68" opacity={0.56} />
              <path d="m572.643 363.304-345.286 73.392" opacity={0.57} />
              <path d="m696.09 358.387-592.18 83.226" opacity={0.97} />
              <path d="m402.494 399.826-4.988.348" opacity={0.52} />
              <path d="M585 400H215" opacity={0.62} />
              <path d="m120.183 380.433 559.634 39.134" opacity={0.31} />
              <path d="m124.705 361.31 550.59 77.38" opacity={0.09} />
              <path d="m130.52 342.72 538.96 114.56" opacity={0.4} />
              <path d="M80.861 308.488 719.14 491.512" opacity={0.21} />
              <path d="m220.989 334.845 358.022 130.31" opacity={0.33} />
              <path d="m475.824 433.76-151.648-67.52" opacity={0.58} />
              <path d="M661.352 538.964 138.648 261.036" opacity={0.56} />
              <path d="m346.997 366.88 106.006 66.24" opacity={0.66} />
              <path d="m450.564 436.737-101.128-73.474" opacity={0.46} />
              <path d="m447.112 439.531-94.224-79.062" opacity={0.96} />
              <path d="m255.772 260.721 288.456 278.558" opacity={0.97} />
              <path d="M539.514 554.946 260.486 245.054" opacity={0.8} />
              <path d="m207.298 153.353 385.404 493.294" opacity={0.7} />
              <path d="m253.212 182.378 293.576 435.244" opacity={0.56} />
              <path d="M501 574.937 299 225.063" opacity={0.53} />
              <path d="M461.153 525.382 338.847 274.618" opacity={0.75} />
              <path d="m292.675 134.362 214.65 531.276" opacity={0.84} />
              <path d="M478.027 640.142 321.973 159.858" opacity={0.44} />
              <path d="m351.616 205.94 96.768 388.12" opacity={0.35} />
              <path d="m346.777 98.156 106.446 603.688" opacity={0.74} />
              <path d="m402.352 422.377-4.704-44.754" opacity={0.96} />
              <path d="m407.975 628.36-15.95-456.72" opacity={0.82} />
              <path d="m402.88 317.55-5.76 164.9" opacity={0.15} />
              <path d="m369.007 694.876 61.986-589.752" opacity={0.2} />
              <path d="m391.752 446.778 16.496-93.556" opacity={0.52} />
              <path d="M474.27 102.12 325.73 697.88" opacity={0.28} />
              <path d="m361.682 517.931 76.636-235.862" opacity={0.17} />
              <path d="m366.473 482.983 67.054-165.966" opacity={0.74} />
              <path d="m353.313 495.722 93.374-191.444" opacity={0.99} />
              <path d="m277.25 612.61 245.5-425.22" opacity={0.24} />
              <path d="m321.713 516.065 156.574-232.13" opacity={0.57} />
              <path d="m388.302 414.972 23.396-29.944" opacity={0.85} />
              <path d="M458.549 334.975 341.45 465.025" opacity={0.11} />
              <path d="m404.316 395.832-8.632 8.336" opacity={0.77} />
              <path d="m488.095 326.08-176.19 147.84" opacity={0.75} />
              <path d="m362.38 427.332 75.24-54.664" opacity={0.22} />
              <path d="M651.87 242.614 148.13 557.386" opacity={0.71} />
              <path d="M151.009 532.391 648.99 267.609" opacity={0.96} />
              <path d="m145.12 513.48 509.76-226.96" opacity={0.62} />
              <path d="m279.72 443.779 240.56-87.558" opacity={0.72} />
              <path d="m693.185 315.93-586.37 168.14" opacity={0.2} />
              <path d="m598.075 357.898-396.15 84.204" opacity={0.85} />
            </g>
          </svg>
          <div>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
