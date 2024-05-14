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
  type: string;
  floor: number;
  rentType: string;
  deposit: number;
  rental: number;
}
