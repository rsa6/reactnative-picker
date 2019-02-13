import React from 'react';
import { StyleSheet, Text, View, Picker, Dimensions } from 'react-native';

export default class App extends React.Component {
  state = {
    position: 'whatever',
    language: 'whaterver',
    year: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', marginBottom: 20}}>
          <View style={{ backgroundColor: 'pink', ... styles.testBox }} />
          <View style={{ backgroundColor: 'skyblue', ... styles.testBox }} />
          <View style={{ backgroundColor: 'bisque', ... styles.testBox }} />
        </View>

        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={{ backgroundColor: 'pink', ... styles.testBox }} />
          <View style={{ backgroundColor: 'skyblue', ... styles.testBox }} />
          <View style={{ backgroundColor: 'bisque', ... styles.testBox }} />
        </View>

        <Text style={styles.h1}>Your Position is {this.state.position}</Text>
        <Text style={styles.h1}>Your Language is {this.state.language}</Text>
        <Text style={styles.h1}>Your Years is {this.state.year}</Text>

        <View style={{width: '100%', flexDirection: 'row'}}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.position}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({position: itemValue})
            }>
            <Picker.Item label="web" value="web" />
            <Picker.Item label="game" value="game" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.year}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({year: itemValue})
            }>
            <Picker.Item label="10" value="10 years" />
            <Picker.Item label="5" value="5 years" />
          </Picker>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 20,
  },

  testBox: {
    height: 40,
    width: Dimensions.get('window').width / 3,
  },

  picker: {
    height: 80, 
    width: 100,
    width: Dimensions.get('window').width / 3
  }
});
