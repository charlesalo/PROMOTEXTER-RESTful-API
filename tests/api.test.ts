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
      // Arrange
      const data = { name: 'Test Resource', value: 100 };
      const expectedResponse = { id: '123', ...data };
      mockedAxios.post.mockResolvedValue({ data: expectedResponse });

      // Act
      const response = await createResource(data);

      // Assert
      expect(response.data).toEqual(expectedResponse);
      expect(mockedAxios.post).toHaveBeenCalledWith(`${baseURL}resource`, data);
    });

     // Additional tests for PUT, DELETE, etc. can be added here
  });

  // Similarly, add describe blocks for getResource, updateResource, deleteResource
});
