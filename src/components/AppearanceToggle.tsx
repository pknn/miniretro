import {
  appearanceAtom,
  darkModeAtom,
  opposite,
} from '@/atoms/appearanceAtoms';
import { Flex, Switch, Text } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';
import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

const AppearanceToggle = () => {
  const [appearance, setAppearance] = useAtom(appearanceAtom);
  const isDarkMode = useAtomValue(darkModeAtom);
  const oppositeAppearance = useMemo(() => opposite(appearance), [appearance]);

  const handleSwitch = useCallback(() => {
    setAppearance(oppositeAppearance);
  }, [oppositeAppearance, setAppearance]);

  return (
    <Flex align="center" gap="2">
      <Text>{oppositeAppearance === 'dark' ? '🌚' : '🌝'}</Text>
      <Switch onClick={handleSwitch} checked={isDarkMode} />
    </Flex>
  );
};

export default AppearanceToggle;
