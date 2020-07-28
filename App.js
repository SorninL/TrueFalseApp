import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './Shared/Routes'

export default function App() {
  return (
    <Routes/>
  );
}
AppRegistry.registerComponent('App', () => App)

