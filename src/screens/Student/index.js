import React from 'react';
import {
  AddTrainingButton,
  Container,
  TextAddTraining,
  TextName,
  TextRecord,
  TextRecordTitle,
  TextVerifyProgress,
  VerifyProgressButton,
  WrapperStudentRecord,
  WrapperTitle,
} from './styles';
import {Text} from 'react-native';

export default ({route}) => {
  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    setStudent(route.params);
  }, []);

  return (
    <Container>
      <WrapperTitle>
        <TextName>{student.name}</TextName>
        <VerifyProgressButton
          onPress={() => {
            // navigation.navigate('');
          }}>
          <TextVerifyProgress>Verificar progresso</TextVerifyProgress>
        </VerifyProgressButton>
      </WrapperTitle>

      <WrapperStudentRecord>
        <TextRecordTitle>Ficha do aluno:</TextRecordTitle>
        <TextRecord>Nome: {student.name}</TextRecord>
        <TextRecord>Objetivo: {student.goals}</TextRecord>
        <TextRecord>Número do aluno: {student.index}</TextRecord>
      </WrapperStudentRecord>

      <AddTrainingButton
        onPress={() => {
          // navigation.navigate('');
        }}>
        <TextAddTraining>Adicionar treino</TextAddTraining>
      </AddTrainingButton>
    </Container>
  );
};
