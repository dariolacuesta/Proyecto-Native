import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
} from "react-native";
import colors from "../constants/colors";
const styles = StyleSheet.create({
  MainText: {
    fontSize: 20,
    alignItems: "center",
    padding: 10,
    color: colors.white,
    fontFamily: "Roboto-Black",
  },
  MainText2: {
    fontSize: 18,
    alignItems: "center",
    padding: 10,
    color: colors.white,
    fontFamily: "Roboto-Black",
  },
  input: {
    borderRadius: 5,
    width: 150,
    backgroundColor: colors.white,
    marginBottom: 20,
    paddingLeft: 5,
    underlineColorAndroid: "transparent",
  },
  screen: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 20,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const WelcomePageJs = ({ setNameState }) => {
  const [nameInput, setNameInput] = useState("");
  const setName = () => {
    setNameState(nameInput);
    setNameInput("");
    Keyboard.dismiss();
  };
  const onHandleChangeText = (e) => {
    setNameInput(e);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.MainText}>Bienvenido</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.MainText2}>Ingrese su nombre</Text>
        <TextInput
          style={styles.input}
          keyboardType="visible-password"
          selectionColor={colors.white}
          placeholderTextColor={colors.white}
          value={nameInput}
          onChangeText={onHandleChangeText}
        />
        <View>
          <Button
            style={styles.button}
            color={colors.green}
            title="Aceptar"
            onPress={() => setName()}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default WelcomePageJs;
