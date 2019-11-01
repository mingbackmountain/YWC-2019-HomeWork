import React from 'react'
import styled from '@emotion/styled'
import KTBlogo from '../assets/bottombanner/Banner_KTB_SQ.png'
import CGDlogo from '../assets/bottombanner/Banner_CGD_Sq.png'
import Hotline from '../assets/bottombanner/Banner_TAT_Hotline_Sq.png'
import {browserSizeRule} from '../utils/style'

const BottomBannerContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    padding: 0 15px;
    margin-bottom: 80px;

    img {
        width: 80%;
    }

    ${browserSizeRule.largePhone} {
        img {
          max-width: 510px;
        }
      }
    ${browserSizeRule.tablet} {
        flex-flow: nowrap;
        img {
          max-width: 210px;
          max-height: 210px;
          padding: 0 15px;
        }
      }
    ${browserSizeRule.largeTablet} {
        justify-content: space-between;
        img {
          flex: 0 0 calc(100% / 3);
          max-width: calc(100% / 3);
          max-height: none;
          padding: 0;
      }
`
export default () => {
    return(
        <BottomBannerContainer>
            <img src={KTBlogo} alt="KTB call center"/>
            <img src={CGDlogo} alt="กรมบัญชีกลาง"/>
            <img src={Hotline} alt='Tourist Hotline 1672'/>
        </BottomBannerContainer>
    )

}
