import React from 'react';
import { Link } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import { useProfile } from '../../Context/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();
  // console.log(profile);

  return (
    <div>
      {!profile.name ? (
        <ProfileForm isCreating />
      ) : (
        <>
          <h1>Profile:</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Birthday: {profile.birthday}</p>
          <p>Bio: {profile.bio}</p>

          <Link to="/">Home</Link>
        </>
      )}
    </div>
  );
}
