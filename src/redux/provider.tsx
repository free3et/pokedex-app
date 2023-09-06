import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
