import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Button,Text, View,Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      display: true
    }
  };
  
  componentHideAndShow = () => {
    this.setState(previousState => ({ display: !previousState.display }))
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Interesting facts about me? </Text>
        <Text>I'm Nicole</Text>
        <Text>I can't swim</Text>
        <Text>I love baking</Text>
        <Text>I love travelling</Text>
        <Text>I vlog sometimes</Text>
        <StatusBar style="auto" />
        {this.state.display ? <Image style={{
              resizeMode: "contain",
              height: 100,
              width: 200
            }}
          source={{uri:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1000&q=80',}}
        /> : null}
        <TouchableOpacity
          title="Press me" style = {styles.button}
          onPress={this.componentHideAndShow}
        >
          <Text>Press Me </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderColor: '#89AAFF',
    borderWidth: 10,
    backgroundColor:'#89AAFF',
    marginTop:10
  },
});