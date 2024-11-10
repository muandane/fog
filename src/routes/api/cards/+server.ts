import { json } from "@sveltejs/kit";
import { items } from "$lib/data/items";
import { omens } from "$lib/data/omens";
import type { RequestHandler } from "@sveltejs/kit";
import type { ItemCard, OmenCard } from "$lib/types";

export const GET: RequestHandler = async ({ url }) => {
	const type = url.searchParams.get("type");
	const query = url.searchParams.get("q")?.toLowerCase();

	let cards: (ItemCard | OmenCard)[] = [];

	if (!type || type === "all") {
		cards = [...items.cards, ...omens.cards];
	} else if (type === "item") {
		cards = items.cards;
	} else if (type === "omen") {
		cards = omens.cards;
	}

	if (query) {
		cards = cards.filter(
			(card) =>
				card.name.toLowerCase().includes(query) ||
				card.effects.some((effect) =>
					effect.description.toLowerCase().includes(query),
				),
		);
	}

	return json(cards);
};
