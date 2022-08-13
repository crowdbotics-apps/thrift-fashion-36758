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
      <View style={styles.View_835_3067}>
        <View style={styles.View_I835_3067_544_734} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d6cbc89-d794-4f99-be05-b0f8873d7c96"
          }}
          style={styles.ImageBackground_I835_3067_424_630}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/775a21fb-cfcb-44d8-abf2-54131b073dfd"
          }}
          style={styles.TouchableOpacity_I835_3067_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d988447d-da11-4cd2-8f9e-5dee1eda3897"
          }}
          style={styles.ImageBackground_I835_3067_425_656}
        />
      </View>
      <View style={styles.View_835_3068}>
        <Text style={styles.Text_835_3068}>Checkout</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4c89f2d-6b0d-41dd-a1a6-54c59003a6bd"
        }}
        style={styles.ImageBackground_835_3069}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41e386e5-3bd4-4ef2-9461-663184efeb40"
        }}
        style={styles.ImageBackground_835_3088}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e77fa87-5c6d-4e96-a443-8ca1e343233f"
        }}
        style={styles.ImageBackground_835_3147}
      />
      <View style={styles.View_835_3090}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cf50557-e64b-4160-a59b-f52d76332e10"
          }}
          style={styles.ImageBackground_865_2361}
        />
        <View style={styles.View_835_3091}>
          <Text style={styles.Text_835_3091}>Add promo code</Text>
        </View>
      </View>
      <View style={styles.View_835_3148}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1aced474-2b0f-43d3-bd06-d111c66bc29f"
          }}
          style={styles.ImageBackground_865_2363}
        />
        <View style={styles.View_835_3149}>
          <Text style={styles.Text_835_3149}>Delivery</Text>
        </View>
        <View style={styles.View_835_3162}>
          <Text style={styles.Text_835_3162}>Free</Text>
        </View>
      </View>
      <View style={styles.View_861_2999}>
        <View style={styles.View_I861_2999_835_3093} />
        <View style={styles.View_I861_2999_861_2997}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/301cbd42-454c-4f86-90c2-f340a81489d2"
            }}
            style={styles.ImageBackground_I861_2999_835_3097}
          />
          <View style={styles.View_I861_2999_835_3096}>
            <Text style={styles.Text_I861_2999_835_3096}>Checkout</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_835_3099}>
        <Text style={styles.Text_835_3099}>Est. Total</Text>
      </View>
      <View style={styles.View_835_3100}>
        <Text style={styles.Text_835_3100}>$30</Text>
      </View>
      <View style={styles.View_835_3101}>
        <View style={styles.View_I835_3101_700_1439}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a0e9bf6-b85b-46f6-8ee5-9f0b8d6928a8"
            }}
            style={styles.ImageBackground_I835_3101_700_1440}
          />
        </View>
        <View style={styles.View_I835_3101_700_1476}>
          <View style={styles.View_I835_3101_700_1444}>
            <View style={styles.View_I835_3101_700_1445}>
              <Text style={styles.Text_I835_3101_700_1445}>OUH</Text>
            </View>
            <View style={styles.View_I835_3101_700_1446}>
              <Text style={styles.Text_I835_3101_700_1446}>
                {" "}
                Wool Knit Cardigan Top
              </Text>
            </View>
          </View>
          <View style={styles.View_I835_3101_700_1475}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03118453-ee38-479f-9d22-a58b3a2c14aa"
              }}
              style={styles.ImageBackground_I835_3101_700_1463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6f835f2-f8ce-4090-9b8a-06d526a6777e"
              }}
              style={styles.ImageBackground_I835_3101_700_1467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b98dc2bd-0ada-4cf4-97dc-5d44ef80db63"
              }}
              style={styles.ImageBackground_I835_3101_700_1471}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7db35f5-fa13-4e84-901b-f371bba06999"
              }}
              style={styles.ImageBackground_I835_3101_700_1468}
            />
            <View style={styles.View_I835_3101_700_1474}>
              <Text style={styles.Text_I835_3101_700_1474}>1</Text>
            </View>
          </View>
          <View style={styles.View_I835_3101_700_1447}>
            <Text style={styles.Text_I835_3101_700_1447}>$30</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec8ad0aa-11a5-47f6-8c41-6eddc17148cf"
        }}
        style={styles.ImageBackground_835_3102}
      />
      <View style={styles.View_1107_4153}>
        <Text style={styles.Text_1107_4153}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110%") },
  View_835_3067: {
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
  View_I835_3067_544_734: {
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
  ImageBackground_I835_3067_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I835_3067_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I835_3067_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_835_3068: {
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
  Text_835_3068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.239994049072266,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.053332328796387,
    textTransform: "uppercase"
  },
  ImageBackground_835_3069: {
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
  ImageBackground_835_3088: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("50%")
  },
  ImageBackground_835_3147: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%")
  },
  View_835_3090: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_865_2361: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_835_3091: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_835_3091: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.186663627624512,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_835_3148: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_865_2363: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_835_3149: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_835_3149: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.186663627624512,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_835_3162: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_835_3162: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186663627624512,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_861_2999: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2999_835_3093: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I861_2999_861_2997: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2999_835_3097: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I861_2999_835_3096: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_2999_835_3096: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13.213329315185547,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16213329315185548,
    textTransform: "uppercase"
  },
  View_835_3099: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_835_3099: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.186663627624512,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.03999924659729,
    textTransform: "uppercase"
  },
  View_835_3100: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_835_3100: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13.213329315185547,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.03999924659729,
    textTransform: "uppercase"
  },
  View_835_3101: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I835_3101_700_1439: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I835_3101_700_1440: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I835_3101_700_1476: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I835_3101_700_1444: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I835_3101_700_1445: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I835_3101_700_1445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_I835_3101_700_1446: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I835_3101_700_1446: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I835_3101_700_1475: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_I835_3101_700_1463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I835_3101_700_1467: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_I835_3101_700_1471: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I835_3101_700_1468: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I835_3101_700_1474: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I835_3101_700_1474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.186662673950195,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I835_3101_700_1447: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_I835_3101_700_1447: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_835_3102: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%")
  },
  View_1107_4153: {
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
  Text_1107_4153: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16.266660690307617,
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
