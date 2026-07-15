import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { toastConfig } from "./utils/toastConfig";

import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Toaster
        {...toastConfig}
        toastOptions={{
          ...toastConfig.toastOptions,
          className: "custom-toast",
        }}
      />
      <App />
    </PersistGate>
  </Provider>,
);
