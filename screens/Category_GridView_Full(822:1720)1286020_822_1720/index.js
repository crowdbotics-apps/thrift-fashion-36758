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
      <View style={styles.View_822_1746}>
        <View style={styles.View_I822_1746_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0abf5e8b-2df1-44cd-9c61-f5eef3ec1d9b"
          }}
          style={styles.ImageBackground_I822_1746_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/951dad08-3d85-4a25-9606-c7d91bd5cd2d"
          }}
          style={styles.ImageBackground_I822_1746_651_912}
        />
        <View style={styles.View_I822_1746_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4431803-f4cb-4d12-b400-e89e3ad981e6"
            }}
            style={styles.ImageBackground_I822_1746_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cd7e86a-948f-4182-80df-7ae4b4bf15f8"
            }}
            style={styles.ImageBackground_I822_1746_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1025c1a0-4f87-45a7-a6d3-46dcb476fb14"
            }}
            style={styles.ImageBackground_I822_1746_560_881}
          />
        </View>
        <View style={styles.View_I822_1746_560_899}>
          <Text style={styles.Text_I822_1746_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
      <View style={styles.View_856_2503}>
        <View style={styles.View_822_1745}>
          <View style={styles.View_I822_1745_673_1228}>
            <View style={styles.View_I822_1745_673_1228_673_1115} />
            <View style={styles.View_I822_1745_673_1228_673_1116}>
              <Text style={styles.Text_I822_1745_673_1228_673_1116}>1</Text>
            </View>
          </View>
          <View style={styles.View_I822_1745_673_1118}>
            <View style={styles.View_I822_1745_673_1118_673_1115} />
            <View style={styles.View_I822_1745_673_1118_673_1116}>
              <Text style={styles.Text_I822_1745_673_1118_673_1116}>2</Text>
            </View>
          </View>
          <View style={styles.View_I822_1745_673_1121}>
            <View style={styles.View_I822_1745_673_1121_673_1115} />
            <View style={styles.View_I822_1745_673_1121_673_1116}>
              <Text style={styles.Text_I822_1745_673_1121_673_1116}>3</Text>
            </View>
          </View>
          <View style={styles.View_I822_1745_673_1124}>
            <View style={styles.View_I822_1745_673_1124_673_1115} />
            <View style={styles.View_I822_1745_673_1124_673_1116}>
              <Text style={styles.Text_I822_1745_673_1124_673_1116}>4</Text>
            </View>
          </View>
          <View style={styles.View_I822_1745_673_1127}>
            <View style={styles.View_I822_1745_673_1127_673_1115} />
            <View style={styles.View_I822_1745_673_1127_673_1116}>
              <Text style={styles.Text_I822_1745_673_1127_673_1116}>5</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7d5f5a6-3338-4e28-946c-da4dc0c646f1"
            }}
            style={styles.ImageBackground_I822_1745_673_1130}
          />
        </View>
        <View style={styles.View_861_2979}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0051036-ffdb-4486-b035-4c42b6ad05ae"
            }}
            style={styles.ImageBackground_I861_2979_823_1915}
          />
          <View style={styles.View_I861_2979_823_1919}>
            <Text style={styles.Text_I861_2979_823_1919}>MOHAN</Text>
          </View>
          <View style={styles.View_I861_2979_823_1920}>
            <Text style={styles.Text_I861_2979_823_1920}>
              {" "}
              Recycle Long Trench Coat CoalBlack{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b886374e-e3de-4dde-8e35-e57f9e4c8183"
            }}
            style={styles.ImageBackground_I861_2979_823_1996}
          />
          <View style={styles.View_I861_2979_823_1921}>
            <Text style={styles.Text_I861_2979_823_1921}>$120</Text>
          </View>
        </View>
        <View style={styles.View_823_1923}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/111ec0d3-4d07-411c-b73c-d260124f6149"
            }}
            style={styles.ImageBackground_I823_1923_823_1915}
          />
          <View style={styles.View_I823_1923_823_1919}>
            <Text style={styles.Text_I823_1923_823_1919}>MOHAN</Text>
          </View>
          <View style={styles.View_I823_1923_823_1920}>
            <Text style={styles.Text_I823_1923_823_1920}>
              {" "}
              Recycle Boucle Knit Cardigan Brown
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e448ac7d-2613-49e2-9699-42bc2c6483e5"
            }}
            style={styles.ImageBackground_I823_1923_823_1996}
          />
          <View style={styles.View_I823_1923_823_1921}>
            <Text style={styles.Text_I823_1923_823_1921}>$120</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_822_1722}>
        <View style={styles.View_822_1723}>
          <View style={styles.View_822_1724} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94510c82-fabe-4a0a-8a28-d3e71cd3b138"
            }}
            style={styles.ImageBackground_822_1725}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb2ab3fb-d387-498d-a878-6be4c1e53c3e"
            }}
            style={styles.ImageBackground_822_1726}
          />
          <View style={styles.View_822_1727}>
            <Text style={styles.Text_822_1727}>4500 Apparel</Text>
          </View>
          <View style={styles.View_822_1728}>
            <Text style={styles.Text_822_1728}>New</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_822_1729}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("826_1836"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3389cc3f-4005-42e5-827d-07b4359d1dc9"
              }}
              style={styles.ImageBackground_I822_1729_823_2038}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9b6841a-c256-472f-a6fa-3760eca21509"
              }}
              style={styles.ImageBackground_I822_1729_823_2044}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad091f91-44a2-43ab-a9bd-544ee37bb496"
              }}
              style={styles.ImageBackground_I822_1729_823_2045}
            />
            <View style={styles.View_I822_1729_823_2042} />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d24a4a0a-a367-4906-8f7e-5561a376fc3f"
            }}
            style={styles.ImageBackground_822_1730}
          />
          <View style={styles.View_822_1731}>
            <View style={styles.View_I822_1731_671_1047}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I822_1731_671_1048}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31757ef6-6def-42d1-9dfb-0e4a30505671"
                }}
                style={styles.ImageBackground_I822_1731_671_1049}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_822_1742}>
          <View style={styles.View_822_1743}>
            <View style={styles.View_I822_1743_673_1070}>
              <Text style={styles.Text_I822_1743_673_1070}>Women</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/103da875-a313-4db6-b296-e21eccd2647d"
              }}
              style={styles.ImageBackground_I822_1743_673_1071}
            />
          </View>
          <View style={styles.View_822_1744}>
            <View style={styles.View_I822_1744_673_1070}>
              <Text style={styles.Text_I822_1744_673_1070}>Shoes</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3f5812c-967e-4209-9ee2-9311130830ee"
              }}
              style={styles.ImageBackground_I822_1744_673_1071}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_822_1721}>
        <View style={styles.View_I822_1721_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5778d131-ed9f-4e89-9b29-00463a70d5ec"
          }}
          style={styles.TouchableOpacity_I822_1721_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/330f17b6-6f22-4969-a466-79b3c796b378"
          }}
          style={styles.TouchableOpacity_I822_1721_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7edce38d-63bb-4e07-9970-ef1a028cd369"
          }}
          style={styles.ImageBackground_I822_1721_425_656}
        />
      </View>
      <View style={styles.View_1107_4151}>
        <Text style={styles.Text_1107_4151}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("214%") },
  View_822_1746: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1746_673_1133: {
    flexGrow: 1,
    width: wp("108%"),
    height: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 179, 0, 1)"
  },
  ImageBackground_I822_1746_585_713: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("10%")
  },
  ImageBackground_I822_1746_651_912: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("30%")
  },
  View_I822_1746_639_716: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%")
  },
  ImageBackground_I822_1746_560_875: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I822_1746_560_877: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_I822_1746_560_881: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I822_1746_560_899: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I822_1746_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2503: {
    width: wp("105%"),
    minWidth: wp("105%"),
    height: hp("157%"),
    minHeight: hp("157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_822_1745: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("149%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1745_673_1228: {
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
  View_I822_1745_673_1228_673_1115: {
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
  View_I822_1745_673_1228_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1745_673_1228_673_1116: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13.348886489868164,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I822_1745_673_1118: {
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
  View_I822_1745_673_1118_673_1115: {
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
  View_I822_1745_673_1118_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1745_673_1118_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.348886489868164,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I822_1745_673_1121: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1745_673_1121_673_1115: {
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
  View_I822_1745_673_1121_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1745_673_1121_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.348886489868164,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I822_1745_673_1124: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1745_673_1124_673_1115: {
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
  View_I822_1745_673_1124_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1745_673_1124_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.348886489868164,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I822_1745_673_1127: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1745_673_1127_673_1115: {
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
  View_I822_1745_673_1127_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1745_673_1127_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.348886489868164,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I822_1745_673_1130: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("1%")
  },
  View_861_2979: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2979_823_1915: {
    flexGrow: 1,
    width: wp("95%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I861_2979_823_1919: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_I861_2979_823_1919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  View_I861_2979_823_1920: {
    flexGrow: 1,
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_I861_2979_823_1920: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I861_2979_823_1996: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("59%")
  },
  View_I861_2979_823_1921: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_I861_2979_823_1921: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14.151124954223633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_823_1923: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I823_1923_823_1915: {
    flexGrow: 1,
    width: wp("95%"),
    height: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I823_1923_823_1919: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_I823_1923_823_1919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  View_I823_1923_823_1920: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_I823_1923_823_1920: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I823_1923_823_1996: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("59%")
  },
  View_I823_1923_823_1921: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_I823_1923_823_1921: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14.151124954223633,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_822_1722: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_822_1723: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_822_1724: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_822_1725: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  ImageBackground_822_1726: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%")
  },
  View_822_1727: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_822_1727: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.117542266845703,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_822_1728: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_822_1728: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.109146118164062,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_822_1729: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I822_1729_823_2038: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I822_1729_823_2044: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_I822_1729_823_2045: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_I822_1729_823_2042: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    borderColor: "rgba(20, 20, 42, 1)",
    borderWidth: 1.008395791053772
  },
  ImageBackground_822_1730: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("1%")
  },
  View_822_1731: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1731_671_1047: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I822_1731_671_1048: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I822_1731_671_1049: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_822_1742: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_822_1743: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1743_673_1070: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1743_673_1070: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.117541313171387,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14117541313171386,
    textTransform: "none"
  },
  ImageBackground_I822_1743_673_1071: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_822_1744: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I822_1744_673_1070: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I822_1744_673_1070: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.117541313171387,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14117541313171386,
    textTransform: "none"
  },
  ImageBackground_I822_1744_673_1071: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_822_1721: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I822_1721_544_734: {
    flexGrow: 1,
    width: wp("104%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I822_1721_424_630: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I822_1721_424_634: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("3%")
  },
  ImageBackground_I822_1721_425_656: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("3%")
  },
  View_1107_4151: {
    width: wp("104%"),
    minWidth: wp("104%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1107_4151: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16.167917251586914,
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
