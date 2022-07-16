import React from "react";
import { Container } from "./styles";
import nike from "../../assets/imgs/nike2.png";

import { Envelope, Lock } from "styled-icons/bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <div className="leftArea">
        <p>Bshop</p>
        <img src={nike} alt="" />
      </div>
      <div className="rightArea">
        <form>
          <h2>Login</h2>
          <div className="input-field">
            <Envelope className="icons" />
            <input type="text" placeholder="Email" id="email" />
          </div>
          <div className="input-field">
            <Lock className="icons" />
            <input type="text" placeholder="password" id="password" />
          </div>
          <button>Login</button>
        </form>
        <p>
          Don't have a Account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
