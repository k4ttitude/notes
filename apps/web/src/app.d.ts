// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface PageData {}

	// interface PageError {}

	// interface Platform {}
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.svg?src' {
  const content: string
  export default content
}