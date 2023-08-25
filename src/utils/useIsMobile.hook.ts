import { useWindowDimensions } from './useWindowsDimensions.hook';

export function useIsMobile() {
  const { width } = useWindowDimensions();

  const isMobile = width <= 640;
  const isTablet = width > 640 && width <= 1024;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
}
