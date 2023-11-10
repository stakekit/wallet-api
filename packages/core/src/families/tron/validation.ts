import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaTronOperationMode = z.enum([
  "send",
  "freeze",
  "unfreeze",
  "vote",
  "claimReward",
  "freezeV2",
  "delegateResource",
  "unDelegateResource",
  "unFreezeV2",
  "withdrawExpireUnfreeze",
]);

export const schemaTronResource = z.enum(["BANDWIDTH", "ENERGY"]);

export const schemaRawTronTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.tron),
  mode: schemaTronOperationMode,
  resource: schemaTronResource.optional(),
  duration: z.number().optional(),
});
