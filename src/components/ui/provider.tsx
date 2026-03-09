"use client"

import { ChakraProvider } from "@chakra-ui/react"
import themeSystem from "@configs/theme.config"

export function Provider(props: { children?: React.ReactNode }) {
  return (
    <ChakraProvider value={themeSystem}>{props.children}</ChakraProvider>
  )
}
