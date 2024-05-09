import { MapMakerRequest, MapMarkerResponse } from '../types/mapMarker';
import instance from './axios';

const getMapMarker = async (
  stationName: string,
  params: MapMakerRequest,
): Promise<MapMarkerResponse | null> => {
  try {
    const response = await instance.get(`/api/map/${stationName}`, {
      params: params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getMapMarker;
