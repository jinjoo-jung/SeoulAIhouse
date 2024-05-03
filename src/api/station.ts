import { StationRequest, StationResponse } from '../types/station';
import instance from './axios';

const getAddressStation = async (
  credential: StationRequest,
): Promise<StationResponse | null> => {
  const x = credential.x;
  const y = credential.y;
  try {
    const response = await instance.get<StationResponse>(
      `/api/address?x=${x}&y=${y}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getAddressStation;
