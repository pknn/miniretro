import { Container } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';

const Boards = () => {
  const { boardId } = useParams();
  return (
    <Container width="50%" align="left">
      {boardId}
    </Container>
  );
};

export default Boards;
