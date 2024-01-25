export type TSatus =
  | "unknown"
  | "checking"
  | "exists"
  | "doesNotExist"
  | "error";

export type TProviderContext = {
  status: TSatus;
  error?: string;
};
