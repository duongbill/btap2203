import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CategoryCard = ({ category, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductScreen", { categoryName: category.name })
      }
      style={[styles.card, { backgroundColor: category.backgroundColor }]}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.categoryName}>{category.name}</Text>
        {category.image && (
          <Image
            source={category.image}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default CategoryCard;
