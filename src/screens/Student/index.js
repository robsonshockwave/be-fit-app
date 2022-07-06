import {useNavigation} from '@react-navigation/native';
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

export default ({route}) => {
  const navigation = useNavigation();
  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    setStudent(route.params);
  }, []);

  return (
    <Container>
      <WrapperTitle>
        <TextName>🤓 {student.name}</TextName>
        {/* <VerifyProgressButton
          onPress={() => {
            navigation.navigate('VerifyProgress', {
              studentId: student.id,
              studentName: student.name,
            });
          }}>
          <TextVerifyProgress>Verificar progresso</TextVerifyProgress>
        </VerifyProgressButton> */}
      </WrapperTitle>

      <WrapperStudentRecord>
        <TextRecordTitle>Ficha do aluno:</TextRecordTitle>
        <TextRecord>Nome: {student.name}</TextRecord>
        <TextRecord>Objetivo: {student.goals}</TextRecord>
        <TextRecord>Número do aluno: {student.index}</TextRecord>
      </WrapperStudentRecord>

      <AddTrainingButton
        onPress={() => {
          // navigation.navigate('Training', {
          //   id: student.id,
          //   name: student.name,
          // });
        }}>
        <TextAddTraining>Adicionar treino</TextAddTraining>
      </AddTrainingButton>
    </Container>
  );
};
