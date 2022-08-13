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
      <View style={styles.View_826_1922}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28c1f1b6-8e47-4e07-80ef-5d915f7ab1fa"
          }}
          style={styles.TouchableOpacity_I826_1922_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fafd6d2c-bae2-4a51-bad9-a00f221795f7"
          }}
          style={styles.TouchableOpacity_I826_1922_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18298863-9694-4e30-bdd5-2b05850879df"
          }}
          style={styles.ImageBackground_I826_1922_425_656}
        />
      </View>
      <View style={styles.View_826_1937}>
        <View style={styles.View_I826_1937_673_1133} />
        <View style={styles.View_I826_1937_560_906} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eba260d4-40e9-4b60-a7cc-d2d5fc1046fc"
          }}
          style={styles.ImageBackground_I826_1937_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfe5d751-1a79-45d7-afc4-02f35be2622f"
          }}
          style={styles.ImageBackground_I826_1937_651_912}
        />
        <View style={styles.View_I826_1937_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f2a70f5-3239-444d-9065-2c338ccbe0e2"
            }}
            style={styles.ImageBackground_I826_1937_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5ecdb1e-6998-479b-9e5c-bbb9029e407f"
            }}
            style={styles.ImageBackground_I826_1937_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4ce0839-a612-4d5d-b5b5-4f8c5b41fba8"
            }}
            style={styles.ImageBackground_I826_1937_560_881}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I826_1937_560_885}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("844_2317"))
          }
        >
          <Text text="" style={styles.Text_I826_1937_560_885} />
        </TouchableOpacity>
        <View style={styles.View_I826_1937_560_886}>
          <Text text="" style={styles.Text_I826_1937_560_886} />
        </View>
        <View style={styles.View_I826_1937_560_887}>
          <Text text="" style={styles.Text_I826_1937_560_887} />
        </View>
        <View style={styles.View_I826_1937_560_899}>
          <Text style={styles.Text_I826_1937_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
      <View style={styles.View_856_2504}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/989f204d-1bf6-4114-b057-556963a82302"
          }}
          style={styles.ImageBackground_826_2020}
        />
        <View style={styles.View_826_2015}>
          <Text style={styles.Text_826_2015}>High street</Text>
        </View>
        <View style={styles.View_826_2016}>
          <Text style={styles.Text_826_2016}>Collection</Text>
        </View>
        <View style={styles.View_826_2026}>
          <Text style={styles.Text_826_2026}>Summer collection</Text>
        </View>
        <View style={styles.View_826_2027}>
          <Text style={styles.Text_826_2027}>01</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e822b86e-9022-48e2-9e33-1e684446d8ff"
          }}
          style={styles.TouchableOpacity_826_2019}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("840_2176"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00869fd3-01b9-42e3-b2e2-8c808c55f74a"
          }}
          style={styles.ImageBackground_826_2028}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bec5ccf9-babf-4a70-ba9f-79c7f4b8eb3c"
          }}
          style={styles.ImageBackground_826_2021}
        />
      </View>
      <View style={styles.View_856_2505}>
        <View style={styles.View_826_2029}>
          <Text style={styles.Text_826_2029}>Summer trendy collection</Text>
        </View>
        <View style={styles.View_826_2030}>
          <Text style={styles.Text_826_2030}>02</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc9e510-ad99-4095-8f72-f4d6d63f7dc4"
          }}
          style={styles.ImageBackground_826_2025}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ece9ed2-fa20-42ea-a2c3-73e90e3c88da"
          }}
          style={styles.ImageBackground_826_2031}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(17, 17, 17, 1)" },
  View_2: { height: hp("201%") },
  View_826_1922: {
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
  TouchableOpacity_I826_1922_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I826_1922_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I826_1922_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_826_1937: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("170%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I826_1937_673_1133: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I826_1937_560_906: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I826_1937_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I826_1937_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I826_1937_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I826_1937_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I826_1937_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I826_1937_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  TouchableOpacity_I826_1937_560_885: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I826_1937_560_885: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_1937_560_886: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I826_1937_560_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_1937_560_887: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I826_1937_560_887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I826_1937_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I826_1937_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2504: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_826_2020: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_826_2015: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_826_2015: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 34.422794342041016,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 2.0266666412353516,
    textTransform: "none"
  },
  View_826_2016: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_826_2016: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 6.141445159912109,
    textTransform: "uppercase"
  },
  View_826_2026: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_826_2026: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  View_826_2027: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_826_2027: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  TouchableOpacity_826_2019: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  ImageBackground_826_2028: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("80%")
  },
  ImageBackground_826_2021: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("50%")
  },
  View_856_2505: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_826_2029: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_826_2029: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  View_826_2030: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_826_2030: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  ImageBackground_826_2025: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_826_2031: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("67%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
