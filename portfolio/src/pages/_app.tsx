import { fonts } from '@/lib/fonts';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from "next/app";

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-zen)',
    body: 'var(--font-zen)',
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-zen: ${fonts.zen.style.fontFamily}
        }
      `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}