import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm({ email, password, setEmail, setPassword, handleSubmit }) {
  return (
    <div>
      <form>
        <label>
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="please enter your email"
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="please enter your password"
          />
        </label>
        <button onClick={handleSubmit}>Log In</button>
        <p>Need to sign up? Click here</p>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}
