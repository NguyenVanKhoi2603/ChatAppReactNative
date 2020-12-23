import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, CardItem, Left, Body, Thumbnail, Right } from "native-base";
import styles from "./styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { color } from "../../utility";

const ShowUsers = ({ name, img, onImgTap, onNameTap }) => {
  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.cardItemStyle}>
        <Left>
          <TouchableOpacity style={[styles.logoContainer]} onPress={onImgTap}>
            {img ? (
              <Thumbnail source={{ uri: img }} resizeMode="cover" />
            ) : (
                <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
              )}
          </TouchableOpacity>

          <Body>
            <Text style={styles.profileName} onPress={onNameTap}>
              {name}
            </Text>
          </Body>
        </Left>
        <Right>
          <FontAwesome5
            name="telegram-plane"
            size={40}
            onPress={onNameTap}
            style={{ marginRight: 10 }}
            color={color.WHITE}
          >

          </FontAwesome5>

        </Right>
      </CardItem>
    </Card>
  );
};

export default ShowUsers;
