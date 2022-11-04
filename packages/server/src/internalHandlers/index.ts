import type { WalletHandlers } from "@ledgerhq/wallet-api-core";
import type { TransformHandler } from "../types";
import * as account from "./account";
import * as currency from "./currency";
import * as message from "./message";
import * as transaction from "./transaction";

type InternalHandlers = TransformHandler<WalletHandlers>;

export const internalHandlers: InternalHandlers = {
  "account.request": account.request,
  "account.list": account.list,
  "account.receive": account.receive,

  "currency.list": currency.list,

  "message.sign": message.sign,

  "transaction.sign": transaction.sign,
  "transaction.signAndBroadcast": transaction.signAndBroadcast,
};