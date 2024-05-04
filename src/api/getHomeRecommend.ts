import instance from './axios';

const getHomeRecommend = async (town: string) => {
  try {
    const response = await instance.get(`/api/report/property?town=${town}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getHomeRecommend;
