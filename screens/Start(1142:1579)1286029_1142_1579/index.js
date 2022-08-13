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
      <View style={styles.View_1142_1580}>
        <View style={styles.View_1142_1581} />
        <View style={styles.View_1142_1582}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32a638e6-5ef1-4ae3-a23a-d03f509feb1f"
            }}
            style={styles.ImageBackground_1142_1583}
          />
          <View style={styles.View_1142_1584} />
          <View style={styles.View_1142_1585} />
          <View style={styles.View_1142_1586}>
            <Text style={styles.Text_1142_1586}>THRIFT FASHION</Text>
          </View>
          <View style={styles.View_1142_1587}>
            <Text style={styles.Text_1142_1587}>LOGIN</Text>
          </View>
          <View style={styles.View_1142_1588}>
            <Text style={styles.Text_1142_1588}>REGISTER</Text>
          </View>
          <View style={styles.View_1142_1589}>
            <TouchableOpacity
              style={styles.TouchableOpacity_1142_1590}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1142_1622"))
              }
            >
              <View style={styles.View_1142_1591} />
            </TouchableOpacity>
          </View>
          <View style={styles.View_1142_1592}>
            <TouchableOpacity
              style={styles.TouchableOpacity_1142_1593}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1142_1600"))
              }
            >
              <View style={styles.View_1142_1594} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_1142_1595}>
          <View style={styles.View_1142_1596}>
            <Text style={styles.Text_1142_1596}>Woman / CAMPAIGN .16</Text>
          </View>
          <View style={styles.View_1142_1597}>
            <Text style={styles.Text_1142_1597}>SPRING</Text>
          </View>
          <View style={styles.View_1142_1598}>
            <Text style={styles.Text_1142_1598}>SUMMER</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fd44b2d-aa0d-4992-ae62-6754e0e3c9a4"
          }}
          style={styles.ImageBackground_1142_1599}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 179, 0, 1)" },
  View_2: { height: hp("100%") },
  View_1142_1580: {
    width: wp("492%"),
    minWidth: wp("492%"),
    height: hp("208%"),
    minHeight: hp("208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-230%"),
    top: hp("-54%")
  },
  View_1142_1581: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("230%"),
    top: hp("54%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_1142_1582: {
    width: wp("492%"),
    minWidth: wp("492%"),
    height: hp("208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1142_1583: {
    width: wp("108%"),
    minWidth: wp("108%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("227%"),
    top: hp("52%"),
    resizeMode: "cover"
  },
  View_1142_1584: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("229%"),
    top: hp("54%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1142_1585: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("262%"),
    top: hp("133%"),
    backgroundColor: "rgba(250, 179, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1142_1586: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("239%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_1142_1586: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1587: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("240%"),
    top: hp("138%"),
    justifyContent: "flex-start"
  },
  Text_1142_1587: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1588: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("284%"),
    top: hp("138%"),
    justifyContent: "flex-start"
  },
  Text_1142_1588: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1589: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("233%"),
    top: hp("134%")
  },
  TouchableOpacity_1142_1590: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1142_1591: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.0707964897155762
  },
  View_1142_1592: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("278%"),
    top: hp("134%")
  },
  TouchableOpacity_1142_1593: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1142_1594: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1.1503759622573853
  },
  View_1142_1595: {
    width: wp("154%"),
    minWidth: wp("154%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("248%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1142_1596: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("34%"),
    justifyContent: "flex-end"
  },
  Text_1142_1596: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 24.341739654541016,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1597: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1142_1597: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 70.69123840332031,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1142_1598: {
    width: wp("102%"),
    minWidth: wp("102%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_1142_1598: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 70.69123840332031,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1142_1599: {
    width: wp("31%"),
    height: hp("3%"),
    top: hp("125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("264%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
