import React from 'react';
// import { useProfile } from '../../Context/ProfileContext';
import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState({ email });
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  // const { profile, setProfile } = useProfile();

  return (
    <div>
      <form>
        <h1>Looks like you still need to set up your profile! Please fill out the form below.</h1>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="please enter your name"
          />
        </label>
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
          birthday:
          <input
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="please enter your birthday"
          />
        </label>
        <label>
          bio:
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write a little bit about yourself here"
          />
        </label>
      </form>
    </div>
  );
}
