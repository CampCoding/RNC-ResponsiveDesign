// import React from 'react';

// import {Text, View} from 'react-native';
// import {SignUpScreen} from './components/CustomTextInput';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return <SignUpScreen />;
//   }
// }

// export default App;

import React from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {AppBtn} from './components/AppBtn';
import {rem} from './components/remWidth';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

const {width, height} = Dimensions.get('window');
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      realWidth: width,
      passInput: 'aaaaaaa',
      testTxt: 'Sign Up',
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', ({window}) => {
      const newWi = window.width;
      this.setState({
        realWidth: newWi,
      });
    });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change');
    // EventEmitter.remove('change');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 50,
        }}>
        <AppBtn
          plhol="password"
          value={this.state.passInput}
          onChange={text => {
            this.setState({
              passInput: text,
            });
          }}
        />
        <TextInput
          value={this.state.passInput}
          onChangeText={text => {
            this.setState({
              passInput: text,
            });
          }}
          style={{
            height: scale(40),
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 20,
            padding: 10,
          }}
          placeholder={'email'}
        />
        <View
          style={this.state.realWidth > 500 ? {flexDirection: 'row'} : null}>
          <View
            style={
              this.state.realWidth > 500 ? {flex: 1, marginEnd: 10} : null
            }>
            <AppBtn plhol="email" />
          </View>
          <View
            style={
              this.state.realWidth > 500 ? {flex: 1, marginStart: 10} : null
            }>
            <AppBtn plhol="confirm pass" />
          </View>
        </View>

        <Text
          style={{
            fontSize: scale(18),
          }}>
          {this.state.testTxt}
        </Text>
      </View>
    );
  }
}

export default App;
