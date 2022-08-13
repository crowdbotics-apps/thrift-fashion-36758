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
      <View style={styles.View_693_1379}>
        <View style={styles.View_I693_1379_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a6dc8d1-3dc6-421c-8993-a54b35332e40"
          }}
          style={styles.ImageBackground_I693_1379_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57ffd720-5369-450c-b1fb-92ba951efaa8"
          }}
          style={styles.ImageBackground_I693_1379_651_912}
        />
        <View style={styles.View_I693_1379_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6471c3f4-94c1-4a57-8a86-496543930eb9"
            }}
            style={styles.ImageBackground_I693_1379_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a26bfab-2b80-4923-b1eb-510260a65a68"
            }}
            style={styles.ImageBackground_I693_1379_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3db2d7ca-0c02-4b5d-9892-a08ce0ba29aa"
            }}
            style={styles.ImageBackground_I693_1379_560_881}
          />
        </View>
        <View style={styles.View_I693_1379_560_899}>
          <Text style={styles.Text_I693_1379_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
      <View style={styles.View_856_2431}>
        <View style={styles.View_856_2430}>
          <View style={styles.View_693_1311}>
            <Text style={styles.Text_693_1311}>You may also like</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddaf61a0-24c1-4c1f-a915-b71a88a513c0"
            }}
            style={styles.ImageBackground_693_1358}
          />
        </View>
        <View style={styles.View_693_1338}>
          <View style={styles.View_I693_1338_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e837c7a-2b0e-4771-a202-8196e51395c2"
              }}
              style={styles.ImageBackground_I693_1338_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61c54380-f032-4f6f-8187-e9db5d84f455"
              }}
              style={styles.ImageBackground_I693_1338_671_957}
            />
          </View>
          <View style={styles.View_I693_1338_671_962}>
            <View style={styles.View_I693_1338_671_961}>
              <View style={styles.View_I693_1338_671_946}>
                <Text style={styles.Text_I693_1338_671_946}>
                  H Nude Trouser
                </Text>
              </View>
            </View>
            <View style={styles.View_I693_1338_671_947}>
              <Text style={styles.Text_I693_1338_671_947}>$14</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_693_1359}>
          <View style={styles.View_I693_1359_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a92dd811-53fd-4af8-851a-07588ab8c994"
              }}
              style={styles.ImageBackground_I693_1359_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54d1b10d-e1c5-423e-a3e8-253bf8fd22ff"
              }}
              style={styles.ImageBackground_I693_1359_671_957}
            />
          </View>
          <View style={styles.View_I693_1359_671_962}>
            <View style={styles.View_I693_1359_671_961}>
              <View style={styles.View_I693_1359_671_946}>
                <Text style={styles.Text_I693_1359_671_946}>
                  Pro High Top Sandals
                </Text>
              </View>
            </View>
            <View style={styles.View_I693_1359_671_947}>
              <Text style={styles.Text_I693_1359_671_947}>$20</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_693_1339}>
          <View style={styles.View_I693_1339_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5bf917d-bd6c-4781-85a2-a612ff92ee9b"
              }}
              style={styles.ImageBackground_I693_1339_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b691bd6f-d600-4e00-bb85-3b62b1c57aa3"
              }}
              style={styles.ImageBackground_I693_1339_671_957}
            />
          </View>
          <View style={styles.View_I693_1339_671_962}>
            <View style={styles.View_I693_1339_671_961}>
              <View style={styles.View_I693_1339_671_946}>
                <Text style={styles.Text_I693_1339_671_946}>Dress T Top</Text>
              </View>
            </View>
            <View style={styles.View_I693_1339_671_947}>
              <Text style={styles.Text_I693_1339_671_947}>$10</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_693_1360}>
          <View style={styles.View_I693_1360_671_985}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ab87dce-8bc9-4114-ac2d-d1b0fcb9a8e0"
              }}
              style={styles.ImageBackground_I693_1360_671_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8edfad33-2e5d-4b36-8d72-1153f8fc1ed7"
              }}
              style={styles.ImageBackground_I693_1360_671_957}
            />
          </View>
          <View style={styles.View_I693_1360_671_962}>
            <View style={styles.View_I693_1360_671_961}>
              <View style={styles.View_I693_1360_671_946}>
                <Text style={styles.Text_I693_1360_671_946}>H Jean Jacket</Text>
              </View>
            </View>
            <View style={styles.View_I693_1360_671_947}>
              <Text style={styles.Text_I693_1360_671_947}>$15</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_856_2440}>
        <View style={styles.View_693_1248}>
          <Text style={styles.Text_693_1248}>
            Very Good Condition No Quality issues identified by our Team{" "}
          </Text>
        </View>
        <View style={styles.View_693_1250}>
          <Text style={styles.Text_693_1250}>
            All our items are hand selected for their quality and style. We only
            select the best second hand items for you, removing all torn or
            marked items from the system; any errors at all will be photographed
            and detailed in the description.
          </Text>
        </View>
        <View style={styles.View_693_1247}>
          <Text style={styles.Text_693_1247}>MATERIALS</Text>
        </View>
        <View style={styles.View_693_1249}>
          <Text style={styles.Text_693_1249}>Our Promise</Text>
        </View>
        <View style={styles.View_856_2439}>
          <View style={styles.View_693_1271}>
            <Text style={styles.Text_693_1271}>Do not use bleach</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e7bb15e-bd1f-4ca8-a3d3-a6754b466df3"
            }}
            style={styles.ImageBackground_693_1259}
          />
        </View>
        <View style={styles.View_856_2438}>
          <View style={styles.View_693_1272}>
            <Text style={styles.Text_693_1272}>Do not tumble dry</Text>
          </View>
          <View style={styles.View_693_1263}>
            <View style={styles.View_693_1278} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47668e42-df04-46a9-bd30-dbbc71fadb54"
              }}
              style={styles.ImageBackground_693_1284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75dcc9e3-59ec-4b3b-be8e-02065f27b39d"
              }}
              style={styles.ImageBackground_693_1288}
            />
          </View>
        </View>
        <View style={styles.View_856_2437}>
          <View style={styles.View_693_1274}>
            <Text style={styles.Text_693_1274}>
              Dry clean with tetrachloroethylene
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fadc5fc-28cd-4cee-96b5-099a53ea6b59"
            }}
            style={styles.ImageBackground_693_1265}
          />
        </View>
        <View style={styles.View_856_2436}>
          <View style={styles.View_693_1273}>
            <Text style={styles.Text_693_1273}>
              Iron at a maximum of 110ºC/230ºF
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6434ebac-000b-42c3-9cf8-8a66f6d2bf3f"
            }}
            style={styles.ImageBackground_693_1269}
          />
        </View>
      </View>
      <View style={styles.View_861_2986}>
        <View style={styles.View_I861_2986_693_1202} />
        <View style={styles.View_I861_2986_681_1225}>
          <View style={styles.View_I861_2986_681_1199}>
            <View style={styles.View_I861_2986_681_1200}>
              <Text style={styles.Text_I861_2986_681_1200}>Add to basket</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd650c45-65bc-4c74-976d-0ce9449e1ee4"
              }}
              style={styles.ImageBackground_I861_2986_681_1204}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3fa9d9f-61b2-4b06-99c7-3e042baf82b2"
          }}
          style={styles.ImageBackground_I861_2986_693_1203}
        />
      </View>
      <View style={styles.View_854_2425}>
        <View style={styles.View_684_1234}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fab112ea-76e2-4a98-af4f-1255d95bc96e"
            }}
            style={styles.ImageBackground_680_1230}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccdabca9-e14c-4841-84d8-fa9f7d0cd86e"
            }}
            style={styles.ImageBackground_680_1232}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cbb7e09-90f5-4d26-b903-8ef9dbaaa9d0"
            }}
            style={styles.ImageBackground_680_1234}
          />
          <View style={styles.View_684_1232}>
            <Text style={styles.Text_684_1232}>Color</Text>
          </View>
        </View>
        <View style={styles.View_684_1233}>
          <View style={styles.View_680_1236}>
            <Text style={styles.Text_680_1236}>Size</Text>
          </View>
          <View style={styles.View_680_1237}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d825c0f-00b3-4432-a7cf-744bacd7f6e5"
              }}
              style={styles.ImageBackground_I680_1237_671_1216}
            />
            <View style={styles.View_I680_1237_671_1206}>
              <Text style={styles.Text_I680_1237_671_1206}>S</Text>
            </View>
          </View>
          <View style={styles.View_680_1238}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a764249-cddb-44d0-8c12-653def4a2c7a"
              }}
              style={styles.ImageBackground_I680_1238_671_1216}
            />
            <View style={styles.View_I680_1238_671_1206}>
              <Text style={styles.Text_I680_1238_671_1206}>M</Text>
            </View>
          </View>
          <View style={styles.View_680_1239}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/396e1949-6d56-47a7-b55d-73067aee31cd"
              }}
              style={styles.ImageBackground_I680_1239_671_1216}
            />
            <View style={styles.View_I680_1239_671_1206}>
              <Text style={styles.Text_I680_1239_671_1206}>L</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_854_2424}>
          <View style={styles.View_854_2423}>
            <View style={styles.View_680_1222}>
              <Text style={styles.Text_680_1222}>ROAN</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24148ade-eda2-4db4-8143-ef367c76568f"
              }}
              style={styles.ImageBackground_680_1246}
            />
          </View>
          <View style={styles.View_680_1223}>
            <Text style={styles.Text_680_1223}>
              Thrift Jackets and Palazzo Trouser
            </Text>
          </View>
          <View style={styles.View_680_1229}>
            <Text style={styles.Text_680_1229}>$50</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_854_2422}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b842ba1-8fa3-42e5-b528-4db657242839"
          }}
          style={styles.ImageBackground_679_1194}
        />
        <View style={styles.View_679_1201}>
          <View style={styles.View_679_1196} />
          <View style={styles.View_679_1197} />
          <View style={styles.View_679_1199} />
          <View style={styles.View_679_1200} />
          <View style={styles.View_679_1198} />
        </View>
        <View style={styles.View_680_1221}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64dbcab7-8cc3-4c35-aeda-0d6b151c96b9"
            }}
            style={styles.ImageBackground_680_1220}
          />
          <View style={styles.View_680_1212}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c560a629-8ee7-496d-83d3-e1e0b8899edf"
              }}
              style={styles.ImageBackground_I680_1212_94_1950}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8526dda6-9cea-4b69-b8e6-94d7065f8ef1"
              }}
              style={styles.ImageBackground_I680_1212_94_1953}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_678_1163}>
        <View style={styles.View_I678_1163_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/257cad28-db02-4513-b1b1-ca4a2333310f"
          }}
          style={styles.TouchableOpacity_I678_1163_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fbcfa2c-34ad-413c-b162-9e2b79f61cff"
          }}
          style={styles.ImageBackground_I678_1163_424_634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17394e23-9f85-476d-8d20-05dd6d46c2f3"
          }}
          style={styles.ImageBackground_I678_1163_425_656}
        />
      </View>
      <View style={styles.View_1107_4149}>
        <Text style={styles.Text_1107_4149}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("309%") },
  View_693_1379: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("277%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I693_1379_673_1133: {
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
  ImageBackground_I693_1379_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I693_1379_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I693_1379_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I693_1379_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I693_1379_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I693_1379_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I693_1379_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I693_1379_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2431: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("184%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_856_2430: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_693_1311: {
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
  Text_693_1311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14.239999771118164,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.053333282470703,
    textTransform: "uppercase"
  },
  ImageBackground_693_1358: {
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
  View_693_1338: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I693_1338_671_985: {
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
  ImageBackground_I693_1338_671_944: {
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
  ImageBackground_I693_1338_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I693_1338_671_962: {
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
  View_I693_1338_671_961: {
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
  View_I693_1338_671_946: {
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
  Text_I693_1338_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I693_1338_671_947: {
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
  Text_I693_1338_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1359: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I693_1359_671_985: {
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
  ImageBackground_I693_1359_671_944: {
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
  ImageBackground_I693_1359_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I693_1359_671_962: {
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
  View_I693_1359_671_961: {
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
  View_I693_1359_671_946: {
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
  Text_I693_1359_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I693_1359_671_947: {
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
  Text_I693_1359_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1339: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I693_1339_671_985: {
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
  ImageBackground_I693_1339_671_944: {
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
  ImageBackground_I693_1339_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I693_1339_671_962: {
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
  View_I693_1339_671_961: {
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
  View_I693_1339_671_946: {
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
  Text_I693_1339_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I693_1339_671_947: {
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
  Text_I693_1339_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1360: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I693_1360_671_985: {
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
  ImageBackground_I693_1360_671_944: {
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
  ImageBackground_I693_1360_671_957: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I693_1360_671_962: {
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
  View_I693_1360_671_961: {
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
  View_I693_1360_671_946: {
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
  Text_I693_1360_671_946: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I693_1360_671_947: {
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
  Text_I693_1360_671_947: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_856_2440: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_693_1248: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_693_1248: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1250: {
    width: wp("90%"),
    minWidth: wp("90%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_693_1250: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1247: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_693_1247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.0266666412353516,
    textTransform: "uppercase"
  },
  View_693_1249: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_693_1249: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_856_2439: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%")
  },
  View_693_1271: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_693_1271: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_693_1259: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_856_2438: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("47%")
  },
  View_693_1272: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_693_1272: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_693_1263: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_693_1278: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.0133333206176758
  },
  ImageBackground_693_1284: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_693_1288: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_856_2437: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("54%")
  },
  View_693_1274: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_693_1274: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_693_1265: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_856_2436: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("60%")
  },
  View_693_1273: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_693_1273: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_693_1269: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_861_2986: {
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
  View_I861_2986_693_1202: {
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
  View_I861_2986_681_1225: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I861_2986_681_1199: {
    width: wp("39%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I861_2986_681_1200: {
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I861_2986_681_1200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.186666488647461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14186666488647462,
    textTransform: "uppercase"
  },
  ImageBackground_I861_2986_681_1204: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I861_2986_693_1203: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%")
  },
  View_854_2425: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_684_1234: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%")
  },
  ImageBackground_680_1230: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  ImageBackground_680_1232: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  ImageBackground_680_1234: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_684_1232: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_684_1232: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.15999984741211,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_684_1233: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%")
  },
  View_680_1236: {
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
  Text_680_1236: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 10.15999984741211,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_680_1237: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I680_1237_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I680_1237_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I680_1237_671_1206: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 8.133333206176758,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_680_1238: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I680_1238_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I680_1238_671_1206: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I680_1238_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.133333206176758,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_680_1239: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I680_1239_671_1216: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I680_1239_671_1206: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I680_1239_671_1206: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 8.133333206176758,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_854_2424: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_854_2423: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_680_1222: {
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
  Text_680_1222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4.053333282470703,
    textTransform: "uppercase"
  },
  ImageBackground_680_1246: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_680_1223: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_680_1223: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13.213333129882812,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_680_1229: {
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
  Text_680_1229: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14.239999771118164,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_854_2422: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_679_1194: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_679_1201: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("68%")
  },
  View_679_1196: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(136, 136, 136, 1)",
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5066666603088379
  },
  View_679_1197: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5066666603088379
  },
  View_679_1199: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5066666603088379
  },
  View_679_1200: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5066666603088379
  },
  View_679_1198: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5066666603088379
  },
  View_680_1221: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("60%")
  },
  ImageBackground_680_1220: {
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
  View_680_1212: {
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
  ImageBackground_I680_1212_94_1950: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I680_1212_94_1953: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_678_1163: {
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
  View_I678_1163_544_734: {
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
  TouchableOpacity_I678_1163_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  ImageBackground_I678_1163_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I678_1163_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_1107_4149: {
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
  Text_1107_4149: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16.266666412353516,
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
