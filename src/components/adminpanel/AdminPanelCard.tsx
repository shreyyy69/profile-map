import React from 'react';
import { Profile } from '../../types/types';

interface AdminPanelCardProps {
  profile: Profile;
  onEdit: (profile: Profile) => void;
  onDelete: (profileId: string) => void;
}

const AdminPanelCard: React.FC<AdminPanelCardProps> = ({ profile, onEdit, onDelete }) => {
  return (
    <div className="p-4 mb-4 border rounded-lg shadow-md">
      <div className="flex items-center gap-5">
        <img src={profile.photoUrl} alt={`${profile.name}'s profile`} className="w-20 h-20 rounded-md" />
        <div>
          <h4 className="text-lg font-semibold">{profile.name}</h4>
          <p className="text-gray-600">{profile.description}</p>
          <p className="text-gray-500">{profile.email}</p>
        </div>
      </div>

      <div className="mt-6 text-right">
        <div>
          <button
            className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => onEdit(profile)}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => onDelete(profile.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelCard;
