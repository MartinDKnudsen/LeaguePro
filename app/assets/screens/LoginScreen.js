import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../Components/Screen";

import * as Yup from "yup";
import AppFormField from "../Components/forms/FormField";
import SubmitButton from "../Components/forms/SubmitButton";
import AppForm from "../Components/forms/Form";

//Validate with Yup - import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../Images/clipart2835634.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 250,
    height: 385,
    alignSelf: "center",
    marginTop: 50,
    marginLeft: 220
  },
});
