import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const Auth = ({ onLogin, onLogout }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      onLogin(userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      onLogout();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div>
      {onLogin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="input input-bordered text-secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered text-secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-outline btn-primary" type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Auth;
