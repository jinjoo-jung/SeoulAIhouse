import {
  // HomeRecommendPropertyResponse,
  HomeRecommendResponse,
  // TransformedHomeRecommendResponse,
} from '../types/homeRecommned';
import instance from './axios';

const getHomeRecommend = async (
  town: string,
): Promise<HomeRecommendResponse | null> => {
  try {
    const response = await instance.get(`/api/report/property?town=${town}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// const transformData = (
//   data: HomeRecommendResponse,
// ): TransformedHomeRecommendResponse => {
//   data.result.properties = data.result.properties.map((property) => ({
//     ...property,
//     area: property.area / property.floor,
//     rental: calculateRental(property),
//     deposit: formatMoney(property.deposit),
//   }));
//   return data;
// };

// const calculateRental = (property: HomeRecommendPropertyResponse) => {
//   if (property.rentType === 'MONTH') {
//     return `${formatMoney(property.rental)}/${formatMoney(property.deposit)}`;
//   } else if (property.rentType === 'LUMP') {
//     return formatMoney(property.rental);
//   }
//   return property.rental.toString();
// };

// const formatMoney = (value: number) => {
//   if (value >= 10000) {
//     const billions = Math.floor(value / 10000);
//     const rest = value % 10000;
//     return `${billions}억${rest > 0 ? ` ${rest}만원` : '원'}`;
//   }
//   return `${value}만원`;
// };

export default getHomeRecommend;
