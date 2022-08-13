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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78fa1cdd-d57e-4f6e-823c-188ba3557965"
        }}
        style={styles.ImageBackground_861_2368}
      />
      <View style={styles.View_861_2369}>
        <Text style={styles.Text_861_2369}>Women</Text>
      </View>
      <View style={styles.View_861_2370}>
        <Text style={styles.Text_861_2370}>New Apparel</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_861_2409}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("669_724"))
        }
      >
        <Text style={styles.Text_861_2409}>
          outer blouse/shirt t-shirt knitwear skirt pants denim
        </Text>
      </TouchableOpacity>
      <View style={styles.View_861_2371}>
        <Text style={styles.Text_861_2371}>Man</Text>
      </View>
      <View style={styles.View_861_2372}>
        <Text style={styles.Text_861_2372}>Kids</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45580e5c-d04a-4793-ae2c-11c9998a4a89"
        }}
        style={styles.ImageBackground_861_2373}
      />
      <View style={styles.View_861_2374}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fc843e4-ce56-40d8-b981-d7bb438ed5ac"
          }}
          style={styles.ImageBackground_861_2375}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5c32267-2a17-4e91-bdc5-25091e50ac22"
          }}
          style={styles.ImageBackground_861_2376}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/608fa04d-8f92-493d-a7d1-ef87fcbc7b5b"
        }}
        style={styles.ImageBackground_861_2391}
      />
      <View style={styles.View_861_2392} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63fd6539-104f-4853-a55d-ff0365333cbc"
        }}
        style={styles.ImageBackground_861_2418}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/575cba74-a865-4755-9e52-ea54ce53d9e9"
        }}
        style={styles.ImageBackground_861_2419}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_861_2368: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  View_861_2369: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_861_2369: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.321837425231934,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.068965196609497,
    textTransform: "uppercase"
  },
  View_861_2370: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_861_2370: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.367815017700195,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_861_2409: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_861_2409: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.367815017700195,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_861_2371: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_861_2371: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.321837425231934,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.068965196609497,
    textTransform: "uppercase"
  },
  View_861_2372: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_861_2372: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.321837425231934,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.068965196609497,
    textTransform: "uppercase"
  },
  ImageBackground_861_2373: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_861_2374: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_861_2375: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_861_2376: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_861_2391: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%")
  },
  View_861_2392: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("14%"),
    backgroundColor: "rgba(221, 133, 96, 1)"
  },
  ImageBackground_861_2418: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("21%")
  },
  ImageBackground_861_2419: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97%"),
    top: hp("21%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
