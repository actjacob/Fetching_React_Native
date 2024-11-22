import { Image } from 'react-native'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Image
    style={{ width: 45, height: 45 }}
    source={require('../../assets/logo.png')}
  />
  )
}

export default HeaderLogo