import React from 'react';
import { Link } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileForm />
      <Link to="/">Home</Link>
    </div>
  );
}
