import { AIRequest, AIResponse } from '../types/report';
import instance from './axios';

const postReport = async (
  credential: AIRequest,
): Promise<AIResponse | null> => {
  try {
    const response = await instance.post('/api/report/ai', credential);
    return response.data;
  } catch (error) {
    console.log();
    return null;
  }
};

export default postReport;
