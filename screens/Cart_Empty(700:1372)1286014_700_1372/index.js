import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_700_1375}>
        <Text style={styles.Text_700_1375}>CART</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d5bd1e-eca1-4bdd-adfd-a3e6a031818b"
        }}
        style={styles.ImageBackground_700_1379}
      />
      <View style={styles.View_700_1524}>
        <Text style={styles.Text_700_1524}>
          You have no items in your Shopping Bag.
        </Text>
      </View>
      <View style={styles.View_861_3090}>
        <View style={styles.View_I861_3090_835_3093} />
        <View style={styles.View_I861_3090_861_2997}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9185726d-eaab-4eef-986d-e61eb8bf115e"
            }}
            style={styles.ImageBackground_I861_3090_835_3097}
          />
          <View style={styles.View_I861_3090_835_3096}>
            <Text style={styles.Text_I861_3090_835_3096}>
              Continue shopping
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_700_1375: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_700_1375: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.199999809265137,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.0428571701049805,
    textTransform: "uppercase"
  },
  ImageBackground_700_1379: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_700_1524: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_700_1524: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 13.228570938110352,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_861_3090: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_3090_835_3093: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I861_3090_861_2997: {
    flexGrow: 1,
    width: wp("63%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_3090_835_3097: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I861_3090_835_3096: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_3090_835_3096: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.228570938110352,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1622857093811035,
    textTransform: "uppercase"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
