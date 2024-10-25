import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

const Home = () => {
 
  return (
<SafeAreaView>
  <View>
    <Text style={styles.text}>Sign in</Text>
  </View>
</SafeAreaView>
  )
}
const styles=StyleSheet.create({
  text:{
    height:30
  }
})


export default Home