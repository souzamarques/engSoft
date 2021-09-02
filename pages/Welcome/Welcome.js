import * as React from 'react';
import { Button, View, Text } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#008000",
          textTransform: "uppercase",
        }}
      >
        Bem-vindo!
      </Text>
      
      <Button
        title="Continuar"
        color="#841584"
        onPress = {() => navigation.navigate('Signin')}
      />
    </View>
  );
}

export default Welcome;