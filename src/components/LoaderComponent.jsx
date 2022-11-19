import { View, Text } from 'react-native'
import React from 'react'
import { stylesG } from '../themes/globalTheme'
import { Image } from 'react-native'
export const LoaderComponent = () => {
  return (
    <View style={{ ...stylesG.container, justifyContent: 'center' }}>
      <Image source={require('../../assets/loading.gif')} />
    </View>
  )
}

export default LoaderComponent