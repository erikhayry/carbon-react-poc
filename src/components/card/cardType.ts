import { ReactNodeSchema } from "@/types/custom";
import { z } from "zod";

export const CardPropsSchema = z.object({
  title: z.string(),
  children: ReactNodeSchema.optional(),
});

export type CardProps = z.infer<typeof CardPropsSchema>;
