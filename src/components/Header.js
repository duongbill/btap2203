import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Logo and Location */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/carrot-icon.png")}
          style={styles.logo}
        />
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={20} color="#4CAF50" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#999"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  topSection: {
    alignItems: "center",
    marginBottom: 15,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default Header;
