import axios, { AxiosResponse } from 'axios';

// Define interfaces for your data structures
interface Resource {
  id?: string;
  name: string;
  value: number;
}

export const baseURL = "https://api.example.com/";

export async function createResource(data: Resource): Promise<AxiosResponse<Resource>> {
  const url = `${baseURL}resource`;
  return axios.post<Resource>(url, data);
}

export async function getResource(resourceId: string): Promise<AxiosResponse<Resource>> {
  const url = `${baseURL}resource/${resourceId}`;
  return axios.get<Resource>(url);
}

export async function updateResource(resourceId: string, newData: Resource): Promise<AxiosResponse<Resource>> {
  const url = `${baseURL}resource/${resourceId}`;
  return axios.put<Resource>(url, newData);
}

export async function deleteResource(resourceId: string): Promise<AxiosResponse<{}>> {
  const url = `${baseURL}resource/${resourceId}`;
  return axios.delete(url);
}