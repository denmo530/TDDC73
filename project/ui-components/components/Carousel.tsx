import React from "react";
import { useRef, useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  images: any[];
  height: number;
  width: number;
};

const MAX_WIDTH = Dimensions.get("screen").width;

const Carousel: React.FC<Props> = ({ images, height, width }) => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);

  const animationHandlerLeft = () => {
    let newCurrentImage = 1;
    if (currentImage == 0) {
      newCurrentImage = images.length - 1;
    } else {
      newCurrentImage = currentImage - 1;
    }

    Animated.spring(animation.current, {
      toValue: -(Dimensions.get("screen").width * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };
  const animationHandlerRight = () => {
    let newCurrentImage = currentImage + 1;
    if (newCurrentImage >= images.length) newCurrentImage = 0;

    Animated.spring(animation.current, {
      toValue: -(Dimensions.get("screen").width * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
    <React.Fragment>
      <View>
        <Animated.View
          style={[
            styles.animContainer,
            { transform: [{ translateX: animation.current }] },
          ]}
        >
          {images.map((image, index) => (
            <ImageBackground
              resizeMode="cover"
              style={[
                styles.selectionStyle,
                styles.image,
                {
                  height: height || 500,
                  width: width || Dimensions.get("screen").width,
                },
              ]}
              source={image.image}
              key={index}
            >
              <TouchableOpacity onPress={animationHandlerLeft}>
                <AntDesign name="left" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={animationHandlerRight}>
                <AntDesign name="right" size={24} color="white" />
              </TouchableOpacity>
            </ImageBackground>
          ))}
        </Animated.View>
        <View style={styles.indicatorsContainer}>
          {images.map((image: any, index: number) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentImage ? styles.indicatorActive : null,
              ]}
            />
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {},
  animContainer: {
    flexDirection: "row",
  },
  selectionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    zIndex: 2,
    width: MAX_WIDTH,
  },
  indicator: {
    borderRadius: 5,
    width: 10,
    height: 10,
    borderColor: "white",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: "white",
  },
});

export default Carousel;
