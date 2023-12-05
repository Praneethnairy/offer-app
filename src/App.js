import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});




const App = () => {
  return (
    
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="*"
                  element={<DefaultLayout/>}
                />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
  );
};

export default App;
