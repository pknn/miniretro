import { FrameIcon, RocketIcon } from '@radix-ui/react-icons';
import {
  Container,
  IconButton,
  Section,
  Text,
  TextField,
} from '@radix-ui/themes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [boardId, setBoardId] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardId(event.target.value);
  };

  const handleClick = () => {
    navigate(`/boards/${boardId}`);
  };

  return (
    <Container width="50%" align="left">
      <Section>
        <Text size="7">Not a huge</Text>
        <br />
        <Text size="9" color="sky" weight="medium">
          Retrospective tool
        </Text>
        <br />
        <Text>
          A purely minimal retrospective tool — nothing more, nothing less.
        </Text>

        <TextField.Root
          mt="4"
          mb="2"
          size="3"
          placeholder="Board name"
          value={boardId}
          onChange={handleChange}
        >
          <TextField.Slot>
            <FrameIcon />
          </TextField.Slot>
          <TextField.Slot>
            <IconButton variant="soft" onClick={handleClick}>
              <RocketIcon />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
        <Text size="1">Invalid characters such as # will be removed</Text>
      </Section>
    </Container>
  );
};

export default Home;
