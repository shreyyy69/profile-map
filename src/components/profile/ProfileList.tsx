import React from 'react';
import { Profile } from '../../types/types';
import ProfileCard from './ProfileCard';

interface ProfileListProps {
  profiles: Profile[];
  onSummaryClick: (profileId: string) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, onSummaryClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSummaryClick={onSummaryClick}

        />
      ))}
    </div>
  );
};

export default ProfileList;