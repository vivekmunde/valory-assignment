export type TStatus = "unknown" | "instantiating" | "error";

export type TProviderContext = {
  status: TStatus;
  error?: string;
};
