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
    <div className="text-center">
      <h2 className="text-2xl text-purple-400">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          className="border-cyan-500 border-2 p-2 m-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          className="border-cyan-500 border-2 p-2 m-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          className="border-cyan-500 border-2 p-2 m-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <textarea
          className="border-cyan-500 border-2 p-2 m-2"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />{" "}
        <br />
        <button
          className="px-5 py-2 border-2  bg-green-500 text-white text-2xl hover:bg-blue-500"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
