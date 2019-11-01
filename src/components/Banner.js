import React from 'react'
import styled from '@emotion/styled'
import LeftBanner from '../assets/banner/banner-left.png'
import RightBanner from '../assets/banner/banner-right.png'
import CenterBanner from '../assets/banner/banner-center.png'
import LogoBanner from '../assets/banner/banner-logo.png'
import {browserSizeRule} from '../utils/style'

const BannerMain = styled.div`
    width:100%;
    display:flex;
    height:220px;
    padding-top:68px;

    ${browserSizeRule.largePhone} {
        height: 242px;
        padding-top: 63px;
    }
    ${browserSizeRule.tablet} {
        height: 350px;
    }
`

const ImageContainer = styled.div`
    display:flex;
    flex: 0 0 calc(100% / 3);
    justify-content:center;
    align-items:center;
    ${props => `
        background: url(${props.imageSrc}) no-repeat center;
        background-size:cover;
    `}

    img {
        width:110px;
        
        ${browserSizeRule.largePhone} {
            width: 146px;
            height: 173px;
          }
         ${browserSizeRule.tablet} {
            width: 240px;
            height: auto;
          }

    }
`

export default () => {
    return (
        <BannerMain>
            <ImageContainer imageSrc={LeftBanner} />
            <ImageContainer imageSrc={CenterBanner}>
                <img src={LogoBanner} alt="banner"/>
            </ImageContainer>
            <ImageContainer imageSrc={RightBanner} />
        </BannerMain>
    )
}