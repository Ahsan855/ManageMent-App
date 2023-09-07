import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Store additional user data (profile) in Firestore
      await firebase.firestore().collection("users").doc(user.uid).set({
        username,
        bio,
      });

      console.log("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
