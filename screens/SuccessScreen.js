import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

// Thêm navigation prop vào function parameters
const SuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.successContainer}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        {/* Thêm hàm navigation.goBack() vào sự kiện onPress */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Success Illustration */}
      <View style={styles.successContent}>
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../assets/acc.jpg")}
            style={styles.successImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
        <Text style={styles.successDesc}>
          We will send order details and invoice in your contact no. and
          registered email
        </Text>

        <TouchableOpacity style={styles.checkDetailsButton}>
          <Text style={styles.checkDetailsText}>Check Details</Text>
          <Ionicons name="arrow-forward" size={16} color="#5B5BD6" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
