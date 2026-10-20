import { z } from "zod";
import { locales } from "../../paraglide/runtime";

// Derived from Paraglide's generated locales so the two can never drift apart
export const LocaleSchema = z.enum(locales);

export type Locale = z.infer<typeof LocaleSchema>;
