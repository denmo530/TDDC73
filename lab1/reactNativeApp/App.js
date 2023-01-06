/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';
import Button from './components/Button';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#19574A'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                padding: 15,
                fontSize: 20,
                color: 'white',
              }}>
              Example1
            </Text>
          </View>
          <View style={styles.main}>
            <Image source={require('./images/dog.jpeg')} style={styles.image} />
            <View style={styles.buttonContainer}>
              <Button />
              <Button />
              <Button />
              <Button />
            </View>
            <View style={styles.inputContainer}>
              <Text>Email</Text>
              <TextInput style={styles.inputField} defaultValue="Type here" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#2D8577',
  },
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    maxWidth: 250,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 50,
    width: '100%',
    margin: 10,
  },
  inputField: {
    flex: 1,
    maxWidth: '70%',
    marginLeft: 20,
    borderColor: '#cd1b60',
    borderBottomWidth: 1,
  },
});

export default App;
