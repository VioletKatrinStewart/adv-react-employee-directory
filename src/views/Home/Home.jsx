import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>
        Welcome to the Employee directory! Sign up to create your profile or sign in to view your
        profile.
      </h3>
      <Link to="/profile">View your profile</Link>
    </div>
  );
}
