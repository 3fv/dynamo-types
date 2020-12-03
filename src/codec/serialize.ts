import { DynamoDB } from "aws-sdk";
import {
  Attribute as AttributeMetadata,
  Table as TableMetadata,
} from "../metadata";
import { ITable, BaseTable } from "../base-table";

import * as AttributeValue from "./attribute_value";

export function serialize<T extends BaseTable>(tableClass: ITable<T>, record: T): { [key: string]: any } {
  const res: { [key: string]: any } = {};

  tableClass.metadata.attributes.forEach((attributeMetadata) => {
    const attr = record.getAttribute(attributeMetadata.name);
    if (attr !== undefined) {
      res[attributeMetadata.name] = attr;
    }
  });

  return res;
}
