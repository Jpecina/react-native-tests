import React from "react";
import { AppRegistry, View } from "react-native";
import HeaderComponent from "./src/Components/HeaderComponent";
import AlbumListComponent from "./src/Components/AlbumListComponent";

const App = () => {
  return (
    <View>
      <HeaderComponent headerTitle={"Albums!"} />
      <AlbumListComponent />
    </View>
  );
};
AppRegistry.registerComponent("albums", () => App);
