import { StyleSheet } from "react-native";
import { colors } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#999",
  },
  formContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
    position: "relative",
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFA07A",
    lineHeight: 40,
  },
  checkIcon: {
    position: "absolute",
    top: 0,
    right: -20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#999",
    textAlign: "right",
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#FFA07A",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  switchText: {
    color: "#999",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
  },
});
