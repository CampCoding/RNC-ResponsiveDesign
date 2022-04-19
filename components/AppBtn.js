import React from 'react';
import {TextInput} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export class AppBtn extends React.Component {
  render() {
    return (
      <TextInput
        value={this.props.value}
        onChangeText={text => {
          this.props.onChange(text);
        }}
        style={{
          height: scale(40),
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          marginBottom: 20,
          padding: 10,
        }}
        placeholder={this.props.plhol}
      />
    );
  }
}
