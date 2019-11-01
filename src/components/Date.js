import React from 'react'
import styled from '@emotion/styled'
import {browserSizeRule} from '../utils/style'


const DateContainer = styled.div`
        text-align:center;
        margin-top: 35px;
        margin-bottom: 10px;

        > h1 {
            margin: 0;
            font-size:1rem;
        }
`

const DateContent = styled.p`
    font-size: 1.875rem;
    color: #e6332a;
    font-weight: bold;
    margin-top: -10px;
    margin-bottom: 0;

    ${browserSizeRule.tablet} {
        font-size: 3rem;
    }
`

export default ({duration}) => {
    return(
        <DateContainer>
            <h1>ตั้งแต่วันที่</h1>
            <DateContent>{duration}</DateContent>
        </DateContainer>
    )
}