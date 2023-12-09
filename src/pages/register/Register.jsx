import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Aladdinsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Aladdinsocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegister" onClick={handleHome}>
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
