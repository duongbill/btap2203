import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

const SelectLocationScreen = () => {
  const navigation = useNavigation();
  const [zoneOpen, setZoneOpen] = useState(false);
  const [zone, setZone] = useState(null);
  const [zones, setZones] = useState([
    { label: "Lào Cai", value: "laocai" },
    { label: "Hà Nội", value: "hanoi" },
    { label: "Hồ Chí Minh", value: "hcm" },
  ]);

  const [areaOpen, setAreaOpen] = useState(false);
  const [area, setArea] = useState(null);
  const [areas, setAreas] = useState([
    { label: "Bắc Cường", value: "bacthang" },
    { label: "Kim Tân", value: "trungtam" },
    { label: "Nam Cường", value: "namcung" },
  ]);

  const handleSubmit = () => {
    if (zone && area) {
      navigation.navigate("LogIn");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/illustration.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>
            Switch on your location to stay in tune with what's happening in
            your area
          </Text>
        </View>

        <View style={styles.dropdownContainer}>
          {/* Zone Dropdown */}
          <View style={styles.dropdownWrapper}>
            <Text style={styles.dropdownLabel}>Your Zone</Text>
            <DropDownPicker
              open={zoneOpen}
              value={zone}
              items={zones}
              setOpen={setZoneOpen}
              setValue={setZone}
              setItems={setZones}
              placeholder="Select your zone"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownList}
              textStyle={styles.dropdownText}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedItemContainerStyle={styles.selectedItem}
              listItemContainerStyle={styles.listItem}
              listItemLabelStyle={styles.listItemLabel}
              arrowIconStyle={styles.arrowIcon}
              showTickIcon={false}
              modalTitle="Select Zone"
              modalTitleStyle={styles.modalTitle}
              modalContentContainerStyle={styles.modalContent}
            />
          </View>

          {/* Area Dropdown */}
          <View style={styles.dropdownWrapper}>
            <Text style={styles.dropdownLabel}>Your Area</Text>
            <DropDownPicker
              open={areaOpen}
              value={area}
              items={areas}
              setOpen={setAreaOpen}
              setValue={setArea}
              setItems={setAreas}
              placeholder="Select your area"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownList}
              textStyle={styles.dropdownText}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedItemContainerStyle={styles.selectedItem}
              listItemContainerStyle={styles.listItem}
              listItemLabelStyle={styles.listItemLabel}
              arrowIconStyle={styles.arrowIcon}
              showTickIcon={false}
              modalTitle="Select Area"
              modalTitleStyle={styles.modalTitle}
              modalContentContainerStyle={styles.modalContent}
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.button, (!zone || !area) && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!zone || !area}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  dropdownContainer: {
    flex: 1,
    marginTop: 20,
  },
  dropdownWrapper: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#E0E0E0",
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 15,
    minHeight: 50,
  },
  dropdownList: {
    borderColor: "#E0E0E0",
    borderRadius: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownPlaceholder: {
    color: "#999",
    fontSize: 16,
  },
  selectedItem: {
    backgroundColor: "#F5F5F5",
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  listItemLabel: {
    fontSize: 16,
    color: "#333",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: "#666",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#4CAF50",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: "#A5D6A7",
    shadowOpacity: 0.1,
    elevation: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SelectLocationScreen;
