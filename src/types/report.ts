export interface AIRequest {
  factors: [];
  timeRange: string;
  destination: string;
  town: string;
}
export interface AIResponse {
  isSuccess: true;
  message: string;
  result: {
    totalStatement: string;
    graph: ChartDataResponse[];
    matchRate: string;
    travelTime: number;
    station: string;
    avgDeposit: number;
    avgRental: number;
    avgLump: number;
  };
}

export interface ChartDataResponse {
  name: string;
  percent: string;
}
