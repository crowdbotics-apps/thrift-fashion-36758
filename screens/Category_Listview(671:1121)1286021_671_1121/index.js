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
      <View style={styles.View_852_2420}>
        <View style={styles.View_673_861}>
          <View style={styles.View_I673_861_671_1197}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a5e2229-9263-437e-a38d-bfa67a22c913"
              }}
              style={styles.ImageBackground_I673_861_671_1198}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69c6dc25-4b57-4d60-a561-44cfb183397e"
            }}
            style={styles.ImageBackground_I673_861_671_1199}
          />
          <View style={styles.View_I673_861_673_856}>
            <View style={styles.View_I673_861_671_1200}>
              <View style={styles.View_I673_861_671_1201}>
                <View style={styles.View_I673_861_671_1203}>
                  <Text style={styles.Text_I673_861_671_1203}>
                    Blue Fit Jeans
                  </Text>
                </View>
              </View>
              <View style={styles.View_I673_861_671_1204}>
                <Text style={styles.Text_I673_861_671_1204}>$10</Text>
              </View>
            </View>
            <View style={styles.View_I673_861_671_1247}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d8f700f-8443-4acf-8c70-cb29020bc2cc"
                }}
                style={styles.ImageBackground_I673_861_671_1238}
              />
              <View style={styles.View_I673_861_671_1239}>
                <Text style={styles.Text_I673_861_671_1239}>4.8 Ratings</Text>
              </View>
            </View>
            <View style={styles.View_I673_861_671_1248}>
              <View style={styles.View_I673_861_671_1240}>
                <Text style={styles.Text_I673_861_671_1240}>Size</Text>
              </View>
              <View style={styles.View_I673_861_673_857}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80cc5cef-67b9-4446-80bc-33108f802d78"
                  }}
                  style={styles.ImageBackground_I673_861_673_857_671_1216}
                />
                <View style={styles.View_I673_861_673_857_671_1206}>
                  <Text style={styles.Text_I673_861_673_857_671_1206}>S</Text>
                </View>
              </View>
              <View style={styles.View_I673_861_671_1219}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3023bfb-06bb-4f26-acbe-cc42db58a2de"
                  }}
                  style={styles.ImageBackground_I673_861_671_1219_671_1216}
                />
                <View style={styles.View_I673_861_671_1219_671_1206}>
                  <Text style={styles.Text_I673_861_671_1219_671_1206}>M</Text>
                </View>
              </View>
              <View style={styles.View_I673_861_671_1222}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d91d121-dcc7-4bdf-91aa-606c62015d15"
                  }}
                  style={styles.ImageBackground_I673_861_671_1222_671_1216}
                />
                <View style={styles.View_I673_861_671_1222_671_1206}>
                  <Text style={styles.Text_I673_861_671_1222_671_1206}>L</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_673_886}>
          <View style={styles.View_I673_886_671_1197}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4065993-8516-46e9-b0c4-53fcdf87ebbd"
              }}
              style={styles.ImageBackground_I673_886_671_1198}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ecf58a8-699b-423b-80c4-740db0123aba"
            }}
            style={styles.ImageBackground_I673_886_671_1199}
          />
          <View style={styles.View_I673_886_673_856}>
            <View style={styles.View_I673_886_671_1200}>
              <View style={styles.View_I673_886_671_1201}>
                <View style={styles.View_I673_886_671_1203}>
                  <Text style={styles.Text_I673_886_671_1203}>
                    Tie and Dye Shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I673_886_671_1204}>
                <Text style={styles.Text_I673_886_671_1204}>$20</Text>
              </View>
            </View>
            <View style={styles.View_I673_886_671_1247}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a386a316-03f4-43ac-9dc7-e59223c75e57"
                }}
                style={styles.ImageBackground_I673_886_671_1238}
              />
              <View style={styles.View_I673_886_671_1239}>
                <Text style={styles.Text_I673_886_671_1239}>4.8 Ratings</Text>
              </View>
            </View>
            <View style={styles.View_I673_886_671_1248}>
              <View style={styles.View_I673_886_671_1240}>
                <Text style={styles.Text_I673_886_671_1240}>Size</Text>
              </View>
              <View style={styles.View_I673_886_673_857}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d48f093a-74e1-45d2-a17a-c6eaaff56b65"
                  }}
                  style={styles.ImageBackground_I673_886_673_857_671_1216}
                />
                <View style={styles.View_I673_886_673_857_671_1206}>
                  <Text style={styles.Text_I673_886_673_857_671_1206}>S</Text>
                </View>
              </View>
              <View style={styles.View_I673_886_671_1219}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af790da2-b6d1-48b9-89b2-50b7241a97af"
                  }}
                  style={styles.ImageBackground_I673_886_671_1219_671_1216}
                />
                <View style={styles.View_I673_886_671_1219_671_1206}>
                  <Text style={styles.Text_I673_886_671_1219_671_1206}>M</Text>
                </View>
              </View>
              <View style={styles.View_I673_886_671_1222}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a2ba55f-4c81-4531-a4ce-cd8dda6dcda2"
                  }}
                  style={styles.ImageBackground_I673_886_671_1222_671_1216}
                />
                <View style={styles.View_I673_886_671_1222_671_1206}>
                  <Text style={styles.Text_I673_886_671_1222_671_1206}>L</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_673_1232}>
          <View style={styles.View_I673_1232_673_1228}>
            <View style={styles.View_I673_1232_673_1228_673_1115} />
            <View style={styles.View_I673_1232_673_1228_673_1116}>
              <Text style={styles.Text_I673_1232_673_1228_673_1116}>1</Text>
            </View>
          </View>
          <View style={styles.View_I673_1232_673_1118}>
            <View style={styles.View_I673_1232_673_1118_673_1115} />
            <View style={styles.View_I673_1232_673_1118_673_1116}>
              <Text style={styles.Text_I673_1232_673_1118_673_1116}>2</Text>
            </View>
          </View>
          <View style={styles.View_I673_1232_673_1121}>
            <View style={styles.View_I673_1232_673_1121_673_1115} />
            <View style={styles.View_I673_1232_673_1121_673_1116}>
              <Text style={styles.Text_I673_1232_673_1121_673_1116}>3</Text>
            </View>
          </View>
          <View style={styles.View_I673_1232_673_1124}>
            <View style={styles.View_I673_1232_673_1124_673_1115} />
            <View style={styles.View_I673_1232_673_1124_673_1116}>
              <Text style={styles.Text_I673_1232_673_1124_673_1116}>4</Text>
            </View>
          </View>
          <View style={styles.View_I673_1232_673_1127}>
            <View style={styles.View_I673_1232_673_1127_673_1115} />
            <View style={styles.View_I673_1232_673_1127_673_1116}>
              <Text style={styles.Text_I673_1232_673_1127_673_1116}>5</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcbb1402-d244-41a7-9c19-68f159d97501"
            }}
            style={styles.ImageBackground_I673_1232_673_1130}
          />
        </View>
        <View style={styles.View_861_2954}>
          <View style={styles.View_I861_2954_671_1197}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/704913f0-606c-4575-8263-081c28886136"
              }}
              style={styles.ImageBackground_I861_2954_671_1198}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e315ddc3-fbff-486f-ac25-5c1ca0697308"
            }}
            style={styles.ImageBackground_I861_2954_671_1199}
          />
          <View style={styles.View_I861_2954_673_856}>
            <View style={styles.View_I861_2954_671_1200}>
              <View style={styles.View_I861_2954_671_1201}>
                <View style={styles.View_I861_2954_671_1203}>
                  <Text style={styles.Text_I861_2954_671_1203}>
                    High Waist Jeans
                  </Text>
                </View>
              </View>
              <View style={styles.View_I861_2954_671_1204}>
                <Text style={styles.Text_I861_2954_671_1204}>$40</Text>
              </View>
            </View>
            <View style={styles.View_I861_2954_671_1247}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43b277ae-bad5-4220-9329-6b056f49a276"
                }}
                style={styles.ImageBackground_I861_2954_671_1238}
              />
              <View style={styles.View_I861_2954_671_1239}>
                <Text style={styles.Text_I861_2954_671_1239}>4.8 Ratings</Text>
              </View>
            </View>
            <View style={styles.View_I861_2954_671_1248}>
              <View style={styles.View_I861_2954_671_1240}>
                <Text style={styles.Text_I861_2954_671_1240}>Size</Text>
              </View>
              <View style={styles.View_I861_2954_673_857}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34b14764-2b0e-474a-89f4-2343098d82d5"
                  }}
                  style={styles.ImageBackground_I861_2954_673_857_671_1216}
                />
                <View style={styles.View_I861_2954_673_857_671_1206}>
                  <Text style={styles.Text_I861_2954_673_857_671_1206}>S</Text>
                </View>
              </View>
              <View style={styles.View_I861_2954_671_1219}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7830e572-688a-4b78-bde8-6ad007103151"
                  }}
                  style={styles.ImageBackground_I861_2954_671_1219_671_1216}
                />
                <View style={styles.View_I861_2954_671_1219_671_1206}>
                  <Text style={styles.Text_I861_2954_671_1219_671_1206}>M</Text>
                </View>
              </View>
              <View style={styles.View_I861_2954_671_1222}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9519f621-0fd5-4152-9124-e7a6cc702797"
                  }}
                  style={styles.ImageBackground_I861_2954_671_1222_671_1216}
                />
                <View style={styles.View_I861_2954_671_1222_671_1206}>
                  <Text style={styles.Text_I861_2954_671_1222_671_1206}>L</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_673_1250}>
          <View style={styles.View_I673_1250_673_1133} />
          <View style={styles.View_I673_1250_560_906} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/004b55e0-1621-4e38-8e61-5f0da54f1553"
            }}
            style={styles.ImageBackground_I673_1250_585_713}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c23a3aa-eb8d-478b-9463-08e6c5fca54b"
            }}
            style={styles.ImageBackground_I673_1250_651_912}
          />
          <View style={styles.View_I673_1250_639_716}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5414a03-a864-4219-ba69-1269d9263eaa"
              }}
              style={styles.ImageBackground_I673_1250_560_875}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0344d4fb-071d-4bbd-8b3a-c2e252562ad8"
              }}
              style={styles.ImageBackground_I673_1250_560_877}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75fd569f-1dd7-4158-887c-56ccc093adf1"
              }}
              style={styles.ImageBackground_I673_1250_560_881}
            />
          </View>
          <View style={styles.View_I673_1250_560_899}>
            <Text style={styles.Text_I673_1250_560_899}>
              aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 -
              Everyday
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_671_1123}>
        <View style={styles.View_671_1125} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e98147e4-b5f0-4acf-952e-eb70462e7f2e"
          }}
          style={styles.ImageBackground_671_1126}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b839713-63c9-4dd1-bf53-dbfc8b275973"
          }}
          style={styles.ImageBackground_671_1127}
        />
        <View style={styles.View_671_1128}>
          <Text style={styles.Text_671_1128}>4500 Apparel</Text>
        </View>
        <View style={styles.View_671_1129}>
          <Text style={styles.Text_671_1129}>New</Text>
        </View>
        <View style={styles.View_671_1130}>
          <View style={styles.View_I671_1130_671_1179}>
            <View style={styles.View_I671_1130_671_1173} />
            <View style={styles.View_I671_1130_671_1177} />
            <View style={styles.View_I671_1130_671_1176} />
            <View style={styles.View_I671_1130_671_1178} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb8b0a7d-d887-417c-9854-52a7fb8ebd44"
          }}
          style={styles.ImageBackground_671_1131}
        />
        <View style={styles.View_671_1132}>
          <View style={styles.View_I671_1132_671_1047}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I671_1132_671_1048}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87bb4b52-6303-4872-94bc-edd11077389a"
              }}
              style={styles.ImageBackground_I671_1132_671_1049}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_671_1122}>
        <View style={styles.View_I671_1122_544_734} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90dea2a2-96ac-4d4c-bd95-3adcb6361b19"
          }}
          style={styles.ImageBackground_I671_1122_424_630}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1db7b52f-8ee8-4c2f-9772-9596a4013376"
          }}
          style={styles.TouchableOpacity_I671_1122_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/351d84e1-be9e-47ff-8a1f-97aadc1bd2ad"
          }}
          style={styles.ImageBackground_I671_1122_425_656}
        />
      </View>
      <View style={styles.View_1107_4148}>
        <Text style={styles.Text_1107_4148}>THRIFT FASHION </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("124%") },
  View_852_2420: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_673_861: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_861_671_1197: {
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
  ImageBackground_I673_861_671_1198: {
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
  ImageBackground_I673_861_671_1199: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("15%")
  },
  View_I673_861_673_856: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_861_671_1200: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_861_671_1201: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_861_671_1203: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1203: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_671_1204: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1204: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_671_1247: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_861_671_1238: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_861_671_1239: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1239: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_671_1248: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_861_671_1240: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1240: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_673_857: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_861_673_857_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_861_673_857_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_673_857_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_671_1219: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_861_671_1219_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_861_671_1219_671_1206: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1219_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_861_671_1222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_861_671_1222_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_861_671_1222_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_861_671_1222_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_673_886: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_886_671_1197: {
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
  ImageBackground_I673_886_671_1198: {
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
  ImageBackground_I673_886_671_1199: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("15%")
  },
  View_I673_886_673_856: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_886_671_1200: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_886_671_1201: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_886_671_1203: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1203: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_671_1204: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1204: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_671_1247: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_886_671_1238: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_886_671_1239: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1239: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_671_1248: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_886_671_1240: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1240: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_673_857: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_886_673_857_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_886_673_857_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_673_857_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_671_1219: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_886_671_1219_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_886_671_1219_671_1206: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1219_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_886_671_1222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I673_886_671_1222_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I673_886_671_1222_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_886_671_1222_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_673_1232: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_1232_673_1228: {
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
  View_I673_1232_673_1228_673_1115: {
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
  View_I673_1232_673_1228_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_1232_673_1228_673_1116: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13.442678451538086,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_1232_673_1118: {
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
  View_I673_1232_673_1118_673_1115: {
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
  View_I673_1232_673_1118_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_1232_673_1118_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.442678451538086,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_1232_673_1121: {
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
  View_I673_1232_673_1121_673_1115: {
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
  View_I673_1232_673_1121_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_1232_673_1121_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.442678451538086,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_1232_673_1124: {
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
  View_I673_1232_673_1124_673_1115: {
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
  View_I673_1232_673_1124_673_1116: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_1232_673_1124_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.442678451538086,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I673_1232_673_1127: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_1232_673_1127_673_1115: {
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
  View_I673_1232_673_1127_673_1116: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I673_1232_673_1127_673_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.442678451538086,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I673_1232_673_1130: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("1%")
  },
  View_861_2954: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2954_671_1197: {
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
  ImageBackground_I861_2954_671_1198: {
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
  ImageBackground_I861_2954_671_1199: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("15%")
  },
  View_I861_2954_673_856: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2954_671_1200: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2954_671_1201: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2954_671_1203: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1203: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_671_1204: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1204: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_671_1247: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2954_671_1238: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I861_2954_671_1239: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1239: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_671_1248: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2954_671_1240: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1240: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.170170783996582,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_673_857: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2954_673_857_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I861_2954_673_857_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_673_857_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_671_1219: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2954_671_1219_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I861_2954_671_1219_671_1206: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1219_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2954_671_1222: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2954_671_1222_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I861_2954_671_1222_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_2954_671_1222_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.141809463500977,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_673_1250: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I673_1250_673_1133: {
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
  View_I673_1250_560_906: {
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
  ImageBackground_I673_1250_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I673_1250_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I673_1250_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I673_1250_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I673_1250_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I673_1250_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I673_1250_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I673_1250_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.22689437866211,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_671_1123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_671_1125: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_671_1126: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%")
  },
  ImageBackground_671_1127: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%")
  },
  View_671_1128: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_671_1128: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11.198532104492188,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_671_1129: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_671_1129: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.184350967407227,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_671_1130: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I671_1130_671_1179: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I671_1130_671_1173: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 1.0141808986663818
  },
  View_I671_1130_671_1177: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 1.0141808986663818
  },
  View_I671_1130_671_1176: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 1.0141808986663818
  },
  View_I671_1130_671_1178: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    borderColor: "rgba(20, 20, 43, 1)",
    borderWidth: 1.0141808986663818
  },
  ImageBackground_671_1131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%")
  },
  View_671_1132: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I671_1132_671_1047: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I671_1132_671_1048: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I671_1132_671_1049: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_671_1122: {
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
  View_I671_1122_544_734: {
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
  ImageBackground_I671_1122_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I671_1122_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I671_1122_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("3%")
  },
  View_1107_4148: {
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
  Text_1107_4148: {
    color: "rgba(249, 160, 0, 1)",
    fontSize: 16.28361701965332,
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
