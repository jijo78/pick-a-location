import React, { FC, useEffect } from 'react'

import styled from 'styled-components'

type Props = {
  handleChange: (e: React.ChangeEvent<any>) => void
  placeholder?: string
  ref?: React.RefAttributes<any>
}

const SearchForm = styled('form')`
  position: relative;
`
const SearchLegend = styled('legend')`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
`
const SearchLabel = styled('label')`
  margin: 1rem 0;
  display: inline-block;
  font-size: 1.3rem;
`

const SearchInput = styled('input')`
  position: relative;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 2rem;
  font-size: 1.5rem;
  border: 0 none;
  overflow: hidden;
  background-color: #fff;

  &::placeholder {
    color: #666;
  }
`

export const QuickSearch: FC<Props> = ({ handleChange, placeholder }) => {
  const inputRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  })
  return (
    <section>
      <SearchForm>
        <SearchLegend>Find a location</SearchLegend>
        <SearchLabel htmlFor="search-input">Pick up a location</SearchLabel>
        <SearchInput
          onChange={(e: React.ChangeEvent<any>) => {
            handleChange && handleChange(e)
          }}
          placeholder={placeholder}
          name="search-input"
          id="search-input"
          className="search__input"
          type="text"
          ref={inputRef as React.RefObject<HTMLInputElement>}
        />
      </SearchForm>
    </section>
  )
}
