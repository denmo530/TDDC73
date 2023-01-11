import React from "react";
import { useEffect, useState, useRef } from "react";
import { StyleSheet, TextInput, View, Animated, Text } from "react-native";

type Props = {
  indicatorLabels: string[];
  passwordRegexChecks: RegExp[];
  password: string;
  setPassword: Function;
  colors: string[];
};

const passwordIndicator: React.FC<Props> = ({
  password,
  setPassword,
  indicatorLabels,
  passwordRegexChecks,
  colors,
}) => {
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barColor, setBarColor] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [error, setError] = useState<string>();

  // Ref for the animated progress bar
  const strengthMeterAnimation = useRef(new Animated.Value(0));
  const animateProgress = () => {
    Animated.timing(strengthMeterAnimation.current, {
      toValue: barWidth,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateProgress();
    return () => {};
  }, [barWidth]);

  const passwordStrengthCalc = (password: string) => {
    let score = 0;

    passwordRegexChecks.forEach((regex, i) => {
      if (new RegExp(regex).test(password)) score += 1;
    });

    setBarWidth((score * 100) / passwordRegexChecks.length);
    setLabel(indicatorLabels[score - 1]);
    setBarColor(colors[score - 1]);
  };

  useEffect(() => {
    passwordStrengthCalc(password);
  }, [password]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        autoComplete="password"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <View style={styles.indicatorContainer}>
        <Animated.View
          style={[
            {
              backgroundColor: barColor,
              height: 5,
            },
            {
              width: strengthMeterAnimation.current.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
                extrapolate: "clamp",
              }),
            },
          ]}
        />
      </View>
      <Text>{barWidth > 0 && label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 7,
    width: 230,
    height: 30,
    padding: 2,
  },
  indicatorContainer: {
    borderRadius: 7,
    marginTop: 5,
    width: 230,
    backgroundColor: "#5f5e5e",
  },
  indicatorBar: {
    height: 5,
    backgroundColor: "red",
  },
});

export default passwordIndicator;
