import React from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigation from './src/navigation/StackNavigation';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

function App(): React.JSX.Element {

  return (
    <PaperProvider theme={DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StackNavigation />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

export default App;
