import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { compose, variant } from 'styled-system'

export type LabelProps = {
  /** Color variant */
  variant?: keyof typeof variants
}

const variants = {
  City: {
    backgroundColor: '#0a63b0',
  },
  Station: {
    backgroundColor: '#494949',
  },
  Airport: {
    backgroundColor: '#961412',
  },
  Place: {
    backgroundColor: '#ff9a02',
  },
  District: {
    backgroundColor: '#017c44',
  },
  Region: {
    backgroundColor: '#ff9a02',
    color: '#222 !important',
  },
}

const LabelWrapper = styled.div<LabelProps>(
  () => css`
    padding: 0.4rem 0.6rem;
    font-weight: 700;
    min-width: 7rem;
    color: #fff !important;
    font-size: 1.2rem !important;
    text-align: center;
    border-radius: 0.2rem;
    align-self: flex-start;
  `,
  compose(variant({ variants }))
)

export const Label: FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <LabelWrapper {...rest}>
      <span>{children}</span>
    </LabelWrapper>
  )
}
