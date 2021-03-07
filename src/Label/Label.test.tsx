import React from 'react'
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { Label } from './Label'

const renderComponent = () =>
  render(
    <Label>
      <p>City</p>
    </Label>
  )

const COPY = /City/i

describe('<Label />', () => {
  afterEach(cleanup)

  it('should render the component', () => {
    const { getByText } = renderComponent()
    const component = getByText(COPY)
    expect(component).toBeInTheDocument()
  })
})
