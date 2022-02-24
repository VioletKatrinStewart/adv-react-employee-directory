import React from 'react';
import { useUser } from '../../Context/UserContext';

export default function Header() {
  const { user } = useUser();
  if (user) return <h1>Hi {user.email}</h1>;
  return (
    <div>
      <h1>Acme Employee Directory</h1>
      <button>Sign In</button>
    </div>
  );
}
