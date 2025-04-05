// src/screens/ProductDetailScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProductDetailScreen = ({ navigation, route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="share-social-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageSection}>
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="contain"
          />
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <View style={styles.titleRow}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productSize}>{product.size}</Text>

          {/* Quantity and Price */}
          <View style={styles.quantityRow}>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Icon name="remove" size={20} color="#333" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => setQuantity(quantity + 1)}
              >
                <Icon name="add" size={20} color="#333" />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${product.price}</Text>
          </View>

          {/* Product Detail */}
          <View style={styles.detailSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Product Detail</Text>
              <Icon name="chevron-down" size={24} color="#333" />
            </View>
            <Text style={styles.detailText}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples
              May Be Good For Your Heart. As Part Of A Healthful And Varied
              Diet.
            </Text>
          </View>

          {/* Nutritions */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionBadge}>
              <Text style={styles.nutritionText}>100gr</Text>
              <Icon name="chevron-forward" size={24} color="#333" />
            </View>
          </View>

          {/* Review */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.reviewRow}>
              <View style={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="star" size={20} color="#F3603F" />
                ))}
              </View>
              <Icon name="chevron-forward" size={24} color="#333" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add to Basket Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  imageSection: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "80%",
    height: "80%",
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#4CAF50",
    width: 20,
  },
  infoSection: {
    padding: 20,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  productSize: {
    fontSize: 16,
    color: "#999",
    marginBottom: 20,
  },
  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 8,
  },
  quantityButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    color: "#333",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  detailSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  detailText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
    marginTop: 10,
  },
  nutritionBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  nutritionText: {
    fontSize: 14,
    color: "#333",
    marginRight: 8,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    marginRight: 8,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProductDetailScreen;
