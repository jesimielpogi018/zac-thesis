import { z } from 'zod';

export const schema = z.object({
	username: z
		.string()
		.min(5, { message: 'Must be 5 or more characters long' })
		.max(32, { message: 'Must be 5 or fewer characters long' }),
	company: z
		.string()
		.min(5, { message: 'Must be 5 or more characters long' })
		.max(32, { message: 'Must be 5 or fewer characters long' }),
	equipments: z.array(z.string())
});
