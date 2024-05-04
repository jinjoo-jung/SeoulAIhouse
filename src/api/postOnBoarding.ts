import { OnBoardingRequest, OnBoardingResponse } from '../types/onBoarding';
import instance from './axios';

const postOnboarding = async (
  credential: OnBoardingRequest,
): Promise<OnBoardingResponse | null> => {
  try {
    const response = await instance.post('/api/ai/on-board', credential);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default postOnboarding;
