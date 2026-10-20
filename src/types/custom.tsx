import type { ReactNode } from "react";
import z from "zod";

// React nodes cannot be described structurally, so this is an unvalidated
// carrier that gives the inferred type while keeping the schema convention
export const ReactNodeSchema = z.custom<ReactNode>();
export type ReactNodeValue = z.infer<typeof ReactNodeSchema>;
