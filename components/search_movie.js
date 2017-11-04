import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Text } from 'react-native';

const styles = StyleSheet.create({
  search: {
    marginTop: 0,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center'
  }
});

export default class SearchMovie extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      searchMoive: "",
      resultMovies: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.ApiCall = this.ApiCall.bind(this);
  }

  handleInputChange(movie){
    this.setState({searchMoive: movie})
  }

  ApiCall(){
    var text = "Naspter Da! - " + this.state.searchMoive
    this.setState({resultMovies: text})
  }

  render() {
    return (
      <View>
        <TextInput name="searchMoive" placeholder="Movie"  style={styles.search} onChangeText={this.handleInputChange} onSubmitEditing={this.ApiCall}/>
        <Text>{this.state.resultMovies}</Text>
      </View>
    );
  }
}
