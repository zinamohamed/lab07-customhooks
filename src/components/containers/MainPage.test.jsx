/** 
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import  MainPage  from './MainPage';

describe('Testing MainPage Container', () => { 

    it('should render a list of hey arnold characters', async () => { 
    render(<MemoryRouter> <MainPage/> </MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });

    return waitFor(() => { 
      expect(ul).not.toBeEmptyDOMElement();
      expect(ul).toMatchSnapshot();

    });


  });
});