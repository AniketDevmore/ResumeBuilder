import React from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './src/navigation/StackNavigation';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StackNavigation/>
    </GestureHandlerRootView>
  );
}

export default App;
