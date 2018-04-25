import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import axios from "axios";

class AlbumListComponent extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }
  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbumListComponent;
