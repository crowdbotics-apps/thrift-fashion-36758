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
      <TouchableOpacity
        style={styles.TouchableOpacity_832_1903}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("658_721"))
        }
      >
        <View style={styles.View_I832_1903_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5957da9f-bd32-4630-a200-5fea284ff895"
          }}
          style={styles.TouchableOpacity_I832_1903_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecbf346b-9c69-44d3-9e35-e65a473125f3"
          }}
          style={styles.TouchableOpacity_I832_1903_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b747a59-68da-49f5-8cd7-6c7bf1d7122f"
          }}
          style={styles.ImageBackground_I832_1903_425_656}
        />
      </TouchableOpacity>
      <View style={styles.View_832_1904}>
        <View style={styles.View_832_1905}>
          <View style={styles.View_832_1906} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55e9725c-912b-46c9-b3dc-0db3cb10e0bd"
            }}
            style={styles.ImageBackground_832_1907}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3c576c5-2457-48bd-8ba6-7fca67bf5000"
            }}
            style={styles.ImageBackground_832_1908}
          />
          <View style={styles.View_832_1909}>
            <Text style={styles.Text_832_1909}>8 result of Tops</Text>
          </View>
          <View style={styles.View_832_1910}>
            <Text style={styles.Text_832_1910}>New</Text>
          </View>
          <View style={styles.View_832_1911}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/239a7e4a-d87d-4dd8-b9eb-306ada3b764b"
              }}
              style={styles.ImageBackground_I832_1911_673_1044}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80726249-dc51-4558-b5cc-4e7246987fb0"
              }}
              style={styles.ImageBackground_I832_1911_673_1045}
            />
            <View style={styles.View_I832_1911_673_1053} />
            <View style={styles.View_I832_1911_673_1059} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c42be99-d192-4e22-8157-ed0382a6be0c"
            }}
            style={styles.ImageBackground_832_1912}
          />
          <View style={styles.View_832_1913}>
            <View style={styles.View_I832_1913_671_1047}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I832_1913_671_1048}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d92eaa75-b487-42e7-8122-7a153d15be5c"
                }}
                style={styles.ImageBackground_I832_1913_671_1049}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_856_2513}>
        <View style={styles.View_832_1914}>
          <View style={styles.View_I832_1914_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77fa849a-c759-470b-8945-3f96f56fe4da"
              }}
              style={styles.ImageBackground_I832_1914_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2fe8cf8-a84f-498a-b4c7-f2e1aa6af5cd"
              }}
              style={styles.ImageBackground_I832_1914_671_957}
            />
          </View>
          <View style={styles.View_I832_1914_671_962}>
            <View style={styles.View_I832_1914_671_961}>
              <View style={styles.View_I832_1914_671_946}>
                <Text style={styles.Text_I832_1914_671_946}>
                  Womens Grey Cotton Top
                </Text>
              </View>
            </View>
            <View style={styles.View_I832_1914_671_947}>
              <Text style={styles.Text_I832_1914_671_947}>$10</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_832_1917}>
          <View style={styles.View_I832_1917_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e472d7e-842f-4415-910e-d8ecbc42edd7"
              }}
              style={styles.ImageBackground_I832_1917_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfc0bfbd-a4a7-4f3b-8e28-c4547ca81bd0"
              }}
              style={styles.ImageBackground_I832_1917_671_957}
            />
          </View>
          <View style={styles.View_I832_1917_671_962}>
            <View style={styles.View_I832_1917_671_961}>
              <View style={styles.View_I832_1917_671_946}>
                <Text style={styles.Text_I832_1917_671_946}>
                  Blue Butterfly Top
                </Text>
              </View>
            </View>
            <View style={styles.View_I832_1917_671_947}>
              <Text style={styles.Text_I832_1917_671_947}>$13</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_832_1919}>
          <View style={styles.View_I832_1919_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e1e4aa9-185c-44ba-b8a1-8e608eb4bd3f"
              }}
              style={styles.ImageBackground_I832_1919_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28dfab37-f91d-4daa-a343-9691fc6ea257"
              }}
              style={styles.ImageBackground_I832_1919_671_957}
            />
          </View>
          <View style={styles.View_I832_1919_671_962}>
            <View style={styles.View_I832_1919_671_961}>
              <View style={styles.View_I832_1919_671_946}>
                <Text style={styles.Text_I832_1919_671_946}>
                  H Pink Sweatshirt
                </Text>
              </View>
            </View>
            <View style={styles.View_I832_1919_671_947}>
              <Text style={styles.Text_I832_1919_671_947}>$15</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_832_1922}>
          <View style={styles.View_I832_1922_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/384401e5-8c14-485e-a5e1-bafd7ee79779"
              }}
              style={styles.ImageBackground_I832_1922_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a250966-771c-45c3-8941-d3c57398866a"
              }}
              style={styles.ImageBackground_I832_1922_671_957}
            />
          </View>
          <View style={styles.View_I832_1922_671_962}>
            <View style={styles.View_I832_1922_671_961}>
              <View style={styles.View_I832_1922_671_946}>
                <Text style={styles.Text_I832_1922_671_946}>
                  Cool Cakes Top
                </Text>
              </View>
            </View>
            <View style={styles.View_I832_1922_671_947}>
              <Text style={styles.Text_I832_1922_671_947}>$15</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_832_1927}>
          <View style={styles.View_I832_1927_673_1228}>
            <View style={styles.View_I832_1927_673_1228_673_1115} />
            <View style={styles.View_I832_1927_673_1228_673_1116}>
              <Text style={styles.Text_I832_1927_673_1228_673_1116}>1</Text>
            </View>
          </View>
          <View style={styles.View_I832_1927_673_1118}>
            <View style={styles.View_I832_1927_673_1118_673_1115} />
            <View style={styles.View_I832_1927_673_1118_673_1116}>
              <Text style={styles.Text_I832_1927_673_1118_673_1116}>2</Text>
            </View>
          </View>
          <View style={styles.View_I832_1927_673_1121}>
            <View style={styles.View_I832_1927_673_1121_673_1115} />
            <View style={styles.View_I832_1927_673_1121_673_1116}>
              <Text style={styles.Text_I832_1927_673_1121_673_1116}>3</Text>
            </View>
          </View>
          <View style={styles.View_I832_1927_673_1124}>
            <View style={styles.View_I832_1927_673_1124_673_1115} />
            <View style={styles.View_I832_1927_673_1124_673_1116}>
              <Text style={styles.Text_I832_1927_673_1124_673_1116}>4</Text>
            </View>
          </View>
          <View style={styles.View_I832_1927_673_1127}>
            <View style={styles.View_I832_1927_673_1127_673_1115} />
            <View style={styles.View_I832_1927_673_1127_673_1116}>
              <Text style={styles.Text_I832_1927_673_1127_673_1116}>5</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de43f48a-dbe7-4282-9c69-a8998ba4ce1f"
            }}
            style={styles.ImageBackground_I832_1927_673_1130}
          />
        </View>
      </View>
      <View style={styles.View_832_1928}>
        <View style={styles.View_I832_1928_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca01ed00-5a15-410c-b0ed-56676ec16175"
          }}
          style={styles.ImageBackground_I832_1928_585_713}
        />
        <View style={styles.View_I832_1928_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2afee251-a5f0-4257-b95e-7a77715aa3dd"
            }}
            style={styles.ImageBackground_I832_1928_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e7ebfcc-62d3-408a-85f6-81044185b625"
            }}
            style={styles.ImageBackground_I832_1928_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7847e62b-2e38-4d80-8f10-54d93802d715"
            }}
            style={styles.ImageBackground_I832_1928_560_881}
          />
        </View>
        <View style={styles.View_I832_1928_560_886}>
          <Text text="" style={styles.Text_I832_1928_560_886} />
        </View>
        <View style={styles.View_I832_1928_560_887}>
          <Text text="" style={styles.Text_I832_1928_560_887} />
        </View>
        <View style={styles.View_I832_1928_560_899}>
          <Text style={styles.Text_I832_1928_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
      <View style={styles.View_856_2512}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93fc3f6a-cdaa-4116-96d3-14852e0c7671"
          }}
          style={styles.ImageBackground_833_2097}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9da83568-ac33-448c-85bb-e86c793b1179"
          }}
          style={styles.ImageBackground_833_2098}
        />
        <View style={styles.View_833_2099}>
          <Text style={styles.Text_833_2099}>Top</Text>
        </View>
        <View style={styles.View_833_2104}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1380d2ee-7b78-47dd-abec-1c1b08b3bae2"
            }}
            style={styles.ImageBackground_833_2100}
          />
        </View>
      </View>
      <View style={styles.View_1108_4162}>
        <Text style={styles.Text_1108_4162}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("141%") },
  TouchableOpacity_832_1903: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I832_1903_544_734: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I832_1903_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I832_1903_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("4%")
  },
  ImageBackground_I832_1903_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("4%")
  },
  View_832_1904: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_832_1905: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_832_1906: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_832_1907: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  ImageBackground_832_1908: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  View_832_1909: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_832_1909: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_832_1910: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_832_1910: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_832_1911: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I832_1911_673_1044: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_I832_1911_673_1045: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_I832_1911_673_1053: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(20, 20, 42, 1)",
    borderWidth: 1
  },
  View_I832_1911_673_1059: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    borderColor: "rgba(20, 20, 42, 1)",
    borderWidth: 1
  },
  ImageBackground_832_1912: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%")
  },
  View_832_1913: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1913_671_1047: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I832_1913_671_1048: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I832_1913_671_1049: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_856_2513: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("178%"),
    minHeight: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_832_1914: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1914_671_985: {
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
  ImageBackground_I832_1914_671_944: {
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
  ImageBackground_I832_1914_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I832_1914_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1914_671_961: {
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
  View_I832_1914_671_946: {
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
  Text_I832_1914_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1914_671_947: {
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
  Text_I832_1914_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_832_1917: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1917_671_985: {
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
  ImageBackground_I832_1917_671_944: {
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
  ImageBackground_I832_1917_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I832_1917_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1917_671_961: {
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
  View_I832_1917_671_946: {
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
  Text_I832_1917_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1917_671_947: {
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
  Text_I832_1917_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_832_1919: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1919_671_985: {
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
  ImageBackground_I832_1919_671_944: {
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
  ImageBackground_I832_1919_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I832_1919_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1919_671_961: {
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
  View_I832_1919_671_946: {
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
  Text_I832_1919_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1919_671_947: {
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
  Text_I832_1919_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_832_1922: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1922_671_985: {
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
  ImageBackground_I832_1922_671_944: {
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
  ImageBackground_I832_1922_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I832_1922_671_962: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1922_671_961: {
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
  View_I832_1922_671_946: {
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
  Text_I832_1922_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1922_671_947: {
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
  Text_I832_1922_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_832_1927: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1228: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1228_673_1115: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I832_1927_673_1228_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I832_1927_673_1228_673_1116: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1927_673_1118: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1118_673_1115: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I832_1927_673_1118_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I832_1927_673_1118_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1927_673_1121: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1121_673_1115: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I832_1927_673_1121_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I832_1927_673_1121_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1927_673_1124: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1124_673_1115: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I832_1927_673_1124_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I832_1927_673_1124_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1927_673_1127: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1927_673_1127_673_1115: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  View_I832_1927_673_1127_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I832_1927_673_1127_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.212766647338867,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I832_1927_673_1130: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("1%")
  },
  View_832_1928: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I832_1928_673_1133: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  ImageBackground_I832_1928_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  View_I832_1928_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I832_1928_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I832_1928_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I832_1928_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I832_1928_560_886: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I832_1928_560_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1928_560_887: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I832_1928_560_887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I832_1928_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I832_1928_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2512: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_833_2097: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_833_2098: {
    width: wp("91%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_833_2099: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_833_2099: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_833_2104: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("1%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_833_2100: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1108_4162: {
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
  Text_1108_4162: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16,
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
