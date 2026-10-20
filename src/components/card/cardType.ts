import { z } from "zod";
import { ReactNodeSchema } from "../../types/custom";

export const CardPropsSchema = z.object({
  title: z.string(),
  children: ReactNodeSchema.optional(),
});

export type CardProps = z.infer<typeof CardPropsSchema>;
