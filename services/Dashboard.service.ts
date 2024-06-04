import createHttp from "@/utils/Http";
import Endpoints from "./Endpoints";
import {
  IInfoResponse,
  ITableResponse,
} from "@/interfaces/IDashboard.interface";

export const getTable = async (): Promise<ITableResponse[]> => {
  const Http = await createHttp();
  const response = await Http.get(Endpoints.getTable);
  return response.data.data;
};

export const getInfo = async (): Promise<IInfoResponse> => {
  const Http = await createHttp();
  const response = await Http.get(Endpoints.getInfo);
  return response.data;
};
