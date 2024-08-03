import { useState, useEffect } from 'react';

import { getProfiles } from '../services/profileService';
import { Profile } from '../types/types';

export const useProfileData = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfiles();
        setProfiles(profileData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { profiles, isLoading, error };
};