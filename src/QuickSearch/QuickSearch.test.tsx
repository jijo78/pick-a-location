import React from 'react'

import { cleanup, render, fireEvent, waitFor } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { QuickSearch } from './QuickSearch'

let props: any

const onChangeMock = jest.fn()

describe('<QuickSearch />', () => {
  const _LABEL = /Pick up a location/i

  beforeEach(() => {
    props = {
      handleChange: onChangeMock,
    }
  })

  afterEach(() => {
    cleanup
    jest.resetAllMocks()
  })
  it('should render the form', async () => {
    const { getByLabelText } = render(<QuickSearch {...props}></QuickSearch>)
    const form = getByLabelText(_LABEL)

    expect(form).toBeInTheDocument()
  })

  it('should call onChange value is equal or more than 2 char', async () => {
    const { getByPlaceholderText } = render(
      <QuickSearch {...props} placeholder="search-form"></QuickSearch>
    )

    const input = getByPlaceholderText('search-form')

    const e = {
      target: { value: 'bi' },
    }

    fireEvent.change(input, e)
    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalled()
    })
  })
  it('should  not call on change if not value', async () => {
    const { getByPlaceholderText } = render(
      <QuickSearch {...props} placeholder="search-form"></QuickSearch>
    )

    const input = getByPlaceholderText('search-form')

    const e = {
      target: { value: '' },
    }

    fireEvent.change(input, e)
    await waitFor(() => {
      expect(onChangeMock).not.toHaveBeenCalled()
    })
  })
})
