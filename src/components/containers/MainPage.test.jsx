/** 
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import  { arnoldData } from '../services/arnoldData'
import  MainPage  from './MainPage';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
    return res (
      ctx.json(arnoldData));
    } 
  )
);

describe('Testing MainPage Container', () => { 

    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('should render a list of hey Arnold characters', async () => { 
    render(<MemoryRouter> <MainPage/> </MemoryRouter>);

    screen.getByText('Loading...');


    return waitFor(() => { 
      const ul = screen.getByRole('list', { name: 'arnold-characters' });
			expect(ul).toMatchSnapshot();
    });
  


  });
});