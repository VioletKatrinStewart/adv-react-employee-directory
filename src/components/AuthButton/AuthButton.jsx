import { Link } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { signOutUser } from '../../services/user';

export default function AuthButton({ className }) {
  const { user, setUser } = useUser();

  return (
    <>
      {user?.email ? (
        <button
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      )}
    </>
  );
}
