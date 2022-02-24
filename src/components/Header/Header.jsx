import React from 'react';
// import { useUser } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  //   const { user } = useUser();
  //   if (user) return <h1>Hi {user.email}</h1>;
  return (
    <div>
      <Link to="/">
        <h1>Acme Employee Directory</h1>
      </Link>
      <AuthButton />
    </div>
  );
}
