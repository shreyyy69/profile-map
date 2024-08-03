import { Profile } from "../types/types";


const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Arun Bajpai',
    description: 'Software Engineer',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDo-2hcCClnJ5SRT-6YAAB2hiMmgIshakelklmVmAFZuhZx-0ZxfFDT0MaPtqwoK0Rdc&usqp=CAU',
    email: 'arun.bajpai@example.com',
    phone: '123-456-7890',
    address: {
      id: '1',
      street: '1278',
      city: 'Kanpur',
      state: 'Uttar Pradesh',
      zip: '208022',
      latitude: 26.4434,
      longitude: 80.2865,
    },
  },
  {
    id: '2',
    name: 'Anurag Misra',
    description: 'Senior Software Engineer',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jsc9rU98JaocerL_h9KqAEEITMJSYJplq70-j9AIiQ&s',
    email: 'anurag.misra@example.com',
    phone: '969-696-9696',
    address: {
      id: '2',
      street: 'Kormangla',
      city: 'Banglore',
      state: 'Karnataka',
      zip: '560601',
      latitude: 12.9716,
      longitude: 77.5946,
    },
  },
  {
    id: '3',
    name: 'Vertika Bajpai',
    description: 'Risk Analyst',
    photoUrl: 'https://as1.ftcdn.net/v2/jpg/05/52/15/68/1000_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg',
    email: 'vertika.bajpai@example.com',
    phone: '345-678-9012',
    address: {
      id: '3',
      street: '789 Oak St',
      city: 'Delhi',
      state: 'DL',
      zip: '110001',
      latitude: 28.7041,
      longitude: 77.1025,
    },
  },
  {
    id: '4',
    name: 'Osho bajpai',
    description: 'Gamer',
    photoUrl: 'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    email: 'osho.bajpai@example.com',
    phone: '456-789-0123',
    address: {
      id: '4',
      street: '012 Pine St',
      city: 'Bangalore',
      state: 'KA',
      zip: '560001',
      latitude: 12.9716,
      longitude: 77.5946,
    },
  },
  {
    id: '5',
    name: 'Priyanshi Bajpai',
    description: 'Influencer',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63jlT7qmwFzka5a_jZ3W-KLCmwAWE72XYr5EdvSJYLg&s',
    email: 'priyanshi.bajpai@example.com',
    phone: '567-890-1234',
    address: {
      id: '5',
      street: '345 Cedar St',
      city: 'Kolkata',
      state: 'WB',
      zip: '700001',
      latitude: 22.5726,
      longitude: 88.3639,
    },
  },

  {
    id: '6',
    name: 'Khushi Jha',
    description: 'Housewife',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwkUh61-wUd4ZP0CSZ9IOxAMLiLmnajUNxA&s',
    email: 'khushi.jha@example.com',
    phone: '678-901-2345',
    address: {
      id: '6',
      street: '901 Maple St',
      city: 'Chennai',
      state: 'TN',
      zip: '600001',
      latitude: 13.0827,
      longitude: 80.2707,
    },
  },
  {
    id: '7',
    name: 'Hiransh Khanna',
    description: 'Foodie',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_n2zc_0ClY8g8cduy7pvjHAdBdh5naTfCjOZxmQTMWg&s',
    email: 'hiransh.khanna@example.com',
    phone: '789-012-3456',
    address: {
      id: '7',
      street: '234 Birch St',
      city: 'Hyderabad',
      state: 'TS',
      zip: '500001',
      latitude: 17.3850,
      longitude: 78.4867,
    },
  },
  {
    id: '8',
    name: 'Kavya Gupta',
    description: 'Sales and Marketing Executive',
    photoUrl: 'https://qph.cf2.quoracdn.net/main-qimg-1ed1b98d9d449358540920702fe8f3f6.webp',
    email: 'kavya.gupta@example.com',
    phone: '890-123-4567',
    address: {
      id: '8',
      street: '567 Walnut St',
      city: 'Pune',
      state: 'MH',
      zip: '411001',
      latitude: 18.5204,
      longitude: 73.8567,
    },
  },
  {
    id: '9',
    name: 'Krishna Pandey',
    description: 'Stock Exchange Broker',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0qK_hSNpI6JR_DwQqmXNBxAR5pC0d18I8pN8NI3oxQ&s',
    email: 'krishna.pandey@example.com',
    phone: '901-234-5678',
    address: {
      id: '9',
      street: '789 Cherry St',
      city: 'Jaipur',
      state: 'RJ',
      zip: '302001',
      latitude: 26.9124,
      longitude: 75.7873,
    },
  },
  {
    id: '10',
    name: 'Shivani Tiwari',
    description: 'Teacher',
    photoUrl: 'https://www.shutterstock.com/image-photo/smiling-girl-student-woman-teacher-260nw-721118458.jpg',
    email: 'shivani.tiwari@example.com',
    phone: '012-345-6789',
    address: {
      id: '10',
      street: '123 Pine St',
      city: 'Lucknow',
      state: 'UP',
      zip: '226001',
      latitude: 26.8467,
      longitude: 80.9462,
    },
  },
];


export const getProfiles = async (): Promise<Profile[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockProfiles;
};

export const getProfileById = async (profileId: string): Promise<Profile | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockProfiles.find((profile) => profile.id === profileId) || null;
};

export const addProfile = async (newProfile: Profile): Promise<Profile> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  mockProfiles.push(newProfile);
  return newProfile;
};

export const updateProfile = async (updatedProfile: Profile): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = mockProfiles.findIndex(
    (profile) => profile.id === updatedProfile.id
  );

  if (index !== -1) {
    mockProfiles[index] = updatedProfile;
  }
};

export const deleteProfile = async (profileId: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = mockProfiles.findIndex(
    (profile) => profile.id === profileId
  );

  if (index !== -1) {
    mockProfiles.splice(index, 1);
  }
};