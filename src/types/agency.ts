export interface AgencyResponse {
  isSuccess: boolean;
  message: string;
  result: {
    town: string;
    agencies: AgencyListResponse[];
  };
}

export interface AgencyListResponse {
  name: string;
  phone: string;
  address: string;
}
