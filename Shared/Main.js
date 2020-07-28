import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
const styleSheet = new StyleSheet.create({
  view : {
    width: '100%',
    height: '100%'
  }
})

class Home extends React.Component {
  changeView = (view) => {
    this.setState({
      currentView : view
    })
  }
  constructor(props) {
    super(props);

    this.state = {
      currentView : <Home/>
    };
  }
  render() {
    return (
      <View style={styleSheet.view}>
        {this.state.currentView}
      </View>
    )
  }
}
export default Home;
