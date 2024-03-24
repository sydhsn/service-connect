import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {COLORS} from '../../../constants';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: '100%',
        backgroundColor: COLORS.primary,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
