import React from "react";
import {View, ScrollView} from 'react-native';
import MateriFlexbox from "./MateriFlexbox";
import SampleComponent from "./SampleComponent";
import StylingReactNativeComponent from "./StylingReactNativeComponent";

const App = () => {
  return (
  <View>
    <ScrollView>
    {/* <SampleComponent />
    <StylingReactNativeComponent /> */}
    <MateriFlexbox />
    </ScrollView>
  </View>
  )
};

export default App; 