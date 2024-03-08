import { z } from 'zod';

export const schema = z.object({
	cost: z.number(),
	expected: z.number(),
	mileage: z.number(),
	lifespan: z.number(),
	isUsed: z.boolean(),
	years: z.number(),
	rate: z.number()
});
