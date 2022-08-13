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
      <View style={styles.View_549_792}>
        <View style={styles.View_630_690}>
          <View style={styles.View_630_691} />
          <View style={styles.View_630_692} />
          <View style={styles.View_630_693} />
        </View>
        <View style={styles.View_549_791}>
          <View style={styles.View_430_761}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ad0245c-3f92-45c6-94ad-aedae195a66e"
              }}
              style={styles.ImageBackground_426_731}
            />
            <View style={styles.View_430_759}>
              <View style={styles.View_427_747}>
                <Text style={styles.Text_427_747}>
                  Harris Tweed Three button Jacket
                </Text>
              </View>
              <View style={styles.View_430_752}>
                <Text style={styles.Text_430_752}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_540_668}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db8f0f40-a741-4577-9075-d9c8e42254da"
              }}
              style={styles.ImageBackground_I540_668_426_731}
            />
            <View style={styles.View_I540_668_430_759}>
              <View style={styles.View_I540_668_427_747}>
                <Text style={styles.Text_I540_668_427_747}>
                  Cashmere Blend Cropped Jacket SW1WJ285-AM
                </Text>
              </View>
              <View style={styles.View_I540_668_430_752}>
                <Text style={styles.Text_I540_668_430_752}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_549_781}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04fc331c-f323-4d9d-9de0-56aaa268add3"
              }}
              style={styles.ImageBackground_I549_781_426_731}
            />
            <View style={styles.View_I549_781_430_759}>
              <View style={styles.View_I549_781_427_747}>
                <Text style={styles.Text_I549_781_427_747}>
                  Harris Tweed Three-button Jacket
                </Text>
              </View>
              <View style={styles.View_I549_781_430_752}>
                <Text style={styles.Text_I549_781_430_752}>$120</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_549_786}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b888d11f-6035-4063-8e1e-7df021610640"
              }}
              style={styles.ImageBackground_I549_786_426_731}
            />
            <View style={styles.View_I549_786_430_759}>
              <View style={styles.View_I549_786_427_747}>
                <Text style={styles.Text_I549_786_427_747}>
                  1WN reversible angora cardigan
                </Text>
              </View>
              <View style={styles.View_I549_786_430_752}>
                <Text style={styles.Text_I549_786_430_752}>$120</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_852_2400}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d51ffa3-3655-4e07-9482-52cc77507c89"
            }}
            style={styles.ImageBackground_630_689}
          />
          <View style={styles.View_431_885}>
            <Text style={styles.Text_431_885}>Just for You</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1206_1451}>
        <View style={styles.View_849_2377}>
          <View style={styles.View_849_2385}>
            <View style={styles.View_I849_2385_746_1891}>
              <Text style={styles.Text_I849_2385_746_1891}>Explore More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c9a120c-d95d-4cb0-a70b-003f7642dee7"
              }}
              style={styles.ImageBackground_I849_2385_746_1895}
            />
          </View>
          <View style={styles.View_861_2873}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cd0e53d-4c34-4cfa-b48f-517375367ac5"
              }}
              style={styles.ImageBackground_I861_2873_431_886}
            />
            <View style={styles.View_I861_2873_431_891}>
              <View style={styles.View_I861_2873_431_892}>
                <Text style={styles.Text_I861_2873_431_892}>
                  21WN reversible angora cardigan
                </Text>
              </View>
              <View style={styles.View_I861_2873_431_893}>
                <Text style={styles.Text_I861_2873_431_893}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I861_2873_431_909}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12e60eaf-94a1-48a8-b83e-9e2a8540fced"
                }}
                style={styles.ImageBackground_I861_2873_431_894}
              />
              <View style={styles.View_I861_2873_431_895}>
                <Text style={styles.Text_I861_2873_431_895}>new</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_549_760}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83445726-f5a1-4beb-9391-fd2f26658d4e"
              }}
              style={styles.ImageBackground_I549_760_431_886}
            />
            <View style={styles.View_I549_760_431_891}>
              <View style={styles.View_I549_760_431_892}>
                <Text style={styles.Text_I549_760_431_892}>
                  21WN reversible angora cardigan
                </Text>
              </View>
              <View style={styles.View_I549_760_431_893}>
                <Text style={styles.Text_I549_760_431_893}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I549_760_431_909}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9ba89da-dd64-45e6-a5b4-e4b1f68f0e08"
                }}
                style={styles.ImageBackground_I549_760_431_894}
              />
              <View style={styles.View_I549_760_431_895}>
                <Text style={styles.Text_I549_760_431_895}>new</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_549_752}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec5b1b65-71f3-4339-9658-1964bead43c1"
              }}
              style={styles.ImageBackground_I549_752_431_886}
            />
            <View style={styles.View_I549_752_431_891}>
              <View style={styles.View_I549_752_431_892}>
                <Text style={styles.Text_I549_752_431_892}>
                  21WN reversible angora cardigan
                </Text>
              </View>
              <View style={styles.View_I549_752_431_893}>
                <Text style={styles.Text_I549_752_431_893}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I549_752_431_909}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b56029e-7e49-4e86-96dc-75de06772eb4"
                }}
                style={styles.ImageBackground_I549_752_431_894}
              />
              <View style={styles.View_I549_752_431_895}>
                <Text style={styles.Text_I549_752_431_895}>new</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_549_761}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97d7314c-1e42-4a5f-901d-151518b6c5e1"
              }}
              style={styles.ImageBackground_I549_761_431_886}
            />
            <View style={styles.View_I549_761_431_891}>
              <View style={styles.View_I549_761_431_892}>
                <Text style={styles.Text_I549_761_431_892}>Oblong bag</Text>
              </View>
              <View style={styles.View_I549_761_431_893}>
                <Text style={styles.Text_I549_761_431_893}>$120</Text>
              </View>
            </View>
            <View style={styles.View_I549_761_431_909}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6eca2f1-cbb0-4491-9bba-c50ddd67cbda"
                }}
                style={styles.ImageBackground_I549_761_431_894}
              />
              <View style={styles.View_I549_761_431_895}>
                <Text style={styles.Text_I549_761_431_895}>new</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_849_2378}>
            <View style={styles.View_549_736}>
              <Text style={styles.Text_549_736}>New Arrival</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/524eaa30-91cc-4171-b936-47b2e2d97e18"
              }}
              style={styles.ImageBackground_619_690}
            />
          </View>
          <View style={styles.View_849_2379}>
            <View style={styles.View_549_750}>
              <View style={styles.View_549_745}>
                <Text style={styles.Text_549_745}>All</Text>
              </View>
              <View style={styles.View_549_746}>
                <Text style={styles.Text_549_746}>Apparel</Text>
              </View>
              <View style={styles.View_549_747}>
                <Text style={styles.Text_549_747}>Dress</Text>
              </View>
              <View style={styles.View_549_748}>
                <Text style={styles.Text_549_748}>Tshirt</Text>
              </View>
              <View style={styles.View_549_751}>
                <Text style={styles.Text_549_751}>Bag</Text>
              </View>
            </View>
            <View style={styles.View_557_870} />
          </View>
        </View>
      </View>
      <View style={styles.View_849_2376}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b96cf025-3a8d-41e0-bf88-1bdbf86bb8ae"
          }}
          style={styles.ImageBackground_527_685}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc736b16-c9c7-4d5e-aa2f-6d0bd2cde67f"
          }}
          style={styles.ImageBackground_426_661}
        />
        <View source={{ uri: "null" }} style={styles.View_527_686} />
        <View style={styles.View_544_728}>
          <View style={styles.View_544_729} />
          <View style={styles.View_544_730} />
          <View style={styles.View_544_731} />
        </View>
        <View style={styles.View_751_1733}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24bb4811-6788-41d7-9375-56185128e6ed"
            }}
            style={styles.ImageBackground_751_1734}
          />
          <View style={styles.View_751_1737}>
            <Text style={styles.Text_751_1737}>Explore Collection</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_861_2844}>
        <View style={styles.View_I861_2844_544_734} />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b279f02-975e-47f0-851d-186211f36c79"
          }}
          style={styles.TouchableOpacity_I861_2844_424_630}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("658_721"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/baf4a9e1-484d-45ac-b03e-422c173acc55"
          }}
          style={styles.TouchableOpacity_I861_2844_424_634}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("660_812"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/600ca3a5-01d5-4e8b-9633-4c050d9ff7a4"
          }}
          style={styles.ImageBackground_I861_2844_425_656}
        />
        <View style={styles.View_I861_2844_658_707} />
      </View>
      <View style={styles.View_1107_4144}>
        <Text style={styles.Text_1107_4144}>THRIFT FASHION</Text>
      </View>
      <View style={styles.View_1209_1481}>
        <View style={styles.View_I1209_1481_673_1133} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c8f07c3-c4fc-4bf9-90cc-39d1354d6725"
          }}
          style={styles.ImageBackground_I1209_1481_585_713}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e57f1f7e-b9f1-4d9d-a9b4-8e02fec85f2d"
          }}
          style={styles.ImageBackground_I1209_1481_651_912}
        />
        <View style={styles.View_I1209_1481_639_716}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e2e714c-951a-4e94-ac4f-8d0d9c59bbd7"
            }}
            style={styles.ImageBackground_I1209_1481_560_875}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a5c7c1d-d96c-4744-83cd-1d5e203b8747"
            }}
            style={styles.ImageBackground_I1209_1481_560_877}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95983287-a5b5-42e7-9ce2-7834ddd9b307"
            }}
            style={styles.ImageBackground_I1209_1481_560_881}
          />
        </View>
        <View style={styles.View_I1209_1481_560_899}>
          <Text style={styles.Text_I1209_1481_560_899}>
            aptechthriftcloth@gmail.com +234 091256789 08:00 - 24:00 - Everyday
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(252, 252, 252, 1)" },
  View_2: { height: hp("308%") },
  View_549_792: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_630_690: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("69%")
  },
  View_630_691: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(136, 136, 136, 1)"
  },
  View_630_692: {
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
    borderWidth: 0.5
  },
  View_630_693: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    borderColor: "rgba(136, 136, 136, 1)",
    borderWidth: 0.5
  },
  View_549_791: {
    width: wp("276%"),
    minWidth: wp("276%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%")
  },
  View_430_761: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_426_731: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_430_759: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_427_747: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_427_747: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_430_752: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_430_752: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_540_668: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I540_668_426_731: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I540_668_430_759: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I540_668_427_747: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I540_668_427_747: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I540_668_430_752: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I540_668_430_752: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_781: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("139%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I549_781_426_731: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I549_781_430_759: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I549_781_427_747: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I549_781_427_747: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_781_430_752: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I549_781_430_752: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_786: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("209%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I549_786_426_731: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I549_786_430_759: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I549_786_427_747: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I549_786_427_747: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_786_430_752: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I549_786_430_752: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_852_2400: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_630_689: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("5%")
  },
  View_431_885: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_431_885: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  View_1206_1451: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_849_2377: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_849_2385: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I849_2385_746_1891: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I849_2385_746_1891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I849_2385_746_1895: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_861_2873: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I861_2873_431_886: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I861_2873_431_891: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I861_2873_431_892: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I861_2873_431_892: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2873_431_893: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I861_2873_431_893: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I861_2873_431_909: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I861_2873_431_894: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I861_2873_431_895: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I861_2873_431_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_760: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I549_760_431_886: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I549_760_431_891: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I549_760_431_892: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I549_760_431_892: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_760_431_893: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I549_760_431_893: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_760_431_909: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I549_760_431_894: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I549_760_431_895: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I549_760_431_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_752: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I549_752_431_886: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I549_752_431_891: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I549_752_431_892: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I549_752_431_892: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_752_431_893: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I549_752_431_893: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_752_431_909: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I549_752_431_894: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I549_752_431_895: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I549_752_431_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_761: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I549_761_431_886: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I549_761_431_891: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I549_761_431_892: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I549_761_431_892: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_761_431_893: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I549_761_431_893: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I549_761_431_909: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I549_761_431_894: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I549_761_431_895: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I549_761_431_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_849_2378: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_736: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 4,
    textTransform: "uppercase"
  },
  ImageBackground_619_690: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("5%")
  },
  View_849_2379: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_750: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%")
  },
  View_549_745: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_745: {
    color: "rgba(33, 40, 6, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_549_746: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_746: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_549_747: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_747: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_549_748: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_748: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_549_751: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_549_751: {
    color: "rgba(136, 136, 136, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_557_870: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%"),
    backgroundColor: "rgba(221, 133, 96, 1)"
  },
  View_849_2376: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_527_685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-5%")
  },
  ImageBackground_426_661: {
    width: wp("56%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%")
  },
  View_527_686: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("43%")
  },
  View_544_728: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("78%")
  },
  View_544_729: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_544_730: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 0.5
  },
  View_544_731: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    borderColor: "rgba(252, 252, 252, 1)",
    borderWidth: 0.5
  },
  View_751_1733: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0.4000000059604645)"
  },
  ImageBackground_751_1734: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_751_1737: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_751_1737: {
    color: "rgba(252, 252, 252, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_861_2844: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 234, 239, 1)",
    overflow: "hidden"
  },
  View_I861_2844_544_734: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(231, 234, 239, 1)"
  },
  TouchableOpacity_I861_2844_424_630: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  TouchableOpacity_I861_2844_424_634: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("3%")
  },
  ImageBackground_I861_2844_425_656: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("3%")
  },
  View_I861_2844_658_707: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1107_4144: {
    width: wp("99%"),
    minWidth: wp("99%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1107_4144: {
    color: "rgba(250, 179, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1209_1481: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("274%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1209_1481_673_1133: {
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
  ImageBackground_I1209_1481_585_713: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("10%")
  },
  ImageBackground_I1209_1481_651_912: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("29%")
  },
  View_I1209_1481_639_716: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%")
  },
  ImageBackground_I1209_1481_560_875: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1209_1481_560_877: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_I1209_1481_560_881: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  View_I1209_1481_560_899: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_I1209_1481_560_899: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13.212766647338867,
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
