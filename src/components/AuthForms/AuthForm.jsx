import React from 'react';
import { useState } from 'react';
export default function AuthForm({ isSigningUp, handleAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleAuth(email, password);
  }

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
        <button onClick={handleSubmit}>{isSigningUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
    </div>
  );
}
