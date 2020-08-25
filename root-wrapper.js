const React = require("react");
const fetch = require("isomorphic-fetch");
const {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} = require("@apollo/client");
const { ThemeProvider, CSSReset } = require("@chakra-ui/core");
const { customTheme } = require("./src/components/global/theme");

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "the-great-cloud-photo-library.netlify.app/.netlify/functions/",
    // fetchOptions: {
    //     mode: 'no-cors',
    //   }
  }),
  fetch,
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  </ApolloProvider>
);
