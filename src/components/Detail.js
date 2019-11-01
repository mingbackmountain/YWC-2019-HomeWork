import React from 'react'
import styled from '@emotion/styled'
import {browserSizeRule} from '../utils/style'

const DetailContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;

  h1 {
    color: #e6332a;
    font-size: 1.5rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .no-wrap {
    white-space: nowrap;
  }

  ${browserSizeRule.largePhone} {
    div {
      font-size: 0.875rem;
    }
  }
  ${browserSizeRule.tablet} {
    max-width: 83.3%;
    h1 {
      font-size: 2.25rem;
      line-height: 1.8;
    }

    div {
      font-size: 1.125rem;
    }
`

export default ({detail}) => {
    return(
        <DetailContainer>
           <h1>
                มาตรการส่งเสริมการบริโภค
                <br />
                ในประเทศ <span className='no-wrap'>“ชิมช้อปใช้”</span>
           </h1>
            <div>
              <div dangerouslySetInnerHTML={{ __html: detail }} />
            </div>
        </DetailContainer>
    )
}