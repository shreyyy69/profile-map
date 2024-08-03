import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Profile } from '../types/types';
import { getProfileById } from '../services/profileService';
import ProfileDetails from '../components/profile/ProfileDetails';
import Map from '../components/Map';
import { Loader } from '../components/shared/Loader';

const ProfileDetailsPage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfileById(profileId as string);
        setProfile(profileData);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  if (isLoading || !profile) {
    return <Loader />;
  }

  return (
    <div className="container py-8 mx-auto">

      <button onClick={() => navigate(-1)}
        className="px-4 py-2 mx-4 my-4 font-bold text-white rounded w-fit bg-slate-700 hover:bg-slate-600"
      >Go Back</button>

      <h1 className="mx-4 mb-4 text-3xl font-bold">Profile Details</h1>
      <div className="grid grid-cols-1 gap-6 mx-4 md:grid-cols-2">
        <div>
          <ProfileDetails profile={profile} />
        </div>
        <div>
          <Map addresses={[profile.address]} isLoading={false} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;