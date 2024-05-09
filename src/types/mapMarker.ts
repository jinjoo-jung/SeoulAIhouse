export interface MapMakerRequest {
  x: number;
  y: number;
  radius: number;
}

export interface MapMarkerResponse {
  isSuccess: boolean;
  message: string;
  result: {
    labels: MapMarkerLabelResponse[];
  };
}

export interface MapMarkerLabelResponse {
  longitude: number;
  latitude: number;
  mark: string;
  avgDeposit: string;
  avgRental: string;
}
