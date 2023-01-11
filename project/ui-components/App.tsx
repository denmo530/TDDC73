import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import Carousel from "./components/Carousel";
import PasswordIndicator from "./components/PasswordIndicator";

const App: React.FC = () => {
  // Array for carousel:
  //  -Images in an array
  const images = [
    { image: require("./assets/images/cat1.jpeg") },
    { image: require("./assets/images/cat2.jpeg") },
    { image: require("./assets/images/cat3.jpeg") },
    { image: require("./assets/images/cat4.jpeg") },
    { image: require("./assets/images/cat5.jpeg") },
  ];

  // State for password indicator:
  //  -Password of type string
  //  -Labels an array of labels used for strenght indication
  const passwordRegexChecks = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
  const colors = ["red", "orange", "yellow", "green"];
  const [password, setPassword] = useState<string>("");
  const indicatorLabels = ["Very Weak", "Weak", "Fair", "Good"];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text>Carousel component </Text>
        <Carousel images={images} />
        <Text>Password strength indicator</Text>
        <PasswordIndicator
          indicatorLabels={indicatorLabels}
          password={password}
          setPassword={setPassword}
          passwordRegexChecks={passwordRegexChecks}
          colors={colors}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
