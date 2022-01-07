import { getAllTrees, TreeResponse } from './trees';

beforeAll(() => jest.spyOn(window, 'fetch'));

const mockAllTreeData: TreeResponse = {
  responseCode: 'OK',
  responseText: 'Success',
  data: [
    [1, 1641554315],
    [1, 1641554315],
    [1, 1641554315],
    [1, 1641554315],
  ],
};

const mockErrorResponse: TreeResponse = {
  responseCode: 'ERROR',
  responseText: 'uh oh',
  data: [],
};

describe('getAllTrees', () => {
  it('should return tree data on success', async () => {
    // @ts-expect-error
    window.fetch.mockResolvedValueOnce({
      json: async () => mockAllTreeData,
    });

    const trees = await getAllTrees();
    expect(trees).toMatchObject(mockAllTreeData.data);
  });

  it('should throw an error is response status is not ok', async () => {
    // @ts-expect-error
    window.fetch.mockResolvedValueOnce({
      json: async () => mockErrorResponse,
    });

    await expect(getAllTrees()).rejects.toThrow('error placeholder');
  });
});
