import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TalentFrontEndForm from '../TalentFrontEndForm';

describe('TalentFrontEndForm', () => {
  const frontEndCategories = [
    { id: 1, category: 'ReactJs' },
    { id: 2, category: 'VueJs' },
  ];
  it('renders backEnd categories', () => {
    const { getByText } = render((
      <TalentFrontEndForm
        frontEndCategories={frontEndCategories}
      />
    ));

    frontEndCategories.forEach(({ category }) => {
      const regex = new RegExp(`${category}`);

      expect(getByText(regex)).not.toBeNull();
    });
  });

  context('when click category', () => {
    const handleClick = jest.fn();

    it('calls handleClick function', () => {
      const { getByText } = render((
        <TalentFrontEndForm
          frontEndCategories={frontEndCategories}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText(/ReactJs/));

      expect(handleClick).toBeCalled();
    });
  });
});
