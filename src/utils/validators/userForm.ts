import { z } from 'zod';

export const userFormSchema = z.object({
   email: z.union([z.literal(''), z.string().email()]),
   firstName: z.string().optional(),
   lastName: z.string().optional(),
});
