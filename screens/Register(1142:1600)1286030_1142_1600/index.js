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
      <View style={styles.View_1142_1601}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1398026-84d0-41a8-8c85-ae7bfc7e8923"
          }}
          style={styles.ImageBackground_1142_1602}
        />
        <View style={styles.View_1142_1603} />
        <View style={styles.View_1142_1604}>
          <Text style={styles.Text_1142_1604}>
            By clicking “Create Account” you agree to our terms and privacy
            policy.
          </Text>
        </View>
        <View style={styles.View_1142_1605}>
          <Text style={styles.Text_1142_1605}>THRIFT FASHION</Text>
        </View>
        <View style={styles.View_1142_1606}>
          <View style={styles.View_1142_1607} />
          <View style={styles.View_1142_1608} />
          <View style={styles.View_1142_1609} />
          <TouchableOpacity
            style={styles.TouchableOpacity_1142_1610}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1142_1622"))
            }
          />
          <View style={styles.View_1142_1611}>
            <Text style={styles.Text_1142_1611}>Password</Text>
          </View>
          <View style={styles.View_1142_1612}>
            <Text style={styles.Text_1142_1612}>Confirm Password</Text>
          </View>
          <View style={styles.View_1142_1613}>
            <Text style={styles.Text_1142_1613}>Email</Text>
          </View>
          <View style={styles.View_1142_1614}>
            <Text text="" style={styles.Text_1142_1614} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2301ba70-bdf0-486f-8940-34c0fa2d2ba0"
            }}
            style={styles.ImageBackground_1142_1615}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b95e42a-1e19-4291-8610-fefec0955c37"
            }}
            style={styles.ImageBackground_1142_1616}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59f2f010-4a8a-4dc8-ba8a-4dfa4094cade"
            }}
            style={styles.ImageBackground_1142_1618}
          />
          <View style={styles.View_1142_1620}>
            <Text style={styles.Text_1142_1620}>Create account</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_1142_1621}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1142_1622"))
            }
          >
            <Text style={styles.Text_1142_1621}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 179, 0, 1)" },
  View_2: { height: hp("100%") },
  View_1142_1601: {
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
  ImageBackground_1142_1602: {
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
  View_1142_1603: {
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
  View_1142_1604: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("259%"),
    top: hp("129%"),
    justifyContent: "flex-start"
  },
  Text_1142_1604: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1605: {
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
  Text_1142_1605: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1606: {
    width: wp("56%"),
    minWidth: wp("56%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("256%"),
    top: hp("86%")
  },
  View_1142_1607: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("6%"),
    minHeight: hp("6%"),
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
  View_1142_1608: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("6%"),
    minHeight: hp("6%"),
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
  View_1142_1609: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0,
    borderColor: "rgba(250, 179, 0, 1)",
    borderWidth: 1
  },
  TouchableOpacity_1142_1610: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("30%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.28999999165534973,
    borderColor: "rgba(250, 179, 0, 1)",
    borderWidth: 1
  },
  View_1142_1611: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1142_1611: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1612: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1142_1612: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1613: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1142_1613: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1614: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_1142_1614: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1142_1615: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_1142_1616: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_1142_1618: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  View_1142_1620: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_1142_1620: {
    color: "rgba(255, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1142_1621: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_1142_1621: {
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
