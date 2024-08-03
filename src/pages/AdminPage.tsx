import React, { useState, useEffect } from 'react';

import { getProfiles, addProfile, updateProfile, deleteProfile } from '../services/profileService';
import { Profile } from '../types/types';
import AdminPanel from '../components/adminpanel/AdminPanel';

const AdminPage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfiles();
        setProfiles(profileData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddProfile = async (newProfile: Profile) => {
    try {
      const addedProfile = await addProfile(newProfile);
      setProfiles([...profiles, addedProfile]);
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };

  const handleUpdateProfile = async (updatedProfile: Profile) => {
    try {
      await updateProfile(updatedProfile);
      const updatedProfiles = profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      );
      setProfiles(updatedProfiles);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteProfile = async (profileId: string) => {
    try {
      await deleteProfile(profileId);
      const updatedProfiles = profiles.filter((profile) => profile.id !== profileId);
      setProfiles(updatedProfiles);
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div className="container py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Admin Panel</h1>
      <AdminPanel
        profiles={profiles}
        onAddProfile={handleAddProfile}
        onUpdateProfile={handleUpdateProfile}
        onDeleteProfile={handleDeleteProfile}
      />
    </div>
  );
};

export default AdminPage;