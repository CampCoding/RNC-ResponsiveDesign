import React from 'react';
import {TextInput, View, Text, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
function Input(props) {
  return (
    <TextInput
      style={{
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
        padding: 10,
      }}
      placeholder={props.placeholder}
    />
  );
}

export class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      realWidth: width,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', ({window}) => {
      const {width} = window;
      this.setState({
        realWidth: width,
      });
    });
  }
  componentWillUnmount() {
    Dimensions.removeEventListener('change');
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 50,
        }}>
        <Input placeholder="Email" />
        <View
          style={this.state.realWidth > 500 ? {flexDirection: 'row'} : null}>
          <View
            style={
              this.state.realWidth > 500 ? {flex: 1, marginEnd: 10} : null
            }>
            <Input placeholder="Password" />
          </View>
          <View
            style={
              this.state.realWidth > 500 ? {flex: 1, marginStart: 10} : null
            }>
            <Input placeholder="Confirm Password" />
          </View>
        </View>

        <Text>Sign Up</Text>
      </View>
    );
  }
}
// export function SignUpScreen(props) {
//   const [realWidth, setRealWidth] = React.useState(width);

//   React.useEffect(() => {
// Dimensions.addEventListener('change', ({window}) => {
//   const {width} = window;
//   setRealWidth(width);
// });
//     return () => {
//       Dimensions.removeEventListener('change');
//     };
//   });
//   return (
// <View
//   style={{
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 50,
//   }}>
//   <Input placeholder="Email" />
//   <View style={realWidth > 500 ? {flexDirection: 'row'} : null}>
//     <View style={realWidth > 500 ? {flex: 1, marginEnd: 10} : null}>
//       <Input placeholder="Password" />
//     </View>
//     <View style={realWidth > 500 ? {flex: 1, marginStart: 10} : null}>
//       <Input placeholder="Confirm Password" />
//     </View>
//   </View>

//   <Text>Sign Up</Text>
// </View>
//   );
// }
