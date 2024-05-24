
import { DefaultSession } from '@auth/core/types';

declare module '@auth/core/types' {
	interface Session {
		user: User & DefaultSession['user'|undefined];
	}
	
}