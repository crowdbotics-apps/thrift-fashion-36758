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
      <View style={styles.View_696_1557}>
        <View style={styles.View_I696_1557_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a18e6e4-290d-4b96-aeb3-226f3373e182"
          }}
          style={styles.ImageBackground_I696_1557_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60adabd6-eb73-4758-9607-ccc2a193612e"
          }}
          style={styles.ImageBackground_I696_1557_651_912}
        />
        <View style={styles.View_I696_1557_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30accfec-14d3-4a67-9c5d-e2b19f7a887b"
            }}
            style={styles.ImageBackground_I696_1557_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bec8113e-483f-4297-9fcd-804df42a7133"
            }}
            style={styles.ImageBackground_I696_1557_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c385682d-f9cb-4242-86c3-0da791adcc73"
            }}
            style={styles.ImageBackground_I696_1557_560_881}
          />
        </View>
        <View style={styles.View_I696_1557_560_899}>
          <Text style={styles.Text_I696_1557_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
      <View style={styles.View_856_2499}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ed756b3-648d-409d-b96c-8fb415c64026"
          }}
          style={styles.ImageBackground_856_2466}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cc5b19e-e7bb-4b78-b674-3c91b6a2fd8f"
          }}
          style={styles.ImageBackground_856_2467}
        />
        <View style={styles.View_856_2468}>
          <View style={styles.View_856_2469}>
            <Text style={styles.Text_856_2469}>COD Policy</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d27dce18-5de5-4584-85a0-501ac6370d79"
            }}
            style={styles.ImageBackground_856_2470}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/245ef1d5-d4e5-4ddc-9f07-0359614ee403"
            }}
            style={styles.ImageBackground_856_2471}
          />
        </View>
        <View style={styles.View_856_2472}>
          <View style={styles.View_856_2473}>
            <Text style={styles.Text_856_2473}>Return Policy</Text>
          </View>
          <View style={styles.View_856_2474}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ea30bb1-982b-46d0-a78e-39b4e98ec5ec"
              }}
              style={styles.ImageBackground_I856_2474_94_1936}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bdb05ef-ba7c-4b5b-b39c-5c5311b7d8fa"
              }}
              style={styles.ImageBackground_I856_2474_94_1937}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f39838f-2f6e-42f7-9544-40273665c30a"
              }}
              style={styles.ImageBackground_I856_2474_103_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa7a0931-aec1-4d93-a439-d82e622bc56d"
              }}
              style={styles.ImageBackground_I856_2474_103_5}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3951e6e-c25f-4367-9410-5917bee76dcf"
            }}
            style={styles.ImageBackground_856_2475}
          />
        </View>
        <View style={styles.View_856_2476}>
          <Text style={styles.Text_856_2476}>CARE</Text>
        </View>
        <View style={styles.View_856_2477}>
          <View style={styles.View_856_2478}>
            <Text style={styles.Text_856_2478}>Free Flat Rate Shipping</Text>
          </View>
          <View style={styles.View_856_2479}>
            <Text style={styles.Text_856_2479}>
              Estimated to be delivered on 09/10/2022 - 10/10/2022.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3f5d39a-678d-487f-b837-225e0193f6dd"
            }}
            style={styles.ImageBackground_856_2480}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da8d97aa-1a72-48f3-adb4-d71ee0e65873"
            }}
            style={styles.ImageBackground_865_2322}
          />
        </View>
      </View>
      <View style={styles.View_856_2454}>
        <View style={styles.View_I856_2454_693_1202} />
        <View style={styles.View_I856_2454_681_1225}>
          <View style={styles.View_I856_2454_681_1199}>
            <View style={styles.View_I856_2454_681_1200}>
              <Text style={styles.Text_I856_2454_681_1200}>Add to basket</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e69eb76-32d6-4885-a5aa-86a69a1c4d26"
              }}
              style={styles.ImageBackground_I856_2454_681_1204}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23852c43-4cd6-4f9f-a7c5-55ebd7afece0"
          }}
          style={styles.ImageBackground_I856_2454_693_1203}
        />
      </View>
      <View style={styles.View_856_2452}>
        <View style={styles.View_856_2443}>
          <View style={styles.View_856_2444}>
            <View style={styles.View_856_2445}>
              <Text style={styles.Text_856_2445}>ROUH</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a58262-1ccf-4cdb-bba0-e9f282ceedb6"
              }}
              style={styles.ImageBackground_856_2446}
            />
          </View>
          <View style={styles.View_856_2447}>
            <Text style={styles.Text_856_2447}>Brown Q May Bag With Strap</Text>
          </View>
          <View style={styles.View_856_2448}>
            <Text style={styles.Text_856_2448}>$20</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_856_2441}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03352e31-8a1e-4051-a621-16542dd5710f"
          }}
          style={styles.ImageBackground_695_1267}
        />
        <View style={styles.View_695_1274}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e698a7a8-e302-40cf-a501-8bd35efa8b02"
            }}
            style={styles.ImageBackground_695_1275}
          />
          <View style={styles.View_695_1276}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6b21cb5-bf7f-4abf-92a9-83e4e54ca92b"
              }}
              style={styles.ImageBackground_I695_1276_94_1950}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f22c7e1-a707-4b3d-994d-f0849216ae85"
              }}
              style={styles.ImageBackground_I695_1276_94_1953}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_695_1266}>
        <View style={styles.View_I695_1266_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa2f7664-53af-4f92-863b-93b86e1f3865"
          }}
          style={styles.TouchableOpacity_I695_1266_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e301df9-37bf-4581-85c9-97400752d568"
          }}
          style={styles.TouchableOpacity_I695_1266_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae3ecc34-a437-4949-8558-310e54fcff2c"
          }}
          style={styles.ImageBackground_I695_1266_425_656}
        />
      </View>
      <View style={styles.View_1107_4150}>
        <Text style={styles.Text_1107_4150}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("159%") },
  View_696_1557: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("129%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I696_1557_673_1133: {
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
  ImageBackground_I696_1557_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I696_1557_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I696_1557_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I696_1557_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I696_1557_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I696_1557_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I696_1557_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I696_1557_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2499: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_856_2466: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("19%")
  },
  ImageBackground_856_2467: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("24%")
  },
  View_856_2468: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2469: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_856_2469: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.159574508666992,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12159574508666993,
    textTransform: "none"
  },
  ImageBackground_856_2470: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_856_2471: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_856_2472: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2473: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_856_2473: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10.159574508666992,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12159574508666993,
    textTransform: "none"
  },
  View_856_2474: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I856_2474_94_1936: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I856_2474_94_1937: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I856_2474_103_6: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I856_2474_103_5: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_856_2475: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_856_2476: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_856_2476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.18617057800293,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1418617057800293,
    textTransform: "none"
  },
  View_856_2477: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2478: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_856_2478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.18617057800293,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.1418617057800293,
    textTransform: "none"
  },
  View_856_2479: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_856_2479: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.18617057800293,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_856_2480: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_865_2322: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_856_2454: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I856_2454_693_1202: {
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
  View_I856_2454_681_1225: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I856_2454_681_1199: {
    width: wp("39%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I856_2454_681_1200: {
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I856_2454_681_1200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.18617057800293,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.1418617057800293,
    textTransform: "uppercase"
  },
  ImageBackground_I856_2454_681_1204: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I856_2454_693_1203: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  View_856_2452: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2443: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2444: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_856_2445: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_856_2445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.053191661834717,
    textTransform: "uppercase"
  },
  ImageBackground_856_2446: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_856_2447: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_856_2447: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_856_2448: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_856_2448: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14.239362716674805,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_856_2441: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_695_1267: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_695_1274: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("41%")
  },
  ImageBackground_695_1275: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_695_1276: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I695_1276_94_1950: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I695_1276_94_1953: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_695_1266: {
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
  View_I695_1266_544_734: {
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
  TouchableOpacity_I695_1266_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I695_1266_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I695_1266_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_1107_4150: {
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
  Text_1107_4150: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16.265958786010742,
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
