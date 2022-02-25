import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForms/AuthForm';
import { signInUser } from '../../services/user';
import { signUpUser } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const resp = await signInUser(email, password);
        // console.log(resp);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome back!'}</h2>
      <br />
      <AuthForm handleAuth={handleAuth} isSigningUp={isSigningUp} />

      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/register">Sign Up</Link>
        </p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}
