import { View, Text, SafeAreaView } from 'react-native'
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
    <View>
      <Text className='text-red-500'>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen