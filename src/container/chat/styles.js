import { StyleSheet } from "react-native";
import { color, appStyle } from "../../utility";

export default StyleSheet.create({
  sendMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  input: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "87%",
  },

  sendBtnContainer: {
    height: appStyle.fieldHeight,
    backgroundColor: color.BLACK,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "15%",
  },
});
