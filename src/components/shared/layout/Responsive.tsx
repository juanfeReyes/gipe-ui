import { useMediaQuery } from 'react-responsive'

export const mobileResponsiveConfig = { minWidth: 320, maxWidth: 768 }

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768})
  return isTablet ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery(mobileResponsiveConfig)
  return isMobile ? children : null
}