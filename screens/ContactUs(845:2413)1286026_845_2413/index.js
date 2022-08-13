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
      <View style={styles.View_845_2414}>
        <View style={styles.View_I845_2414_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb0b134f-0744-4851-95f9-1a55fba55ac4"
          }}
          style={styles.TouchableOpacity_I845_2414_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9afd3e7a-605e-4e1e-8b9f-7b76172fdf88"
          }}
          style={styles.TouchableOpacity_I845_2414_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95e7ca4c-ae2e-4543-b87c-dc920c562d7a"
          }}
          style={styles.ImageBackground_I845_2414_425_656}
        />
      </View>
      <View style={styles.View_1108_4160}>
        <Text style={styles.Text_1108_4160}>THRIFT FASHION</Text>
      </View>
      <View style={styles.View_845_2417}>
        <Text style={styles.Text_845_2417}>Contact us</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/342f11e8-5cdf-4053-bab2-467f52e3ed2a"
        }}
        style={styles.ImageBackground_845_2419}
      />
      <View style={styles.View_845_2504}>
        <View style={styles.View_845_2467}>
          <Text style={styles.Text_845_2467}>
            You can text us at 091256789 for more information or just tape the
            Text us button bellow also you can follow us on instagram , twitter
            and youtube to check out more thrift cloth and to keep you updated
            on the cloths availabel.
          </Text>
        </View>
        <View style={styles.View_861_3088}>
          <View style={styles.View_I861_3088_845_2464}>
            <Text style={styles.Text_I861_3088_845_2464}>Text us</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3d40d26-45e6-4e64-b8be-3cd273a95aa0"
          }}
          style={styles.ImageBackground_845_2472}
        />
      </View>
      <View style={styles.View_845_2486}>
        <View style={styles.View_I845_2486_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1af057b4-3520-4964-812a-89454795f56a"
          }}
          style={styles.ImageBackground_I845_2486_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aaccb44-dcd9-467c-9851-9eb1faf5e061"
          }}
          style={styles.ImageBackground_I845_2486_651_912}
        />
        <View style={styles.View_I845_2486_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29aa1c94-22ae-4e3d-8aa8-62d755070110"
            }}
            style={styles.ImageBackground_I845_2486_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/661e8e94-d8e4-40b5-b288-89bb221270ba"
            }}
            style={styles.ImageBackground_I845_2486_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51c7eab4-2c9a-44f4-abf8-4bf43de8374a"
            }}
            style={styles.ImageBackground_I845_2486_560_881}
          />
        </View>
        <View style={styles.View_I845_2486_560_899}>
          <Text style={styles.Text_I845_2486_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_845_2414: {
    width: wp("101%"),
    minWidth: wp("101%"),
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
  View_I845_2414_544_734: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I845_2414_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I845_2414_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I845_2414_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("3%")
  },
  View_1108_4160: {
    width: wp("101%"),
    minWidth: wp("101%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1108_4160: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_845_2417: {
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
  Text_845_2417: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  ImageBackground_845_2419: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("18%")
  },
  View_845_2504: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%")
  },
  View_845_2467: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_845_2467: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_861_3088: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("33%"),
    backgroundColor: "rgba(249, 160, 0, 1)"
  },
  View_I861_3088_845_2464: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_3088_845_2464: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_845_2472: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_845_2486: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I845_2486_673_1133: {
    flexGrow: 1,
    width: wp("101%"),
    height: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  ImageBackground_I845_2486_585_713: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("10%")
  },
  ImageBackground_I845_2486_651_912: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("29%")
  },
  View_I845_2486_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%")
  },
  ImageBackground_I845_2486_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I845_2486_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I845_2486_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I845_2486_560_899: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I845_2486_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
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
