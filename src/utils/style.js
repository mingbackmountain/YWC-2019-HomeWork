export const browserSizes = {
  laptop: 1200,
  largeTablet: 992,
  tablet: 768,
  largePhone: 578,
  mobile: 320,
}

export const browserSizeRule = Object.keys(browserSizes).reduce((acc,size) => {
    const mediaQuery = {}
    const currentSize = browserSizes[size]

    mediaQuery[size] = `@media screen and (min-width: ${currentSize}px)`

    return {...acc,...mediaQuery}
},{}) 