import { parseContextCookie } from "@utils/parse-cookie";
import { getPayload, isTokenExpired } from "src/util/auth";

export function withAuth(func: any) {
  return async (ctx: any) => {
    const cookies = parseContextCookie(ctx?.req?.headers?.cookie);
    if (!cookies?.auth_token || isTokenExpired(cookies?.auth_token)) {
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
      };
    }
    const payload = getPayload(cookies?.auth_token);

    const result = await func(ctx, cookies, payload);
    if ("props" in result) {
      result.props = {
        payload,
        ...result.props,
      };
    }

    return result;
  };
}