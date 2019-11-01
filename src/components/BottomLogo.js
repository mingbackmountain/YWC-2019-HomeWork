import React from 'react'
import styled from '@emotion/styled'

import CGD from '../assets/bottomlogo/CGD.png'
import FPO from '../assets/bottomlogo/FPO.png'
import Krungthai from '../assets/bottomlogo/Krungthai.png'
import MOF from '../assets/bottomlogo/MOF.png'
import MOTS from '../assets/bottomlogo/MOTS.png'
import TAT from '../assets/bottomlogo/TAT.png'
import {browserSizeRule} from '../utils/style'

const BottomLogoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    margin-bottom: 80px;

    img {
        justify-self: center;
        width: 56px;

        :hover {
            transform: scale(1.2);
          }
    }

    ${browserSizeRule.largePhone} {
        grid-template-columns: repeat(6, 1fr);
        margin-left: 30px;
        margin-right: 30px;
        img {
          width: 100%;
        }
      }
      ${browserSizeRule.largeTablet} {
        grid-gap: 30px;
        img {
          width: 102px;
        }
      }
`

export default () => {
    return(
        <BottomLogoContainer>
            <img src={CGD} alt='logo' />
            <img src={FPO} alt='logo' />
            <img src={Krungthai} alt='logo' />
            <img src={MOF} alt='logo' />
            <img src={MOTS} alt='logo' />
            <img src={TAT} alt='logo' />
        </BottomLogoContainer>
    )
}