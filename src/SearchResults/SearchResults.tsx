import React, { FC } from 'react'

import { ResultList } from '../types'

import { Cards, Card } from '../Card'
import { Label } from '../Label'
import { getTypeLabel } from '../utilis/getTypeLabel'
import { Error } from '../Error'

interface Props {
  results: ResultList[]
}

export const SearchResults: FC<Props> = ({ results }) => {
  let placeType = [
    { name: 'C', value: 'City' },
    { name: 'A', value: 'Airport' },
    { name: 'T', value: 'Station' },
    { name: 'Z', value: 'Place' },
    { name: 'D', value: 'District' },
    { name: 'F', value: 'Region' },
  ]

  return (
    <>
      <h2 style={{ display: 'none' }}>Search Results</h2>

      <Cards>
        {results &&
          results.map((result) => {
            const displayPlaceType = placeType.find((item) =>
              item.name === result.placeType ? item.value : null
            )
            const typeLabel = getTypeLabel(displayPlaceType && displayPlaceType!.value)

            return result.name !== 'No results found' ? (
              <Card data-testid="result-list" key={result.ufi}>
                <Label variant={typeLabel}>{typeLabel}</Label>
                <div>
                  {' '}
                  {result.name}
                  <p>
                    {result.city && `${result.city},`} {result.country}
                  </p>
                </div>
              </Card>
            ) : (
              <Error>{result.name}</Error>
            )
          })}
      </Cards>
    </>
  )
}
