import React from "react";
import { Image, View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { globalStyle, color } from "../../utility";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ img, name, onImgTap, onEditImgTap }) => (
  // [globalStyle.sectionCentered, styles.container]
  <View style={{ flexDirection: 'row', backgroundColor: 'green' }}>
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} resizeMode="cover" />
        ) : (
            <View
              style={[
                globalStyle.sectionCentered,
                styles.img,
                { backgroundColor: color.DARK_GRAY },
              ]}
            >
              <Text style={styles.name}>{name.charAt(0)}</Text>
            </View>
          )}
      </TouchableOpacity>

    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={styles.welcome}>{name}</Text>
      {/* [globalStyle.sectionCentered, styles.editImgContainer] */}
      <View style={{ paddingTop: 10 }}>
        <FontAwesome5
          name="edit"
          size={20}
          onPress={onEditImgTap}
          color={color.WHITE}
        />
      </View>
    </View>

  </View>
);
