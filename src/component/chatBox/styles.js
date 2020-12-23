import { StyleSheet } from "react-native";
import { color, appStyle } from "../../utility";

export default StyleSheet.create({
  chatContainer: { backgroundColor: color.WHITE, borderRadius: 10 },
  chatTxt: {
    color: color.BLACK,
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "500",
    padding: 8,
  },
});
