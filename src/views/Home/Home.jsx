import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/profile">View your profile</Link>
      <Link to="/register">Create your account!</Link>
      <Link to="/login">Sign in</Link>
    </div>
  );
}
