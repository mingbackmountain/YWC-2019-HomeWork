import React from 'react'
import styled from '@emotion/styled'
import {browserSizeRule} from '../utils/style'

const ConditionContainer = styled.div`
  margin-bottom: 80px;
  h1 {
    font-size: 1rem;
  }
  ${browserSizeRule.largePhone} {
    h1,
    div {
      font-size: 0.875rem;
    }
  }
  ${browserSizeRule.tablet} {
    max-width: 83.3%;
    h1,
    div {
      font-size: 1.125rem;
    }
  }
`
export default ({condition}) => {
  return(
    <ConditionContainer>
      <h1>เงื่อนไขการเข้าร่วมมาตรการ</h1>
      <div dangerouslySetInnerHTML={{ __html: condition }} />
    </ConditionContainer>
  )
}