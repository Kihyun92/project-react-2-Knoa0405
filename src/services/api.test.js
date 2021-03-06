import {
  fetchCategories, fetchManttoCategories, postCategory,
} from './api';

import manttoCategories from '../fixture/manttoCategories';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch({
        frontEndCategories: [
          { id: 1, category: 'ReactJs' },
        ],
        backEndCategories: [
          { id: 1, category: 'NodeJs' },
        ],
      });
    });

    it('returns categories', async () => {
      const { frontEndCategories } = await fetchCategories();

      expect(frontEndCategories).toEqual({
        backEndCategories: [{ category: 'NodeJs', id: 1 }],
        frontEndCategories: [{ category: 'ReactJs', id: 1 }],
      });
    });
  });

  describe('fetchManttoCategories', () => {
    beforeEach(() => {
      mockFetch({
        manttoCategories,
      });
    });

    it('returns categories', async () => {
      const { categories } = await fetchManttoCategories();

      expect(categories).toEqual({ manttoCategories });
    });
  });

  describe('postCategory', () => {
    beforeEach(() => {
      mockFetch();
    });

    it('returns nothing', async () => {
      const result = await postCategory({
        selectedTalent: {}, selectedTalentToLearn: {}, userInfo: {},
      });

      expect(result).toBeUndefined();
    });
  });
});
