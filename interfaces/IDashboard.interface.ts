export interface ITableResponse {
  type: string;
  location: string;
  rental: string;
  ipcount: string;
  purpose: string;
  date: string;
}

export interface IInfoResponse {
  expireTime: string;
  lastChargeAmount: string;
  lastCharge: string;
  totalDataUsage: string;
  dailyUsage: string;
}
