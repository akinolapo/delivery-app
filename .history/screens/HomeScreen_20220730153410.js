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
                    url:'https://Links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300'
                />
        </view>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen