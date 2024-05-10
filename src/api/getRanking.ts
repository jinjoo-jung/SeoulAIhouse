import { RankingRequest, RankingResponse } from '../types/ranking';
import instance from './axios';

const getRanking = async (
  credential: RankingRequest,
): Promise<RankingResponse | null> => {
  const destination = credential.destination;
  try {
    const response = await instance.get(`/api/rank?destination=${destination}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getRanking;
