import { HomeRecommendResponse } from '../types/homeRecommned';
import instance from './axios';

const getHomeRecommend = async (
  town: string,
): Promise<HomeRecommendResponse | null> => {
  try {
    const response = await instance.get(`/api/report/property?town=${town}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getHomeRecommend;
