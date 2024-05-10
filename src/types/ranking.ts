export interface RankingRequest {
  destination: string;
}

export interface TownCardsResponse {
  town: string;
  travelTime: number;
  avgDeposit: number;
  avgRental: number;
  avgLump: number;
  x: number;
  y: number;
}

export interface TimeGroupsResponse {
  timeRange:
    | 'WITHIN_30_MINUTES'
    | 'WITHIN_60_MINUTES'
    | 'WITHIN_90_MINUTES'
    | 'OVER_90_MINUTES';
  townCards: TownCardsResponse[];
}

export interface RankingResponse {
  isSuccess: true;
  message: string;
  result: {
    timeGroups: TimeGroupsResponse[];
  };
}
