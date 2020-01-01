import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>SignupScreen</Text>
      <Button
        uppercase={false}
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        uppercase={false}
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </>
    );
  };

const styles = StyleSheet.create({});

export default SignupScreen;
