import React, { useState } from "react";
import UseSIgnup from "../Hooks/UseSIgnup";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const {signup, isLoading, error} = UseSIgnup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password) 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md my-10 mx-auto p-5 bg-white border-md"
    >
      <h2 className="text-center font-semibold text-2xl">Sign-Up</h2>

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading} className="bg-green-600 p-2.5 text-white font-[Poppins] rounded pointer justify-center">
        Sign up
      </button>
      {error && <div className="text-red-500 border-2 border-red-400 p-4 m-3">{error}</div>}
    </form>
  );
};

export default SignUp;
