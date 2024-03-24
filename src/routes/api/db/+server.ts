/**
 * This route reports the connected databases.
 */
import { dev } from "$app/environment";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ locals, url, fetch }) => {
	if (dev) {
		const remote = new URL("https://d.matlab.run" + url.pathname + url.search);
		return fetch(remote);
	}

	return json(Object.keys(locals.db));
};
