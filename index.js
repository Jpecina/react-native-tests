import React from "react";
import { AppRegistry } from "react-native";
import HeaderComponent from "./src/Components/HeaderComponent";

const App = () => <HeaderComponent />;


AppRegistry.registerComponent("albums", () => App);
