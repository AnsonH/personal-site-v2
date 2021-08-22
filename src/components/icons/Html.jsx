import PropTypes from "prop-types";

function Html({ fontSize = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fontSize={fontSize} width="1em" height="1em">
      <path d="M97.7 430.3L63 40.4h381.9l-34.7 389.7-156.5 43.4" fill="#e44d26" />
      <path d="M253.9 440.3V72.4H410l-29.8 332.7" fill="#f16529" />
      <path
        d="M133.9 120.1h120v47.8h-67.6l4.4 49h63.2v47.7H147m2.1 23.9h48l3.4 38.2L254 341v50l-98.1-27.4"
        fill="#ebebeb"
      />
      <path d="M373.5 120.1H253.7v47.8h115.4m-4.3 49H253.7v47.8h59l-5.6 62.1-53.4 14.3v49.7l97.9-27.2" fill="#fff" />
    </svg>
  );
}

Html.propTypes = {
  fontSize: PropTypes.number,
};

export default Html;
