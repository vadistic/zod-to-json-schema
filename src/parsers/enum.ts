import { ZodEnumDef } from 'zod/lib/src/types/enum';

export type JsonSchema7EnumType = {
  type: 'string';
  enum: string[];
};

export function parseEnumDef(def: ZodEnumDef): JsonSchema7EnumType {
  return {
    type: 'string',
    enum: def.values,
  };
}
