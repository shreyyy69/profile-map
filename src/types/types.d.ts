
export interface Address {
  id?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  latitude?: number;
  longitude?: number;
}

export interface Profile {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
  email: string;
  phone: string;
  address: Address;
}

