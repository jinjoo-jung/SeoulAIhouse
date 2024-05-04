export interface HomeRecommendResponse {
  isSuccess: true;
  message: string;
  result: {
    town: string;
    properties: HomeRecommendPropertyResponse[];
  };
}

export interface HomeRecommendPropertyResponse {
  name: string;
  address: string;
  area: number;
  floor: number;
  rentType: string;
  deposit: number;
  rental: number;
}
