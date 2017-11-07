import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  search: {
    marginTop: 0,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center'
  },
  scrollBar: {
    marginTop: 5,
    height: 150,
    marginLeft: 5,
    marginRight: 5
  }
});

export default class SearchMovie extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      searchMoive: "",
      resultMovies: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.ApiCall = this.ApiCall.bind(this);
    this.DisplayMoives = this.DisplayMoives.bind(this);
  }

  handleInputChange(movie){
    this.setState({searchMoive: movie})
  }

  ApiCall(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query='+this.state.searchMoive).then(response => {
      const data = response.json();
      return Promise.all([data]);
    })
    .then((res) => {
      this.setState({resultMovies: res[0].results})
    })
  }

  DisplayMoives(){
    movieLists = (this.state.resultMovies).map((movie) =>
      <Text key={movie.id} >{movie.title}</Text>
    );
    return (movieLists);
  }


  render() {
    return (
      <View>
        <View>
          <TextInput name="searchMoive" placeholder="Movie"  style={styles.search} onChangeText={this.handleInputChange} onSubmitEditing={this.ApiCall}/>
        </View>
        <View style={styles.scrollBar}>
          <ScrollView>{this.DisplayMoives()}</ScrollView>
        </View>
      </View>
    );
  }
}
