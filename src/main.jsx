import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import { QuestionProvider } from "./context/QuestionProvider.jsx";
import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <QuestionProvider>
      <BrowserRouter basename="/Evangadi-Forum">
        <StrictMode>
          {/* <ChakraProvider> */}
            <App />
          {/* </ChakraProvider> */}
        </StrictMode>
      </BrowserRouter>
    </QuestionProvider>
  </UserProvider>
);
