import { Flex } from '@radix-ui/themes';
import { Heading } from '@radix-ui/themes/src/index.js';
import AppearanceToggle from './AppearanceToggle';

const Header = () => (
  <Flex py="4" align="center" justify="between">
    <Heading>Miniretro</Heading>
    <AppearanceToggle />
  </Flex>
);

export default Header;
