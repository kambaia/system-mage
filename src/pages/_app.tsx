import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import '../../styles/globals.css';

import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';
function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClientRef.current}>
        <NextNprogress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow
        />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
        <GlobalStyles />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
