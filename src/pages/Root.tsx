import { appearanceAtom } from '@/atoms/appearanceAtoms';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Container, Flex, Theme } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

const Root = () => {
  const appearance = useAtomValue(appearanceAtom);
  return (
    <Theme appearance={appearance} accentColor="sky" scaling="110%">
      <Container>
        <Flex direction="column" minHeight="95vh">
          <header>
            <Header />
          </header>
          <main style={{ flex: 1 }}>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </Flex>
      </Container>
    </Theme>
  );
};

export default Root;
