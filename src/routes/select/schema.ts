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
	excavator: z.boolean().default(true),
	dump: z.boolean().default(false),
	roller: z.boolean().default(false),
	backhoe: z.boolean().default(false),
	bulldozer: z.boolean().default(false),
	grader: z.boolean().default(false)
});
