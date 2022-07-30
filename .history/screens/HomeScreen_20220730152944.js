import { View, Text, SafeAreaView, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect( ()=>{
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <SafeAreaView>
      <Text className='text-red-500'>
        {/* Header */}
        <view>
            <Image
                source={{
                    url:'https://links.papareact.com/wru'
                }}
            />
        </view>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen