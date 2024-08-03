// import React, { useState } from 'react';

// import AddProfileForm from '../form/AddProfileForm';
// import EditProfileForm from '../form/EditProfileForm';
// import { Profile } from '../../types/types';

// interface AdminPanelProps {
//   profiles: Profile[];
//   onAddProfile: (newProfile: Profile) => void;
//   onUpdateProfile: (updatedProfile: Profile) => void;
//   onDeleteProfile: (profileId: string) => void;
// }

// const AdminPanel: React.FC<AdminPanelProps> = ({
//   profiles,
//   onAddProfile,
//   onUpdateProfile,
//   onDeleteProfile,
// }) => {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

//   const handleAddProfile = (newProfile: Profile) => {
//     onAddProfile(newProfile);
//     setShowAddForm(false);
//   };

//   const handleUpdateProfile = (updatedProfile: Profile) => {
//     onUpdateProfile(updatedProfile);
//     setEditingProfile(null);
//   };

//   const handleDeleteProfile = (profileId: string) => {
//     onDeleteProfile(profileId);
//   };

//   return (
//     <div className="relative p-4">

//       {editingProfile && (
//         <div className="absolute inset-0 flex h-full bg-opacity-100">
//           <div className="flex items-center justify-center w-full ">
//             <div className="p-4 rounded-lg md:w-[50%] w-full h-fit">
//               <EditProfileForm
//                 profile={editingProfile}
//                 onUpdateProfile={handleUpdateProfile}
//                 onCancel={() => setEditingProfile(null)}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <div className=" text-end">
//         {
//           !showAddForm ? (
//             <button
//               className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
//               onClick={() => setShowAddForm(true)}
//             >
//               Add Profile
//             </button>
//           ) :

//             (
//               <div className='flex items-center justify-center'>
//                 <AddProfileForm
//                   onAddProfile={handleAddProfile}
//                   setShowAddForm={setShowAddForm}
//                 />
//               </div>
//             )
//         }
//       </div>


//       <div>
//         <h3 className="mb-2 text-xl font-semibold">Existing Profiles</h3>

//         <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
//           {profiles.map((profile) => (
//             <div key={profile.id} className="p-4 mb-4 border rounded-lg shadow-md">
//               <div className="flex items-center gap-5 ">
//                 <img src={profile.photoUrl} alt={`${profile.name}'s profile`} className="w-20 h-20 rounded-md " />
//                 <div>
//                   <h4 className="text-lg font-semibold">{profile.name}</h4>
//                   <p className="text-gray-600">{profile.description}</p>
//                   <p className="text-gray-500">{profile.email}</p>
//                 </div>
//               </div>

//               <div className="mt-6 text-right">
//                 <div>
//                   <button
//                     className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onClick={() => setEditingProfile(profile)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                     onClick={() => handleDeleteProfile(profile.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}


//         </div>
//       </div>


//     </div>
//   );
// };

// export default AdminPanel;


import React, { useState } from 'react';
import { Profile } from '../../types/types';
import EditProfileForm from '../form/EditProfileForm';
import AddProfileForm from '../form/AddProfileForm';
import AdminPanelCard from './AdminPanelCard';

interface AdminPanelProps {
  profiles: Profile[];
  onAddProfile: (newProfile: Profile) => void;
  onUpdateProfile: (updatedProfile: Profile) => void;
  onDeleteProfile: (profileId: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  profiles,
  onAddProfile,
  onUpdateProfile,
  onDeleteProfile,
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

  const handleAddProfile = (newProfile: Profile) => {
    onAddProfile(newProfile);
    setShowAddForm(false);
  };

  const handleUpdateProfile = (updatedProfile: Profile) => {
    onUpdateProfile(updatedProfile);
    setEditingProfile(null);
  };

  const handleDeleteProfile = (profileId: string) => {
    onDeleteProfile(profileId);
  };

  return (
    <div className="relative p-4">
      {editingProfile && (
        <div className="absolute inset-0 flex h-full bg-opacity-100 top-5">
          <div className="flex items-center justify-center w-full">
            <div className="p-4 rounded-lg md:w-[50%] w-full h-fit">
              <EditProfileForm
                profile={editingProfile}
                onUpdateProfile={handleUpdateProfile}
                onCancel={() => setEditingProfile(null)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="text-end">
        {!showAddForm ? (
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={() => setShowAddForm(true)}
          >
            Add Profile
          </button>
        ) : (
          <div className="flex items-center justify-center">
            <AddProfileForm onAddProfile={handleAddProfile} setShowAddForm={setShowAddForm} />
          </div>
        )}
      </div>

      <div>
        <h3 className="mb-2 text-xl font-semibold">Existing Profiles</h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles.map((profile) => (
            <AdminPanelCard
              key={profile.id}
              profile={profile}
              onEdit={(profile) => setEditingProfile(profile)}
              onDelete={handleDeleteProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
