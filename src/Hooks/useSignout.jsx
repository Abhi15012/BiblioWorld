import { useCallback } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthO } from '../components/firebase';

const useSignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = useCallback(async () => {
    toast.success("Sign-out successful", {
      autoClose: 1000,
    });
    try {
      await signOut(AuthO);
      navigate("/log");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }, [navigate]);

  return handleSignOut;
};

export default useSignOut;
