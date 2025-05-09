import { ThemeProvider } from "@emotion/react";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme/theme.ts";

const toastFont =
  "ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <EmojiProvider data={emojiData}>
      <App />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: toastFont,
          },
        }}
      />
    </EmojiProvider>
  </ThemeProvider>,
);
