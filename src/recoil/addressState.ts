import { atom } from 'recoil';

export interface AddressType {
  address: string;
}

export const addressState = atom<AddressType>({
  key: 'addressState',
  default: { address: '' },
});
