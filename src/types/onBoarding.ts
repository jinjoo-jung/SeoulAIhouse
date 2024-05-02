export interface OnBoardingResponse {
  isSuccess: boolean;
  message: string;
  result: {
    type: string;
    accessToken: string;
  };
}
// "result": {
//     "type": "Bearer",
//     "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Mjk1MzQzNS00MWQ3LTQ4ZjgtODg0MS0yZGZhNTU1YjEwODIiLCJpYXQiOjE3MTQ1ODExODUsImV4cCI6MTcxNDY2NzU4NX0.P6PntWFPVf_p97TIscz-4pceMlA8QnSR-JzUkz30NR4"
// }

export interface OnBoardingRequest {
  factors: string[];
  station: string;
  timeRange: string;
}
