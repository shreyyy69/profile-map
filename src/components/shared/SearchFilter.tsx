import React, { ChangeEvent, useState } from 'react';
import { Profile } from '../../types/types';

interface SearchFilterProps {
  profiles: Profile[];
  onSearch: (filteredProfiles: Profile[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ profiles, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredProfiles = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(term) ||
        profile.description.toLowerCase().includes(term) ||
        profile.address.city.toLowerCase().includes(term)
    );

    onSearch(filteredProfiles);
  };

  return (
    <div className="mx-2 mb-4">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default SearchFilter;