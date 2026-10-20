import { zocker } from "zocker";

export function generateMock(schema: any) {
  // Option A: Cast schema to any
  return zocker(schema).setSeed(1).generate();
}
