import { BrowserSessionStorageType, Client } from "@gadget-client/sample-event-app";

export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
