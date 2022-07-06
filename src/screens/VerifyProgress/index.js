import React from 'react';
import {
  Container,
  TextName,
  TextRecord,
  TextRecordTitle,
  TextType,
  WrapperStudentRecord,
  WrapperTitle,
} from './styles';

export default ({route}) => {
  const [student, setStudent] = React.useState({});

  React.useEffect(() => {
    setStudent(route.params);
  }, []);

  return (
    <Container>
      <WrapperTitle>
        <TextName>🤓 Progresso de {student.studentName}</TextName>
      </WrapperTitle>

      <WrapperStudentRecord>
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
