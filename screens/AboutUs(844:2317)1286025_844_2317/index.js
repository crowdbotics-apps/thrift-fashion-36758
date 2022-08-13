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
      <View style={styles.View_844_2318}>
        <View style={styles.View_I844_2318_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5bb828-8352-498a-bd45-6a14a1c72bed"
          }}
          style={styles.TouchableOpacity_I844_2318_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63a116cf-51f6-4753-a7aa-d9f2a7dd2b04"
          }}
          style={styles.TouchableOpacity_I844_2318_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/133329eb-5883-40a2-a733-3405efff10ce"
          }}
          style={styles.ImageBackground_I844_2318_425_656}
        />
      </View>
      <View style={styles.View_845_2387}>
        <Text style={styles.Text_845_2387}>
          The world of thrifting is large and growing. It includes people from
          all walks of life, all nations, and every possible interest. Some
          people intentionally shop at thrift stores at every possible
          opportunity because thrift merchandise is much less expensive than
          what they would pay in a retail store. it also helps to accelerate the
          circular fashion economy.{" "}
        </Text>
      </View>
      <View style={styles.View_845_2393}>
        <Text style={styles.Text_845_2393}>
          Receive early access to new arrivals, sales, exclusive content, events
          and much more!
        </Text>
      </View>
      <View style={styles.View_845_2388}>
        <Text style={styles.Text_845_2388}>About us</Text>
      </View>
      <View style={styles.View_845_2391}>
        <Text style={styles.Text_845_2391}>Sign Up</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/721c624a-ec38-4a60-aa80-d2be3471c035"
        }}
        style={styles.ImageBackground_845_2389}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aceb5c2d-5279-4e05-bc02-d7d08e4688ce"
        }}
        style={styles.ImageBackground_845_2392}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fe06293-3e34-4fd9-a08d-21faf387e258"
        }}
        style={styles.ImageBackground_845_2390}
      />
      <View style={styles.View_845_2394}>
        <View style={styles.View_845_2395}>
          <View style={styles.View_845_2396} />
          <View style={styles.View_845_2397} />
          <View style={styles.View_845_2398}>
            <Text style={styles.Text_845_2398}>Email adress</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_861_3078}>
        <View style={styles.View_I861_3078_861_3071} />
        <View style={styles.View_I861_3078_861_3072}>
          <View style={styles.View_I861_3078_861_3074}>
            <Text style={styles.Text_I861_3078_861_3074}>submit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea416a8b-d251-4d5e-8bb2-a0f0177eb467"
            }}
            style={styles.ImageBackground_I861_3078_861_3073}
          />
        </View>
      </View>
      <View style={styles.View_1108_4161}>
        <Text style={styles.Text_1108_4161}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("114%") },
  View_844_2318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I844_2318_544_734: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I844_2318_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I844_2318_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I844_2318_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_845_2387: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_845_2387: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.212860107421875,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_845_2393: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_845_2393: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11.18625259399414,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_845_2388: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_845_2388: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.23946762084961,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.053215026855469,
    textTransform: "uppercase"
  },
  View_845_2391: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_845_2391: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.23946762084961,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.053215026855469,
    textTransform: "uppercase"
  },
  ImageBackground_845_2389: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("17%")
  },
  ImageBackground_845_2392: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("88%")
  },
  ImageBackground_845_2390: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("49%"),
    resizeMode: "cover"
  },
  View_845_2394: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_845_2395: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_845_2396: {
    width: wp("87%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.00009999999747378752,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_845_2397: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(212, 212, 212, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_845_2398: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_845_2398: {
    color: "rgba(151, 151, 151, 1)",
    fontSize: 12.199556350708008,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_861_3078: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_3078_861_3071: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I861_3078_861_3072: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_3078_861_3074: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_3078_861_3074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.18625259399414,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14186252593994142,
    textTransform: "uppercase"
  },
  ImageBackground_I861_3078_861_3073: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_1108_4161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1108_4161: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16.266075134277344,
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
