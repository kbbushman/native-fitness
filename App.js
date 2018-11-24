import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import TabNavigator from './components/TabNavigator';
import { Constants } from 'expo';
import { purple } from './utils/colors';
import { setLocalNotification } from './utils/helpers';

const NativeStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class App extends React.Component {
  componentDidMount = () => {
    setLocalNotification();
  }
  

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NativeStatusBar backgroundColor={purple} barStyle='light-content' />
          <TabNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
