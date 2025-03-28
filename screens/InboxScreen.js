import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const InboxScreen = () => {
  const messages = [
    {
      id: "1",
      title: "Order Confirmation",
      message: "Your order #123 has been confirmed",
      time: "2 min ago",
      read: false,
    },
    {
      id: "2",
      title: "Delivery Update",
      message: "Your order is on the way",
      time: "1 hour ago",
      read: true,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.messageItem, !item.read && styles.unreadMessage]}
    >
      <View style={styles.messageContent}>
        <Text style={styles.messageTitle}>{item.title}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.messageMeta}>
        <Text style={styles.messageTime}>{item.time}</Text>
        {!item.read && <View style={styles.unreadDot} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f2f3",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 15,
  },
  messageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f1f2f3",
  },
  unreadMessage: {
    backgroundColor: "#f8f9fa",
  },
  messageContent: {
    flex: 1,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 14,
    color: "#666",
  },
  messageMeta: {
    alignItems: "flex-end",
  },
  messageTime: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#007bff",
  },
});

export default InboxScreen;
