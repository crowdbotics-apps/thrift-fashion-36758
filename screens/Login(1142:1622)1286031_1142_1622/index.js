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
      <View style={styles.View_1142_1623}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46e5f133-9708-4667-a312-f6e7d83c6ee0"
          }}
          style={styles.ImageBackground_1142_1624}
        />
        <View style={styles.View_1142_1625} />
        <View style={styles.View_1142_1626}>
          <Text style={styles.Text_1142_1626}>THRIFT FASHION</Text>
        </View>
        <View style={styles.View_1142_1627}>
          <View style={styles.View_1142_1628}>
            <View style={styles.View_1142_1629} />
            <View style={styles.View_1142_1630} />
            <TouchableOpacity
              style={styles.TouchableOpacity_1142_1631}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("418_616"))
              }
            />
            <View style={styles.View_1142_1632}>
              <Text style={styles.Text_1142_1632}>Email</Text>
            </View>
            <View style={styles.View_1142_1633}>
              <Text style={styles.Text_1142_1633}>Password</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92c470f7-eb4e-4c67-80b5-b6a13a503ab3"
              }}
              style={styles.ImageBackground_1142_1634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a96c7e7f-2d32-4ede-9874-6ffd285cb9d9"
              }}
              style={styles.ImageBackground_1142_1635}
            />
            <View style={styles.View_1142_1637}>
              <Text style={styles.Text_1142_1637}>Sign In</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_1142_1638}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1142_1600"))
              }
            >
              <Text style={styles.Text_1142_1638}>
                Don’t have an account? Create account.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_1142_1623: {
    width: wp("492%"),
    minWidth: wp("492%"),
    height: hp("208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-232%"),
    top: hp("-54%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1142_1624: {
    width: wp("180%"),
    minWidth: wp("180%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("174%"),
    top: hp("41%")
  },
  View_1142_1625: {
    width: wp("197%"),
    minWidth: wp("197%"),
    height: hp("208%"),
    minHeight: hp("208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("134%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20999999344348907,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1142_1626: {
    width: wp("97%"),
    minWidth: wp("97%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("235%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_1142_1626: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1627: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("251%"),
    top: hp("93%")
  },
  View_1142_1628: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1142_1629: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0,
    borderColor: "rgba(250, 179, 0, 1)",
    borderWidth: 1
  },
  View_1142_1630: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0,
    borderColor: "rgba(250, 179, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_1142_1631: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("21%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.28999999165534973,
    borderColor: "rgba(250, 179, 0, 1)",
    borderWidth: 1
  },
  View_1142_1632: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1142_1632: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1633: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1142_1633: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1142_1634: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("2%")
  },
  ImageBackground_1142_1635: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("12%")
  },
  View_1142_1637: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1142_1637: {
    color: "rgba(255, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1142_1638: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_1142_1638: {
    color: "rgba(26, 14, 14, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
