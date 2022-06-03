import React from 'react';
import {Input, InputArea} from './styles';

export default ({placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
