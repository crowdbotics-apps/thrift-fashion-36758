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
      <View style={styles.View_840_2177}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10dbc7d5-d3b3-4f4c-abc9-6a8814e8c6f7"
          }}
          style={styles.TouchableOpacity_I840_2177_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42f20bfa-dd04-4a9d-9e62-840136ac75fe"
          }}
          style={styles.TouchableOpacity_I840_2177_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f0bfbe6-59fe-4f54-8710-752f2511f66e"
          }}
          style={styles.ImageBackground_I840_2177_425_656}
        />
      </View>
      <View style={styles.View_856_2511}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b289b02-6206-4fa0-8a2d-f1731f83d68f"
          }}
          style={styles.ImageBackground_840_2179}
        />
        <View style={styles.View_840_2180}>
          <Text style={styles.Text_840_2180}>Designer brand</Text>
        </View>
        <View style={styles.View_840_2181}>
          <Text style={styles.Text_840_2181}>Collection</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98401d1c-2612-4a56-8143-da4371eb305a"
          }}
          style={styles.ImageBackground_840_2188}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edb29878-1c42-48ab-b630-92ce7223130d"
          }}
          style={styles.ImageBackground_840_2192}
        />
        <View style={styles.View_840_2235}>
          <View style={styles.View_I840_2235_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41710095-fe24-4507-ba0a-a5a9a81c4200"
              }}
              style={styles.ImageBackground_I840_2235_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a12abc58-0424-49f1-bb80-2749ab72a6df"
              }}
              style={styles.ImageBackground_I840_2235_671_957}
            />
          </View>
          <View style={styles.View_I840_2235_671_962}>
            <View style={styles.View_I840_2235_671_961}>
              <View style={styles.View_I840_2235_671_946}>
                <Text style={styles.Text_I840_2235_671_946}>R Grey Top</Text>
              </View>
            </View>
            <View style={styles.View_I840_2235_671_947}>
              <Text style={styles.Text_I840_2235_671_947}>$10</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_840_2236}>
          <View style={styles.View_I840_2236_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00c9a5f2-d367-4ddb-b343-a4bbac658da9"
              }}
              style={styles.ImageBackground_I840_2236_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b036b5ea-8ec4-4cb2-8862-96d28389c104"
              }}
              style={styles.ImageBackground_I840_2236_671_957}
            />
          </View>
          <View style={styles.View_I840_2236_671_962}>
            <View style={styles.View_I840_2236_671_961}>
              <View style={styles.View_I840_2236_671_946}>
                <Text style={styles.Text_I840_2236_671_946}>
                  Cream Laced Shoes
                </Text>
              </View>
            </View>
            <View style={styles.View_I840_2236_671_947}>
              <Text style={styles.Text_I840_2236_671_947}>$20</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_856_2510}>
          <View style={styles.View_856_2508}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/476d71a3-8349-4bff-8500-598446f2a170"
              }}
              style={styles.ImageBackground_841_2305}
            />
            <View style={styles.View_841_2307}>
              <Text style={styles.Text_841_2307}>Summer trendy collection</Text>
            </View>
          </View>
          <View style={styles.View_856_2509}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87ff2c62-d8e0-4eb5-ba5b-da32aabd34f2"
              }}
              style={styles.ImageBackground_841_2306}
            />
            <View style={styles.View_841_2308}>
              <Text style={styles.Text_841_2308}>
                Indian heritage collection
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_856_2507}>
          <View style={styles.View_841_2303}>
            <Text style={styles.Text_841_2303}>You may also like</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12d63727-27a5-4010-8518-7e5c0ef0e733"
            }}
            style={styles.ImageBackground_841_2304}
          />
        </View>
        <View style={styles.View_840_2178}>
          <View style={styles.View_I840_2178_673_1133} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abc043b8-aeb6-4a6e-924f-808c711c8ab7"
            }}
            style={styles.ImageBackground_I840_2178_585_713}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/135f6e24-aa8e-43bc-a7da-f15c3c69e982"
            }}
            style={styles.ImageBackground_I840_2178_651_912}
          />
          <View style={styles.View_I840_2178_639_716}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcc3d530-debd-4bdf-b8e9-12000cf5d931"
              }}
              style={styles.ImageBackground_I840_2178_560_875}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77f57a77-f546-47b6-ad10-0723510f8dcd"
              }}
              style={styles.ImageBackground_I840_2178_560_877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/754a2c25-cf62-4ac0-a369-d9f68d474d26"
              }}
              style={styles.ImageBackground_I840_2178_560_881}
            />
          </View>
          <View style={styles.View_I840_2178_560_899}>
            <Text style={styles.Text_I840_2178_560_899}>
              aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 -
              Everyday
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(17, 17, 17, 1)" },
  View_2: { height: hp("225%") },
  View_840_2177: {
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
  TouchableOpacity_I840_2177_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I840_2177_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I840_2177_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_856_2511: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_840_2179: {
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
  View_840_2180: {
    width: wp("96%"),
    minWidth: wp("96%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_840_2180: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 34.422794342041016,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 2.0266666412353516,
    textTransform: "none"
  },
  View_840_2181: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_840_2181: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 6.141445159912109,
    textTransform: "uppercase"
  },
  ImageBackground_840_2188: {
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
  ImageBackground_840_2192: {
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
  View_840_2235: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2235_671_985: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I840_2235_671_944: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I840_2235_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I840_2235_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2235_671_961: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2235_671_946: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I840_2235_671_946: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I840_2235_671_947: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I840_2235_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_840_2236: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2236_671_985: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I840_2236_671_944: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I840_2236_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I840_2236_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2236_671_961: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2236_671_946: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I840_2236_671_946: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I840_2236_671_947: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I840_2236_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2510: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("121%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2508: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("11%")
  },
  ImageBackground_841_2305: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_841_2307: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_841_2307: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  View_856_2509: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("11%")
  },
  ImageBackground_841_2306: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_841_2308: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_841_2308: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 10.1017484664917,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  View_856_2507: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("121%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_841_2303: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_841_2303: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14.239999771118164,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.053333282470703,
    textTransform: "uppercase"
  },
  ImageBackground_841_2304: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("6%")
  },
  View_840_2178: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I840_2178_673_1133: {
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
  ImageBackground_I840_2178_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I840_2178_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I840_2178_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I840_2178_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I840_2178_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I840_2178_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I840_2178_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I840_2178_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.213333129882812,
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
