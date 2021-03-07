import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { SearchResults } from './SearchResults'
import { resultsList } from '../fixtures/results-mock-resp'

const renderComponent = () => render(<SearchResults results={resultsList}></SearchResults>)

describe('<SearchResults />', () => {
  afterEach(cleanup)

  it('should render the page', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('Search Results')

    await waitFor(() => {
      expect(component).toBeInTheDocument()
    })
  })
  it('should render airport name', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('Birmingham Airport')
    await waitFor(() => {
      expect(component).toBeInTheDocument()
    })
  })
  it('should render a list of results ', async () => {
    const { queryAllByTestId } = renderComponent()

    const li = queryAllByTestId('result-list')
    await waitFor(() => {
      expect(li.length).toBe(3)
    })
  })

  it('should render city name', async () => {
    const { findAllByText } = renderComponent()
    const city = await findAllByText('Birmingham, United Kingdom')
    await waitFor(() => {
      expect(city[0]).toBeInTheDocument()
    })
  })

  it('should render place type', async () => {
    const { findAllByText } = renderComponent()
    const placeType = await findAllByText('Airport')
    await waitFor(() => {
      expect(placeType[0]).toBeInTheDocument()
    })
  })
})
