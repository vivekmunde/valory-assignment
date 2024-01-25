export type TStatus =
  | "unknown"
  | "checking"
  | "exists"
  | "doesNotExist"
  | "error";

export type TProviderContext = {
  status: TStatus;
  error?: string;
};
