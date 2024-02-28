import { z } from 'zod';

export const schema = z.object({
	username: z.string().min(4, { message: 'Must be 4 or more characters long' }),
	company: z.string().min(4, { message: 'Must be 4 or more characters long' }),
	equipments: z.array(z.string())
});
