export interface StationRequest {
  x: number;
  y: number;
}

export interface StationResponse {
  isSuccess: boolean;
  message: string;
  result: {
    destination: string;
  };
}
