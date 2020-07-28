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

class Home extends React.Component {
  changeText = () => {
    if (this.state.superText === "Mon Super Text") {
      this.setState({
        superText : "Mon second Text Woaw"
      })
    } else {
      this.setState({
        superText : "Mon Super Text"
      })
    }
  }
  changeView = () => {
    Actions.game();
  }
  constructor(props) {
    super(props);

    this.state = {
      render: <View style={styleSheet.view}>
                <Button title="Play" />
                <Divider style={{ backgroundColor: '#363636'}}/>
            </View>,
      superText: "Mon Super Text"
    };



  }
  render() {
    return (
      <View>
        <Button title={this.state.superText} onPress={this.changeText}/>
        <Button title="Go to real Game" onPress={this.changeText}/>
      </View>
    )
  }
}



export default Home;
