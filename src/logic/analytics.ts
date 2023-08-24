import posthog from "posthog-js";
import { storage } from "./storage";
import { generateUUID } from "./uuid";

const SILENT = false;
const IS_PROD = process.env.NODE_ENV === "production";

if (typeof window !== "undefined") {
  if (IS_PROD) {
    posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG}`, {
      api_host: "https://app.posthog.com",
    });
  }
}

export const analytics = {
  capture: (id: string, data?: any): void => {
    if (IS_PROD) {
      posthog.capture(id, data);
    } else if (!SILENT) {
      console.log(`POSTHOG CAPTURE // ${id} // ${JSON.stringify(data)}`);
    }
  },
  identify: (uniqueId: string, data?: any): void => {
    if (IS_PROD) {
      posthog.identify(uniqueId, data);
    } else if (!SILENT) {
      console.log(`POSTHOG IDENTIFY // ${uniqueId} // ${JSON.stringify(data)}`);
    }
  },
  id: (): string => {
    let id: string | undefined;
    if (IS_PROD) {
      id = posthog.get_distinct_id();
    }
    if (id) return id;

    // if posthog id is not set, pull from cache or generate a new one
    if (storage.userId.get()) return storage.userId.get();
    const thisId = generateUUID();
    storage.userId.set(thisId);
    return thisId;
  },
  reset: (): void => {
    if (IS_PROD) {
      posthog.reset();
    } else if (!SILENT) {
      console.log(`POSTHOG RESET`);
    }
  },
  pageview: (path?: string): void => {
    const href = path
      ? `${window.location.origin}/${path.startsWith("/") ? path.slice(1) : path}`
      : window.location.href;

    if (IS_PROD) {
      posthog.capture("$pageview", { $current_url: href });
    } else if (!SILENT) {
      console.log(`POSTHOG PAGEVIEW // ${href}`);
    }
  },
};
