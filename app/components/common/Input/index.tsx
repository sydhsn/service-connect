import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InputTextProps {
  placeholder: string;
  icon: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<InputTextProps> = ({
  placeholder,
  icon,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name={icon} size={20} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          keyboardAppearance="default"
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
    maxWidth: 300,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Input;
