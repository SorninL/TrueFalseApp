import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
const styleSheet = new StyleSheet.create({
  view: {
    width: '100%'
  }
})

class Game extends React.Component {
  changeText = () => {
    if (this.state.superText === "Vrai") {
      this.setState({
        superText : "FAUX !"
      })
    } else {
      this.setState({
        superText : "Vrai"
      })
    }
  }
  changeView = () => {
    Actions.home();
  }
  constructor(props) {
    super(props);

    this.state = {
      render: <View style={styleSheet.view}>
        <Button title="Game !" />
        <Divider style={{ backgroundColor: '#363636'}}/>
      </View>,
      superText: "Vrai"
    };



  }
  render() {
    return (
      <View>
        <Button title={this.state.superText} onPress={this.changeText}/>
        <Button title="Go to real Home" onPress={this.changeText}/>
      </View>
    )
  }
}



export default Game;
