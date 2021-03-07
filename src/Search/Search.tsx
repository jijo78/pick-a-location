import React, { FC, useState } from 'react'

import styled from 'styled-components'

import useSWR from 'swr'
import { QuickSearch } from '../QuickSearch'
import { SearchResults } from '../SearchResults'
import debounce from 'lodash.debounce'

import { fetchData } from '../utilis/fetchData'

interface Props {
  children?: React.ReactChildren
}

const Container = styled('section')`
  position: relative;
`

const Main = styled('main')`
  margin: 0 auto;
  max-width: 60rem;
  padding: 6rem;
  background-color: #eece6a;
`
export const Search: FC<Props> = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const [term, setTerm] = useState('')
  const [validating, setIsValidating] = useState(false)

  const { data, error, isValidating } = useSWR(
    shouldFetch
      ? `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=${term}`
      : null,
    fetchData,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  )

  const handleChange = debounce((e: React.ChangeEvent<any>): void => {
    const term = e.target.value

    if (term === '' || term.length <= 1) {
      setTerm('')
      setShouldFetch(false)
    }
    if (term.length >= 2) {
      setTerm(term)
      setShouldFetch(true)
    }
  }, 200)

  return (
    <>
      <a href="https://www.rentalcars.com/" data-testid="brand-logo" rel="">
        <img
          src="https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg"
          alt="Rentalcars.com Brand Logo"
        />
      </a>
      <Main>
        <div>
          <h2>Where are you going?</h2>

          <QuickSearch
            placeholder="city, airport, station, region and district..."
            handleChange={handleChange}
          />

          <Container as="section">
            {isValidating ? 'Loading...' : <SearchResults results={data && data.results.docs} />}
          </Container>
        </div>
      </Main>
    </>
  )
}
