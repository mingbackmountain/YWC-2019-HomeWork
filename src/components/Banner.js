import React from 'react'
import styled from '@emotion/styled'
import LeftBanner from '../assets/banner/banner-left.png'
import RightBanner from '../assets/banner/banner-right.png'
import CenterBanner from '../assets/banner/banner-center.png'
import LogoBanner from '../assets/banner/banner-logo.png'

const BannerMain = styled.div`
    display:flex;
    width:100%;
    height:220px;
`

const ImageContainer = styled.div`
    display:flex;
    flex: 0 0 calc(100% / 3);
    justify-content:center;
    align-items:center;
    ${props => `
        background: url(${props.imageSrc}) no-repeat center ;
        background-size:cover;
    `}

    img {
        width:110px;
    }
`

export default () => {
    return (
        <BannerMain>
            {/* <ImageContainer imageSrc={LeftBanner} />
            <ImageContainer imageSrc={CenterBanner}>
                <img src={LogoBanner} alt="banner"/>
            </ImageContainer> */}
            <ImageContainer imageSrc={RightBanner} />
        </BannerMain>
    )
}