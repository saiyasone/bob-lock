import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Home from "./Home";
import "./App.css";

function App() {
  const httpClient = new ApolloClient({
    uri: "https://sbms.vshare.net/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={httpClient}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
