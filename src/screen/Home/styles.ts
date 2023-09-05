import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242436",
    flex: 1,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    // height: 56
  },
  title2: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    // height: 56
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    height: 56,
    borderRadius: 10,

    fontSize: 16,
    fontWeight: "600",

    flex: 1,
  },
  form: {
    marginTop: 48,
    flexDirection: "row",
    columnGap: 20,
    width: '100%',
    marginBottom: 40
  },
  button: {
    backgroundColor: "#ffa500",
    alignItems: "center",
    height: 56,
    width: 56,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
});
