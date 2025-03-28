import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { icon: "person-outline", text: "Edit Profile" },
    { icon: "card-outline", text: "Payment Methods" },
    { icon: "location-outline", text: "Saved Addresses" },
    { icon: "time-outline", text: "Order History" },
    { icon: "moon-outline", text: "Dark Mode" },
    { icon: "notifications-outline", text: "Notifications" },
    { icon: "settings-outline", text: "Settings" },
    { icon: "help-circle-outline", text: "Help Center" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Icon name="camera-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Rakibul Hasan</Text>
          <Text style={styles.profileEmail}>rakibul.hasan@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.lastMenuItem,
              ]}
              onPress={() => {
                if (item.text === "Dark Mode") {
                  setIsDarkMode(!isDarkMode);
                }
              }}
            >
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconContainer}>
                  <Icon name={item.icon} size={22} color="#5D3EBC" />
                </View>
                <Text style={styles.menuItemText}>{item.text}</Text>
              </View>
              {item.text === "Dark Mode" ? (
                <Switch
                  value={isDarkMode}
                  onValueChange={setIsDarkMode}
                  trackColor={{ false: "#e4e4e4", true: "#8b75d7" }}
                  thumbColor={isDarkMode ? "#5D3EBC" : "#f4f3f4"}
                />
              ) : (
                <Icon name="chevron-forward" size={20} color="#ccc" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Icon
            name="log-out-outline"
            size={22}
            color="#fff"
            style={styles.logoutIcon}
          />
          <Text style={styles.logoutText}>Log Out</Text>
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
  profileHeader: {
    alignItems: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#5D3EBC",
  },
  editImageButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#5D3EBC",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#eee",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5D3EBC",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  menuContainer: {
    backgroundColor: "#f8f9fa",
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#f0ebff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: "#1a1a1a",
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#5D3EBC",
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#5D3EBC",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
