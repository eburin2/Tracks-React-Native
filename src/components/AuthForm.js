import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <Spacer>
        <Text style={styles.heading} h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer  />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password})} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginTop: 10
  },
  heading: {
    textAlign: 'center'
  }
});

export default AuthForm;
