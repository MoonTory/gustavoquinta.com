import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindColors = () => {
  return fullConfig.theme!.colors!;
};

export const colors = getTailwindColors();
