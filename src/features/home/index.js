import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../shared-ui/Button";
import Homer from "../../shared-ui/Icon/svg/Homer";

import Swiper from 'react-native-swiper';

import Svg,{
    Circle
} from 'react-native-svg';

const divStyle = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const boldStyle = {
  fontFamily: 'Poppins-Bold',
  fontSize: 30,
};

const textStyle = {
  fontFamily: 'AmaticSC-Regular',
  fontSize: 30,
};

const lightStyle = {
  fontFamily: 'Poppins-Light',
  fontSize: 30,
};


const Home = ({ navigation }) => (
  // <View style={divStyle}>
  //   <Text style={titleStyle}>Hello</Text>
  //   <Text style={textStyle}>Home page</Text>
  //   <Svg
  //       height="100"
  //       width="100"
  //   >
  //       <Circle
  //           cx="50"
  //           cy="50"
  //           r="50"
  //           fill="pink"
  //       />
  //   </Svg>
  //   <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
  //   <Homer></Homer>
  // </View>
  <Swiper showsButtons={true}>
    <View style={divStyle}>
      <Text style={boldStyle}>Welcome</Text>
      <Text style={textStyle}>on</Text>
      <Text style={lightStyle}>Places</Text>
      <Button label="Start >" onPress={() => navigation.navigate("Places")} />
    </View>
    <View style={divStyle}>
      <Svg
          height="100"
          width="100"
      >
          <Circle
              cx="50"
              cy="50"
              r="50"
              fill="blue"
          />
      </Svg>
      <Text style={boldStyle}>Save your</Text>
      <Text style={textStyle}>favorite</Text>
      <Text style={boldStyle}>places</Text>
    </View>
    <View style={divStyle}>
      <Text style={boldStyle}>Share it</Text>
      <Text style={textStyle}>with your friends</Text>
      <Homer></Homer>
    </View>
  </Swiper>
);

export default Home;
