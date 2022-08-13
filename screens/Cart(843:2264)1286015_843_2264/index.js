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
      <View style={styles.View_843_2266}>
        <Text style={styles.Text_843_2266}>CART</Text>
      </View>
      <View style={styles.View_843_2267}>
        <Text style={styles.Text_843_2267}>Sub Total</Text>
      </View>
      <View style={styles.View_843_2268}>
        <Text style={styles.Text_843_2268}>$15</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c97271f8-1fda-4d2a-8c20-72d3d31f8350"
        }}
        style={styles.ImageBackground_843_2269}
      />
      <View style={styles.View_843_2270}>
        <View style={styles.View_I843_2270_700_1439}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ee499ca-ce61-4ccc-8859-1f06d1ee2f24"
            }}
            style={styles.ImageBackground_I843_2270_700_1440}
          />
        </View>
        <View style={styles.View_I843_2270_700_1476}>
          <View style={styles.View_I843_2270_700_1444}>
            <View style={styles.View_I843_2270_700_1445}>
              <Text style={styles.Text_I843_2270_700_1445}>H X O</Text>
            </View>
            <View style={styles.View_I843_2270_700_1446}>
              <Text style={styles.Text_I843_2270_700_1446}>Denim Jean Bag</Text>
            </View>
          </View>
          <View style={styles.View_I843_2270_700_1475}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20441882-3c63-4198-a611-9c01066781d5"
              }}
              style={styles.ImageBackground_I843_2270_700_1463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99c3112a-d6b9-4803-8016-46ed0697307c"
              }}
              style={styles.ImageBackground_I843_2270_700_1467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a038ffd-a391-4176-ae99-d2f151be5d9d"
              }}
              style={styles.ImageBackground_I843_2270_700_1471}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f95d4120-32d2-4acb-8d40-e6d5ed469608"
              }}
              style={styles.ImageBackground_I843_2270_700_1468}
            />
            <View style={styles.View_I843_2270_700_1474}>
              <Text style={styles.Text_I843_2270_700_1474}>1</Text>
            </View>
          </View>
          <View style={styles.View_I843_2270_700_1447}>
            <Text style={styles.Text_I843_2270_700_1447}>$5</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_843_2271}>
        <View style={styles.View_I843_2271_700_1439}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de9d70b9-30f4-4c80-be7e-442abdc76c3e"
            }}
            style={styles.ImageBackground_I843_2271_700_1440}
          />
        </View>
        <View style={styles.View_I843_2271_700_1476}>
          <View style={styles.View_I843_2271_700_1444}>
            <View style={styles.View_I843_2271_700_1445}>
              <Text style={styles.Text_I843_2271_700_1445}>21 8 X 67</Text>
            </View>
            <View style={styles.View_I843_2271_700_1446}>
              <Text style={styles.Text_I843_2271_700_1446}>
                Womens Grey Cotton Top
              </Text>
            </View>
          </View>
          <View style={styles.View_I843_2271_700_1475}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4af5a0d8-3f8c-4c7d-986a-aba2e3593928"
              }}
              style={styles.ImageBackground_I843_2271_700_1463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a64ab78a-573e-4789-bf44-ab93a2322986"
              }}
              style={styles.ImageBackground_I843_2271_700_1467}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/779367cd-1054-4fe1-b114-0e2f72888b63"
              }}
              style={styles.ImageBackground_I843_2271_700_1471}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e006266c-80d7-46da-b622-c4b723cf240e"
              }}
              style={styles.ImageBackground_I843_2271_700_1468}
            />
            <View style={styles.View_I843_2271_700_1474}>
              <Text style={styles.Text_I843_2271_700_1474}>1</Text>
            </View>
          </View>
          <View style={styles.View_I843_2271_700_1447}>
            <Text style={styles.Text_I843_2271_700_1447}>$10</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9ff9c5d-7721-436e-85fa-ac2246522a64"
        }}
        style={styles.ImageBackground_843_2272}
      />
      <View style={styles.View_861_3097}>
        <View style={styles.View_I861_3097_835_3093} />
        <View style={styles.View_I861_3097_861_2997}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27b1619d-7d81-4d81-a55d-c3f083930bac"
            }}
            style={styles.ImageBackground_I861_3097_835_3097}
          />
          <View style={styles.View_I861_3097_835_3096}>
            <Text style={styles.Text_I861_3097_835_3096}>BUY NOW</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_843_2266: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_843_2266: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14.257143020629883,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.057142734527588,
    textTransform: "uppercase"
  },
  View_843_2267: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81%"),
    justifyContent: "flex-start"
  },
  Text_843_2267: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.199999809265137,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.028571367263794,
    textTransform: "uppercase"
  },
  View_843_2268: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_843_2268: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13.228570938110352,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3.0428571701049805,
    textTransform: "uppercase"
  },
  ImageBackground_843_2269: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_843_2270: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2270_700_1439: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I843_2270_700_1440: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I843_2270_700_1476: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2270_700_1444: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2270_700_1445: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I843_2270_700_1445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_I843_2270_700_1446: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I843_2270_700_1446: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I843_2270_700_1475: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_I843_2270_700_1463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I843_2270_700_1467: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_I843_2270_700_1471: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I843_2270_700_1468: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I843_2270_700_1474: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I843_2270_700_1474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.199999809265137,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I843_2270_700_1447: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I843_2270_700_1447: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_843_2271: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2271_700_1439: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I843_2271_700_1440: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I843_2271_700_1476: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2271_700_1444: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I843_2271_700_1445: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I843_2271_700_1445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_I843_2271_700_1446: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I843_2271_700_1446: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I843_2271_700_1475: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I843_2271_700_1463: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I843_2271_700_1467: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_I843_2271_700_1471: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I843_2271_700_1468: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I843_2271_700_1474: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I843_2271_700_1474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.199999809265137,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I843_2271_700_1447: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I843_2271_700_1447: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_843_2272: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%")
  },
  View_861_3097: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_3097_835_3093: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I861_3097_861_2997: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_3097_835_3097: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I861_3097_835_3096: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_3097_835_3096: {
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
