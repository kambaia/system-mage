import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import '../../styles/globals.css';
import { getAnalytics } from 'firebase/analytics';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '@contexts/AuthContext';
import { Fragment, useRef } from 'react';
function MyApp({ Component, pageProps }: any) {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <Fragment>
      <QueryClientProvider client={queryClientRef.current}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
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
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
