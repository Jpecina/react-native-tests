import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumListComponent extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
    this.renderAlbums = this.renderAlbums.bind(this);
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }
  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumListComponent;
