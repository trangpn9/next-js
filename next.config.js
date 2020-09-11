const withImages = require('next-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
const path = require('path')

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {  
  en: 'en'  
}

module.exports = withFonts(
  withImages(withCSS({            
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },  
    webpack: config => {
      config.resolve.modules.push(path.resolve('./'))
  
      return config
    }   
  }))
)  
