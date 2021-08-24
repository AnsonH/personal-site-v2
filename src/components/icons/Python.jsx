import PropTypes from "prop-types";

function Python({ fontSize }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 255"
      fontSize={fontSize}
      width="1em"
      height="1em"
      aria-hidden
    >
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={-617.55}
        y1={576.132}
        x2={-616.94}
        y2={575.526}
        gradientTransform="matrix(189.3834 0 0 -189.8058 116986.25 109385.797)"
      >
        <stop offset={0} stopColor="#387eb8" />
        <stop offset={1} stopColor="#366994" />
      </linearGradient>
      <path
        d="M126.7 11.2C67.3 11.2 71 36.9 71 36.9l.1 26.7h56.7v8H48.6s-38-4.3-38 55.6S43.8 185 43.8 185h19.8v-27.8S62.5 124 96.2 124h56.2s31.6.5 31.6-30.5V42.2c-.1 0 4.7-31-57.3-31zM95.4 29.1c5.6 0 10.2 4.6 10.2 10.2S101 49.5 95.4 49.5s-10.2-4.6-10.2-10.2 4.6-10.2 10.2-10.2z"
        fill="url(#prefix__a)"
      />
      <linearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={-617.523}
        y1={576.082}
        x2={-616.867}
        y2={575.461}
        gradientTransform="matrix(189.3834 0 0 -189.8058 117052.25 109450.07)"
      >
        <stop offset={0} stopColor="#ffe052" />
        <stop offset={1} stopColor="#ffc331" />
      </linearGradient>
      <path
        d="M128.3 243.8c59.4 0 55.7-25.7 55.7-25.7l-.1-26.7h-56.7v-8h79.2s38 4.3 38-55.6S211.2 70 211.2 70h-19.8v27.8s1.1 33.2-32.6 33.2h-56.2S71 130.5 71 161.5v51.3c.1 0-4.7 31 57.3 31zm31.3-17.9c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2-4.6 10.2-10.2 10.2z"
        fill="url(#prefix__b)"
      />
    </svg>
  );
}

Python.propTypes = {
  fontSize: PropTypes.number,
};

export default Python;
