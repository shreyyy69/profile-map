import React from 'react';
import { Profile } from '../../types/types';

interface ProfileDetailsProps {
  profile: Profile;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">

      <img src={profile.photoUrl} alt={`${profile.name}'s profile`} className="object-contain w-full h-56 rounded-md rounded-t-lg" />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-semibold">{profile.name}</h3>
        <p className="mb-4 text-gray-400">{profile.description}</p>

        <h4 className="mb-2 text-xl font-semibold">Contact Information:</h4>
        <p className="mb-2 text-gray-400">Email: {profile.email}</p>
        <p className="mb-2 text-gray-400">Phone: {profile.phone}</p>
        <h4 className="mb-2 text-xl font-semibold">Address:</h4>
        <p className="text-gray-400">{profile.address.street}, {profile.address.city}, {profile.address.state}, {profile.address.zip}</p>



      </div>
    </div>
  );
};

export default ProfileDetails;