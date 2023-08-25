import { useWindowDimensions } from './useWindowsDimensions.hook';

export function useIsMobile() {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
}
