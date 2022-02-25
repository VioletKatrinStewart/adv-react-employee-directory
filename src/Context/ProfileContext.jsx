import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profile';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const { user } = useUser();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
        setProfile(resp);
      } catch (error) {
        setProfile({ name: '', email: '', bio: '', birthday: '' });
      }
    };
    fetchProfile();
  }, [user]);

  const value = { profile, setProfile };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

const useProfile = () => {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { ProfileProvider, useProfile };
