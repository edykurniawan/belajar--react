import React from "react";
import {View, ScrollView} from 'react-native';
import MateriFlexbox from "./MateriFlexbox";
import PositionReactNative from "./PositionReactNative";
import SampleComponent from "./SampleComponent";
import StylingReactNativeComponent from "./StylingReactNativeComponent";

const App = () => {
  return (
  <View>
    <ScrollView>
    {/* <SampleComponent />
    <StylingReactNativeComponent />
    <MateriFlexbox /> */}
    <PositionReactNative />
    </ScrollView>
  </View>
  )
};

export default App; 