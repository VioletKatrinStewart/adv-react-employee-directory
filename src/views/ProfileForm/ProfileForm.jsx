import React, { useEffect } from 'react';
import { useProfile } from '../../Context/ProfileContext';
import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setBirthday(profile.birthday);
    setBio(profile.bio);
  }, [profile]);

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

//create handle submit function async
//attatch to form button dont forget prevent default
//await creating profile and give it values it needs then put in state (set) with those values then useHisory to push user to profile page
