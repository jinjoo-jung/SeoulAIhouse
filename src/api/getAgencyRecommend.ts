import instance from './axios';

const getAgencyRecommend = async (town: string) => {
  try {
    const response = await instance.get(`/api/report/agency?town=${town}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getAgencyRecommend;
