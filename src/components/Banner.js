import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require("../assets/images/banner.png")}
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.bannerTitle}></Text>
        <Text style={styles.bannerSubtitle}></Text>
      </View>
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    height: 115,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F8F8F8",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: "#4CAF50",
  },
  dotsContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E2E2",
    marginRight: 5,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },
});

export default Banner;
