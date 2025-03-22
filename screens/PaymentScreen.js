import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "../styles/styles.js";

const PaymentScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("5261 2281 0310 2410");
  const [cardholderName, setCardholderName] = useState("Nguyen Hai Duong");
  const [expiryDate, setExpiryDate] = useState("01 / 2029");
  const [cvv, setCvv] = useState("915");
  const [selectedMethod, setSelectedMethod] = useState("card"); // Default: Credit Card

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <StatusBar barStyle="dark-content" />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Checkout Title */}
        <View style={styles.checkoutHeader}>
          <Text style={styles.checkoutTitle}>Checkout 🏦</Text>
          <Text style={styles.priceText}>₹ 1,527</Text>
          <Text style={styles.includingText}>Including GST (18%)</Text>
        </View>

        {/* Payment Method Selection */}
        <View style={styles.paymentMethodContainer}>
          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              selectedMethod === "card" && styles.activePaymentMethod,
            ]}
            onPress={() => setSelectedMethod("card")}
          >
            <Ionicons
              name="card"
              size={18}
              color={selectedMethod === "card" ? "#fff" : "#333"}
            />
            <Text style={styles.paymentMethodText}>Credit card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              selectedMethod === "apple" && styles.activePaymentMethod,
            ]}
            onPress={() => setSelectedMethod("apple")}
          >
            <FontAwesome
              name="apple"
              size={18}
              color={selectedMethod === "apple" ? "#fff" : "#333"}
            />
            <Text style={styles.paymentMethodText}>Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Card Details Form - Chỉ hiển thị nếu chọn Credit Card */}
        {selectedMethod === "card" && (
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Card number</Text>
            <View style={styles.cardInput}>
              <TextInput
                style={styles.textInput}
                value={cardNumber}
                keyboardType="numeric"
                onChangeText={setCardNumber}
              />
              <Ionicons name="card-outline" size={20} color="#777" />
            </View>

            <Text style={styles.inputLabel}>Cardholder name</Text>
            <TextInput
              style={styles.textInput}
              value={cardholderName}
              onChangeText={setCardholderName}
            />

            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Text style={styles.inputLabel}>Expiry date</Text>
                <TextInput
                  style={styles.textInput}
                  value={expiryDate}
                  keyboardType="numeric"
                  onChangeText={setExpiryDate}
                />
              </View>
              <View style={styles.halfWidth}>
                <Text style={styles.inputLabel}>CVV / CVC</Text>
                <TextInput
                  style={styles.textInput}
                  value={cvv}
                  keyboardType="numeric"
                  secureTextEntry
                  onChangeText={setCvv}
                />
              </View>
            </View>
          </View>
        )}

        <View style={styles.noteContainer}>
          <Text style={styles.noteText}>
            We will send you an order details to your email after the successful
            payment.
          </Text>
        </View>

        {/* Pay Button */}
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            if (selectedMethod === "apple") {
              console.log("Apple Pay Clicked!");
              // Thêm tích hợp Apple Pay tại đây nếu cần
            } else {
              navigation.navigate("Success");
            }
          }}
        >
          <Ionicons name="lock-closed" size={16} color="#fff" />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </TouchableOpacity>

        <View style={styles.bottomIndicator} />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
