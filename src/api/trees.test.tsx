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

describe('getAllTrees', () => {
  it('should return tree data on success', async () => {
    // @ts-expect-error
    window.fetch.mockResolvedValueOnce({
      json: async () => mockAllTreeData,
    });

    const trees = await getAllTrees();
    expect(trees).toMatchObject(mockAllTreeData.data);
  });
});
