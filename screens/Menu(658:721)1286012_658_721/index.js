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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b7f85ea-4b57-4c38-bc27-653fbfab3950"
        }}
        style={styles.ImageBackground_660_801}
      />
      <View style={styles.View_659_727}>
        <Text style={styles.Text_659_727}>Women</Text>
      </View>
      <View style={styles.View_659_739}>
        <Text style={styles.Text_659_739}>New Apparel Bag Shoes</Text>
      </View>
      <View style={styles.View_659_733}>
        <Text style={styles.Text_659_733}>Man</Text>
      </View>
      <View style={styles.View_659_734}>
        <Text style={styles.Text_659_734}>Kids</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79abed3f-a016-4238-8aa6-06f4862eb6d8"
        }}
        style={styles.ImageBackground_659_735}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_852_2417}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("861_2366"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85cbacbb-b793-45e7-b3b8-3595e7675235"
          }}
          style={styles.ImageBackground_659_768}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c346360e-fc97-4d28-ba4b-ff55d254642f"
          }}
          style={styles.ImageBackground_659_770}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02ef21ba-96a7-4da6-8f34-c146f952cf99"
          }}
          style={styles.ImageBackground_659_772}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2e937ba-1156-424e-9534-afc0017b85df"
          }}
          style={styles.ImageBackground_659_774}
        />
        <View style={styles.View_659_776} />
      </TouchableOpacity>
      <View style={styles.View_660_780}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeb7642d-199c-4106-911f-0a6a9cbefbfc"
          }}
          style={styles.ImageBackground_660_781}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2cbe81b-0ac7-4a6d-9b5d-2441da86d5de"
          }}
          style={styles.ImageBackground_660_783}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f0c64a3-ccde-4849-ab4a-bb48d128bdbc"
          }}
          style={styles.ImageBackground_660_785}
        />
      </View>
      <View style={styles.View_660_810}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fa57fb8-078f-4d0a-a74a-e2f2f4cd0f2d"
          }}
          style={styles.ImageBackground_660_797}
        />
        <View style={styles.View_660_790}>
          <Text style={styles.Text_660_790}>Store locator</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72938d65-31ee-4133-9072-faaf4f6bf562"
        }}
        style={styles.ImageBackground_660_800}
      />
      <View style={styles.View_659_738} />
      <View style={styles.View_660_809}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40a1e5cf-030d-4acd-b077-5e52e9749269"
          }}
          style={styles.ImageBackground_660_806}
        />
        <View style={styles.View_660_808}>
          <Text style={styles.Text_660_808}>+234 091256789</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61f5079f-ff70-4654-890c-8fd55f7dbabe"
        }}
        style={styles.ImageBackground_660_811}
      />
      <View style={styles.View_1107_4146}>
        <Text style={styles.Text_1107_4146}>THRIFT FASHION</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_660_801: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%")
  },
  View_659_727: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_659_727: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "uppercase"
  },
  View_659_739: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_659_739: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_659_733: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_659_733: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "uppercase"
  },
  View_659_734: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_659_734: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 3,
    textTransform: "uppercase"
  },
  ImageBackground_659_735: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  TouchableOpacity_852_2417: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_659_768: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_659_770: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_659_772: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_659_774: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_659_776: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_660_780: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("90%")
  },
  ImageBackground_660_781: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_660_783: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_660_785: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_660_810: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_660_797: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_660_790: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_660_790: {
    color: "rgba(85, 85, 85, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_660_800: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%")
  },
  View_659_738: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("15%"),
    backgroundColor: "rgba(221, 133, 96, 1)"
  },
  View_660_809: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_660_806: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_660_808: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_660_808: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_660_811: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("85%")
  },
  View_1107_4146: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1107_4146: {
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
