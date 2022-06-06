import React from 'react';
import {Input, InputArea} from './styles';

export default ({
  placeholder,
  value,
  onChangeText,
  password,
  editable,
  marginOne,
  styles,
  radiusTop,
  radiusBottom,
}) => {
  return (
    <InputArea
      marginOne={marginOne ? '1px' : '12px 0px'}
      radiusTop={radiusTop ? '12px' : '0px'}
      radiusBottom={radiusBottom ? '12px' : '0px'}
      styles={styles}>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        disabled
        editable={editable}
      />
    </InputArea>
  );
};
