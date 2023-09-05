import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",

    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nameCategory: {
    color: "#fff",
    fontSize: 16,
    padding: 8,
    flex: 1,
  },
  buttonForm: {
    flexDirection: 'row',
    columnGap: 16
  },


  buttonAddBalance: {
    backgroundColor: "#228b22",

    height: 56,
    width: 56,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonRemoveCategory: {
    backgroundColor: "#e23c44",

    height: 56,
    width: 56,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },
})