import React, { useState, useEffect } from 'react';

import { Address, Profile } from '../types/types';

import { getProfiles } from '../services/profileService';

import Map from '../components/Map';
import SearchFilter from '../components/shared/SearchFilter';
import ProfileList from '../components/profile/ProfileList';

const ProfileListPage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfiles();
        setProfiles(profileData);
        setFilteredProfiles(profileData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSummaryClick = (profileId: string) => {
    const selectedProfile = profiles.find(
      (profile) => profile.id === profileId
    );

    if (selectedProfile) {
      setSelectedProfile(selectedProfile);
    }
  };

  const handleSearch = (filtered: Profile[]) => {
    setFilteredProfiles(filtered);
  };

  const getAddressesForSelectedProfile = (): Address[] => {
    if (selectedProfile) {
      console.log([selectedProfile.address]);
      return [selectedProfile.address];
    }
    return [];
  };

  return (
    <div className="container py-8 mx-auto">
      <h1 className="mx-2 mb-4 text-3xl font-bold">Profile List</h1>


      <SearchFilter profiles={profiles} onSearch={handleSearch} />


      <div className="grid grid-cols-1 gap-8 mx-2 md:grid-cols-2">
        <div className="relative h-full">
          <div className="md:sticky md:top-32">
            <Map
              addresses={getAddressesForSelectedProfile()}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <ProfileList
            profiles={filteredProfiles}
            onSummaryClick={handleSummaryClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileListPage;