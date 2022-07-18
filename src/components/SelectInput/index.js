import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

export default ({
  placeholder,
  options,
  setOption,
  marginOne,
  radiusTop,
  radiusBottom,
  width,
}) => {
  return (
    <SelectDropdown
      data={options}
      onSelect={(selectedItem, index) => {
        setOption(selectedItem);
      }}
      buttonStyle={{
        backgroundColor: '#d7d7d7',
        width: width ? width : '100%',
        height: 48,
        borderTopLeftRadius: radiusTop ? 12 : 0,
        borderTopRightRadius: radiusTop ? 12 : 0,
        borderBottomRightRadius: radiusBottom ? 12 : 0,
        borderBottomLeftRadius: radiusBottom ? 12 : 0,
        marginHorizontal: marginOne ? 1 : 0,
        marginVertical: marginOne ? 1 : 12,
      }}
      buttonTextStyle={{
        width: '100%',
        flex: 1,
        fontSize: 15,
        lineHeight: 15,
        color: '#7c899c',
        marginLeft: 12,
        marginRight: 12,
      }}
      search
      searchPlaceHolder={'Acha a opção'}
      searchInputStyle={{borderRadius: 10}}
      dropdownStyle={{borderRadius: 10}}
      rowTextStyle={{color: '#4f5967', fontSize: 15}}
      defaultButtonText={placeholder}
    />
  );
};
