import { AgencyResponse } from '../types/agency';
import instance from './axios';

const getAgencyRecommend = async (
  town: string,
): Promise<AgencyResponse | null> => {
  try {
    const response = await instance.get(`/api/report/agency?town=${town}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getAgencyRecommend;
