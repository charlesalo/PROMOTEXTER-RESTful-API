import axios from 'axios';
import { createResource, getResource, updateResource, deleteResource, baseURL } from '../src/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API functions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createResource', () => {
    it('should send a POST request to create a new resource', async () => {
      const data = { name: 'Test Resource', value: 100 };
      const expectedResponse = { id: '123', ...data };
      mockedAxios.post.mockResolvedValue({ data: expectedResponse });

      const response = await createResource(data);

      expect(response.data).toEqual(expectedResponse);
      expect(mockedAxios.post).toHaveBeenCalledWith(`${baseURL}resource`, data);
    });
  });

  describe('getResource', () => {
    it('should send a GET request to retrieve a resource', async () => {
      const resourceId = '123';
      const expectedResponse = { id: resourceId, name: 'Test Resource', value: 100 };
      mockedAxios.get.mockResolvedValue({ data: expectedResponse });

      const response = await getResource(resourceId);

      expect(response.data).toEqual(expectedResponse);
      expect(mockedAxios.get).toHaveBeenCalledWith(`${baseURL}resource/${resourceId}`);
    });
  });

  describe('updateResource', () => {
    it('should send a PUT request to update a resource', async () => {
      const resourceId = '123';
      const newData = { name: 'Updated Test Resource', value: 150 };
      const expectedResponse = { ...newData };
      mockedAxios.put.mockResolvedValue({ data: expectedResponse });

      const response = await updateResource(resourceId, newData);

      expect(response.data).toEqual(expectedResponse);
      expect(mockedAxios.put).toHaveBeenCalledWith(`${baseURL}resource/${resourceId}`, newData);
    });
  });

  describe('deleteResource', () => {
    it('should send a DELETE request to delete a resource', async () => {
      const resourceId = '123';
      const expectedResponse = {};
      mockedAxios.delete.mockResolvedValue({ data: expectedResponse });

      const response = await deleteResource(resourceId);

      expect(response.data).toEqual(expectedResponse);
      expect(mockedAxios.delete).toHaveBeenCalledWith(`${baseURL}resource/${resourceId}`);
    });
  });
});
