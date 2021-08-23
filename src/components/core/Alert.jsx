import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import styled from "styled-components";
import PropTypes from "prop-types";

///// Theming /////

const iconProps = {
  "aria-hidden": true,
  fontSize: 22,
};

const alertTheme = {
  error: {
    border: "#DE3F34",
    icon: <MdErrorOutline color="#DE3F34" {...iconProps} />,
    foreground: "#F2B2AE",
    background: "#2C0D0A",
  },
  success: {
    border: "#3D8D40",
    icon: <IoMdCheckmarkCircleOutline color="#3D8D40" {...iconProps} />,
    foreground: "#B1D1B3",
    background: "#0C1C0D",
  },
};

///// Styles /////

const AlertRoot = styled.div`
  padding: 1rem 1.2rem;
  ${({ theme }) => theme.mixins.flexAlignCenter};

  border-left: 3px solid ${(props) => alertTheme[props.variant].border};
  border-radius: 0.5rem;
  background-color: ${(props) => alertTheme[props.variant].background};
`;

const Icon = styled.div`
  height: 2.2rem;
  margin-right: 1.2rem;
`;

const Message = styled.div`
  color: ${(props) => alertTheme[props.variant].foreground};
  font-size: 1.6rem;
  font-weight: 500;
`;

///// Component /////

function Alert({ children, variant }) {
  return (
    <AlertRoot variant={variant} role="alert">
      <Icon>{alertTheme[variant].icon}</Icon>
      <Message variant={variant}>{children}</Message>
    </AlertRoot>
  );
}

///// PropTypes /////

Alert.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  variant: PropTypes.oneOf(["success", "error"]),
};

export default Alert;
