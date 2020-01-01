import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.heading} h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input label="Email"/>
      <Spacer  />
      <Input label="Password"/>
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
    );
  };

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  heading: {
    textAlign: 'center'
  }
});

export default SignupScreen;
