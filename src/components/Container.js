import React from 'react'
import styled from '@emotion/styled'
import {browserSizeRule} from '../utils/style'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  ${browserSizeRule.largePhone} {
    max-width: 540px;
  }
  ${browserSizeRule.tablet} {
    max-width: 720px;
  }
  ${browserSizeRule.largeTablet} {
    max-width: 960px;
  }
  ${browserSizeRule.laptop} {
    max-width: 1140px;
  }
`
export default (props) => {
    return <Container>{props.children}</Container>
}
