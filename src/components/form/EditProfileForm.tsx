import React, { useState } from 'react';
import { Profile } from '../../types/types';

interface EditProfileFormProps {
  profile: Profile;
  onUpdateProfile: (updatedProfile: Profile) => void;
  onCancel: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  profile,
  onUpdateProfile,
  onCancel,
}) => {
  const [name, setName] = useState(profile.name);
  const [description, setDescription] = useState(profile.description);
  const [photoUrl, setPhotoUrl] = useState(profile.photoUrl);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [street, setStreet] = useState(profile.address.street);
  const [city, setCity] = useState(profile.address.city);
  const [state, setState] = useState(profile.address.state);
  const [zip, setZip] = useState(profile.address.zip);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedProfile: Profile = {
      ...profile, name, description, photoUrl, email, phone,
      address: { street, city, state, zip, },
    };

    onUpdateProfile(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-slate-800 h-fit">
      <h3 className="mb-4 text-xl font-semibold">Edit Profile</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      {/*     */}
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 font-semibold">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="photoUrl" className="block mb-1 font-semibold">
          Photo URL
        </label>
        <input
          type="text"
          id="photoUrl"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1 font-semibold">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="street" className="block mb-1 font-semibold">
          Street
        </label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-1 font-semibold">
          City
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block mb-1 font-semibold">
          State
        </label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zip" className="block mb-1 font-semibold">
          ZIP Code
        </label>
        <input
          type="text"
          id="zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/*  */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 mr-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;