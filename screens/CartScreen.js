import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: "Classic Burger",
      price: 28,
      quantity: 1,
      image: require("../assets/burger.png"),
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 32,
      quantity: 2,
      image: require("../assets/pizza.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Cart</Text>
          <TouchableOpacity style={styles.clearButton}>
            <Icon name="trash-outline" size={22} color="#ff4d4d" />
          </TouchableOpacity>
        </View>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItemContainer}>
            <Image
              source={item.image}
              style={styles.cartItemImage}
              resizeMode="contain"
            />
            <View style={styles.cartItemDetails}>
              <View style={styles.cartItemTop}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <TouchableOpacity>
                  <Icon name="close-circle" size={24} color="#ccc" />
                </TouchableOpacity>
              </View>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icon name="remove" size={20} color="#5D3EBC" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icon name="add" size={20} color="#5D3EBC" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.deliverySection}>
          <View style={styles.sectionHeader}>
            <Icon name="location-outline" size={24} color="#5D3EBC" />
            <Text style={styles.sectionTitle}>Delivery Address</Text>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Home</Text>
            <Text style={styles.addressDetails}>
              123 Main Street, Dhaka, Bangladesh
            </Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paymentSection}>
          <View style={styles.sectionHeader}>
            <Icon name="card-outline" size={24} color="#5D3EBC" />
            <Text style={styles.sectionTitle}>Payment Method</Text>
          </View>
          <View style={styles.paymentContainer}>
            <View style={styles.paymentMethod}>
              <Icon name="card" size={24} color="#5D3EBC" />
              <Text style={styles.paymentText}>•••• 4242</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$92.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$5.00</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$97.00</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <View style={styles.checkoutPrice}>
            <Text style={styles.checkoutPriceText}>$97.00</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  clearButton: {
    padding: 8,
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  cartItemPrice: {
    fontSize: 16,
    color: "#5D3EBC",
    fontWeight: "600",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: "#f0ebff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 15,
    color: "#1a1a1a",
  },
  deliverySection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginLeft: 10,
  },
  addressContainer: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addressText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 5,
  },
  addressDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  paymentSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  paymentContainer: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
    color: "#1a1a1a",
  },
  changeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#f0ebff",
    borderRadius: 8,
  },
  changeButtonText: {
    color: "#5D3EBC",
    fontSize: 14,
    fontWeight: "600",
  },
  summaryContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#666",
  },
  summaryValue: {
    fontSize: 14,
    color: "#1a1a1a",
    fontWeight: "500",
  },
  summaryDivider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  totalValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D3EBC",
  },
  checkoutButton: {
    backgroundColor: "#5D3EBC",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#5D3EBC",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  checkoutPrice: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  checkoutPriceText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CartScreen;
