import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  const categories = [
    { id: 1, name: "PIZZA", icon: "pizza-outline", active: true },
    { id: 2, name: "BURGER", icon: "fast-food-outline" },
    { id: 3, name: "DRINK", icon: "wine-outline" },
    { id: 4, name: "RICE", icon: "restaurant-outline" },
  ];

  const popularItems = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      image: require("../assets/pizza.jpg"),
      rating: 4.8,
      reviews: 120,
      price: 15.99,
    },
    {
      id: 2,
      name: "Classic Burger",
      image: require("../assets/burger.png"),
      rating: 4.6,
      reviews: 98,
      price: 12.99,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.headerContainer}>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.locationLabel}>Your Location</Text>
              <View style={styles.locationRow}>
                <Icon name="location-outline" size={16} color="#5D3EBC" />
                <Text style={styles.locationText}>Savar, Dhaka</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <View style={styles.notificationBadge} />
            <Icon name="notifications-outline" size={24} color="#1a1a1a" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Icon
              name="search-outline"
              size={20}
              color="#fff"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search your food"
              style={styles.searchInput}
              placeholderTextColor="#fff"
            />
            <TouchableOpacity style={styles.filterButton}>
              <Icon name="options-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                category.active && styles.activeCategoryButton,
              ]}
            >
              <View
                style={[
                  styles.categoryIconContainer,
                  category.active && styles.activeCategoryIcon,
                ]}
              >
                <Icon
                  name={category.icon}
                  size={24}
                  color={category.active ? "#fff" : "#1a1a1a"}
                />
              </View>
              <Text
                style={[
                  styles.categoryText,
                  category.active && styles.activeCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.promoContainer}>
          <View style={styles.promoContent}>
            <View style={styles.promoDetails}>
              <View style={styles.promoTitleContainer}>
                <Text style={styles.promoTitle}>BURGER</Text>
                <View style={styles.promoDiscount}>
                  <Text style={styles.promoDiscountText}>10% OFF</Text>
                </View>
              </View>
              <Text style={styles.promoSubtitle}>Today's Hot Offer</Text>
              <View style={styles.promoRating}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.promoRatingText}>4.9 (5+ Rating)</Text>
              </View>
              <TouchableOpacity style={styles.orderNowButton}>
                <Text style={styles.orderNowText}>Order Now</Text>
                <Icon name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/burger.png")}
              style={styles.promoImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <Icon name="chevron-forward" size={16} color="#5D3EBC" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularItemsContainer}
          contentContainerStyle={styles.popularItemsContent}
        >
          {popularItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.popularItemCard}>
              <Image
                source={item.image}
                style={styles.popularItemImage}
                resizeMode="cover"
              />
              <View style={styles.popularItemDetails}>
                <Text style={styles.popularItemName}>{item.name}</Text>
                <View style={styles.popularItemRating}>
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.reviewsText}>
                    ({item.reviews} reviews)
                  </Text>
                </View>
                <View style={styles.popularItemBottom}>
                  <Text style={styles.popularItemPrice}>${item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Icon name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#5D3EBC",
  },
  locationLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginLeft: 4,
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5D3EBC",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
    color: "#fff",
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 10,
    color: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: "center",
  },
  activeCategoryButton: {
    opacity: 1,
  },
  categoryIconContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 15,
    marginBottom: 8,
  },
  activeCategoryIcon: {
    backgroundColor: "#4CD964",
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#000",
  },
  promoContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  promoDetails: {
    flex: 1,
  },
  promoTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  promoSubtitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },
  promoRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  promoRatingText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
  },
  promoDiscount: {
    backgroundColor: "#5D3EBC",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  promoDiscountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  promoImage: {
    width: 120,
    height: 120,
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "#666",
  },
  popularItemsContainer: {
    paddingLeft: 15,
  },
  popularItemCard: {
    marginRight: 15,
    alignItems: "center",
  },
  popularItemImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  popularItemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default HomeScreen;
