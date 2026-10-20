import type { z } from "zod";
import { zocker } from "zocker";

export function generateMock<Schema extends z.ZodTypeAny>(
  schema: Schema,
): z.infer<Schema> {
  return zocker(schema).setSeed(1).generate();
}
