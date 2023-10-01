import { JWTPayloadSpec } from "@elysiajs/jwt";

export type SetType = {
  headers?: Record<string, string> & {
    "Set-Cookie"?: string | string[] | undefined;
  };
  status?: any;
  redirect?: string | undefined;
  cookie?:
    | Record<
        string,
        {
          value: string;
          domain?: string | undefined;
          expires?: Date | undefined;
          httpOnly?: boolean | undefined;
          maxAge?: number | undefined;
          path?: string | undefined;
          priority?: "low" | "medium" | "high" | undefined;
          sameSite?: boolean | "strict" | "none" | "lax" | undefined;
          secure?: boolean | undefined;
          secrets?: string | string[] | undefined;
        }
      >
    | undefined;
};

export type JWTType = {
  readonly sign: (
    morePayload: Record<string, string> & JWTPayloadSpec
  ) => Promise<string>;
  readonly verify: (
    jwt?: string | undefined
  ) => Promise<false | (Record<string, string> & JWTPayloadSpec)>;
};
