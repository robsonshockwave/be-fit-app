import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  TextName,
  TextRecord,
  TextRecordTitle,
  TextType,
  TextVerifyProgress,
  VerifyProgressButton,
  WrapperStudentRecord,
  WrapperTitle,
} from './styles';

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <WrapperTitle>
        <TextName>👌 Seus progressos</TextName>
        <VerifyProgressButton
          onPress={() => {
            navigation.navigate('AddProgress');
          }}>
          <TextVerifyProgress>Adicionar progresso</TextVerifyProgress>
        </VerifyProgressButton>
      </WrapperTitle>

      <WrapperStudentRecord>
        <TextRecordTitle>Data :</TextRecordTitle>
        <TextType>Medidas Corporais</TextType>
        <TextRecord>Peso: </TextRecord>
        <TextRecord>Altura: </TextRecord>
        <TextType>Circunferências</TextType>
        <TextRecord>Ombro: </TextRecord>
        <TextRecord>Tórax: </TextRecord>
        <TextRecord>Cintura: </TextRecord>
        <TextRecord>Abdomen: </TextRecord>
        <TextRecord>Quadril: </TextRecord>
        <TextRecord>Coxa esquerda: </TextRecord>
        <TextRecord>Coxa direita: </TextRecord>
      </WrapperStudentRecord>
    </Container>
  );
};
