export interface Effect {
	type: string;
	description: string;
}

export interface BaseCard {
	id: string;
	name: string;
	type: string;
	icon: string;
	effects: Effect[];
}

export interface OmenCard extends BaseCard {
	hauntRoll: boolean;
	effects: (Effect & { rules?: string })[];
	diceRange?: { high: string; low: string };
}

export interface ItemCard extends BaseCard {
	effects: (Effect & { rules?: string })[];
	diceRange?: { success: string; fail: string };
}
