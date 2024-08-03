import React from 'react';
import { Profile } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  profile: Profile;
  onSummaryClick: (profileId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = (
  { profile, onSummaryClick, }
) => {

  const navigate = useNavigate();


  const handleSummaryClick = () => {
    onSummaryClick(profile.id);
  };


  return (
    <div className="relative p-4 border rounded-lg shadow-md shadow-slate-500 border-slate-700">
      <img src={profile.photoUrl} alt={`${profile.name}'s profile`} className="object-cover w-full h-48 rounded-t-lg" />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{profile.name}</h3>
        <p className="text-gray-400 ">{profile.description}</p>
        <p className="mb-4 text-gray-400">{profile.email}</p>
        <button
          className="absolute px-8 py-3 font-bold text-white bg-blue-700 rounded rounded-l-full right-4 top-4 hover:bg-blue-600"
          onClick={() => navigate(`/profile/${profile.id}`)}
        >
          go
        </button>
        <button
          className="w-full px-4 py-2 font-bold text-white rounded bg-slate-700 hover:bg-slate-600"
          onClick={handleSummaryClick}
        >
          Summary
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;