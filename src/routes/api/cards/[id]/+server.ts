import { json } from "@sveltejs/kit";
import { items } from "$lib/data/items";
import { omens } from "$lib/data/omens";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;

	const item = items.cards.find((card) => card.id === id);
	if (item) return json(item);

	const omen = omens.cards.find((card) => card.id === id);
	if (omen) return json(omen);

	return new Response(JSON.stringify({ error: "Card not found" }), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
