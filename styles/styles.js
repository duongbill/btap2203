import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Common Styles
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 16,
    marginBottom: 24,
  },

  // Payment Screen Styles
  checkoutHeader: {
    marginBottom: 48,
  },
  checkoutTitle: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
  },
  priceText: {
    fontSize: 44,
    fontWeight: "700",
    color: "#4CD964",
    marginBottom: 6,
  },
  includingText: {
    fontSize: 15,
    color: "#888",
  },
  paymentMethodContainer: {
    flexDirection: "row",
    marginBottom: 40,
    gap: 12,
  },
  paymentMethodButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 14,
    backgroundColor: "#f5f5f5",
  },
  activePaymentMethod: {
    backgroundColor: "#4CD964",
  },
  paymentMethodText: {
    marginLeft: 12,
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  formContainer: {
    flex: 1,
    marginBottom: 32,
  },
  formGroup: {
    marginBottom: 28,
  },
  formRow: {
    flexDirection: "row",
  },
  formLabel: {
    fontSize: 15,
    marginBottom: 12,
    color: "#666",
  },
  formLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#eee",
    borderRadius: 14,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    marginBottom: 24,
    width: "100%",
    height: 60,
  },
  textInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    width: "100%",
    height: "100%",
  },
  inputLabel: {
    fontSize: 15,
    color: "#666",
    marginBottom: 12,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  noteContainer: {
    marginBottom: 40,
  },
  noteText: {
    fontSize: 15,
    color: "#888",
    lineHeight: 24,
  },
  payButton: {
    backgroundColor: "#4CD964",
    borderRadius: 24,
    paddingVertical: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
  },
  payButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 12,
  },

  // Success Screen Styles
  successContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  successContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  illustrationContainer: {
    width: 220,
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  successImage: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  posTerminal: {
    width: 180,
    height: 220,
    backgroundColor: "#f0f7ff",
    borderRadius: 20,
    alignItems: "center",
    padding: 14,
  },
  posScreen: {
    width: "100%",
    height: 90,
    backgroundColor: "#e1eeff",
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  receiptPaper: {
    width: "80%",
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  posKeypad: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  posKey: {
    width: "30%",
    height: 24,
    backgroundColor: "#e1eeff",
    borderRadius: 8,
    marginBottom: 10,
  },
  posCardSlot: {
    width: "80%",
    height: 14,
    backgroundColor: "#c7dcff",
    borderRadius: 8,
    marginTop: 10,
  },
  successCheckmark: {
    position: "absolute",
    bottom: 24,
    right: 28,
    width: 56,
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },
  successDesc: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
    maxWidth: "85%",
  },
  checkDetailsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  checkDetailsText: {
    color: "#5B5BD6",
    fontWeight: "600",
    fontSize: 16,
    marginRight: 8,
  },
  downloadButton: {
    backgroundColor: "#5B5BD6",
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 40,
    width: "90%",
  },
  downloadButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styles;
