import { createContext } from "react";
import { TProviderContext } from "./types";

const ProviderContext = createContext<TProviderContext>({
  status: "unknown",
});

export default ProviderContext;
