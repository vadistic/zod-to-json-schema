import { ZodStringDef } from 'zod/lib/src/types/string';

export type JsonSchema7StringType = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
};

export function parseStringDef(def: ZodStringDef): JsonSchema7StringType {
  const res: JsonSchema7StringType = {
    type: 'string',
  };

  if (def.checks) {
    for (const check of def.checks) {
      switch (check.code) {
        case 'invalid_string':
          //These are all regexp based (except URL which is "new Uri()" based) and zod does not seem to expose the source regexp right now.
          break;
        case 'too_small':
          res.minLength = check.minimum;
          break;
        case 'too_big':
          res.maxLength = check.maximum;
          break;
      }
    }
  }

  return res;
}
