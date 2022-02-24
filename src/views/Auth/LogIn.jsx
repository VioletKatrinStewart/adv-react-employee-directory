import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForms/AuthForm';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logInUser } from '../../services/profile';
import { useUser } from '../../Context/UserContext';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser;

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await logInUser(email, password);
    //set user with information it needs
    history.push('/');
  };

  return (
    <div>
      <h1>Sign in</h1>
      <AuthForm {...{ email, setEmail, password, setPassword, handleSubmit }} />
      <Link to="/">Home</Link>
    </div>
  );
}
