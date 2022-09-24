import React, { useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Header from "./components/header";
import colors from "./constants/colors";
import WelcomePageJs from "./pages/welcomePage";
import NamePage from "./pages/namePage";

export default function App() {
  const [savedName, setSavedName] = useState("");
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const setNameState = (inputName) => {
    setSavedName(inputName);
  };

  const goBack = () => {
    setSavedName("");
  };
  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.black} />
      </View>
    );
  }
  const content = savedName ? (
    <NamePage name={savedName} goBack={goBack} />
  ) : (
    <WelcomePageJs name={savedName} setNameState={setNameState}></WelcomePageJs>
  );

  return (
    <View style={styles.container}>
      <Header title={"TaskApp"}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
