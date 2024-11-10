import type { OmenCard } from "$lib/types";

export const omens: { cards: OmenCard[] } = {
	cards: [
		{
			id: "idol",
			name: "Idol",
			type: "Item",
			icon: "game-icons:colombian-statue",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Might rolls",
				},
			],
			hauntRoll: true,
		},
		{
			id: "armor",
			name: "Armor",
			type: "Item",
			icon: "game-icons:chest-armor",
			effects: [
				{
					type: "passive",
					description:
						"Whenever you take any Physical damage, reduce that damage by 1",
				},
			],
			hauntRoll: true,
		},
		{
			id: "ring",
			name: "Ring",
			type: "Weapon",
			icon: "mdi:ring",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Sanity rolls",
				},
				{
					type: "attack",
					description:
						"When you make an attack, you may use the defender's Sanity instead of their Might to defend against your attack",
					rules:
						"You may only use one weapon per attack. You may trade a weapon on the same turn in which it was used for an attack.",
				},
			],
			hauntRoll: true,
		},
		{
			id: "dog",
			name: "Dog",
			type: "Companion",
			icon: "bxs:dog",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Speed rolls",
				},
				{
					type: "action",
					description:
						"Once during your turn, you may use the Dog to trade any number of items or Omens with another player up to 4 tiles away using the normal trading rules",
					rules:
						"You may not trade an item or Omen that you have already used this turn, or use an item or Omen that you have just received from another player.",
				},
			],
			hauntRoll: true,
		},
		{
			id: "book",
			name: "Book",
			type: "Item",
			icon: "bi:book-fill",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Knowledge rolls",
				},
				{
					type: "action",
					description:
						"Once during your turn, you may use the Book to lose 1 Sanity. For the next trait roll you make this turn that uses your Knowledge, you may roll 2 additional dice",
				},
			],
			hauntRoll: true,
		},
		{
			id: "dagger",
			name: "Dagger",
			type: "Weapon",
			icon: "game-icons:broad-dagger",
			effects: [
				{
					type: "attack",
					description:
						"When you use this to attack, lose 1 Speed. Roll two extra dice on the attack",
					rules:
						"You may only use one weapon per attack. You may trade a weapon during the turn in which it was used for an attack.",
				},
			],
			hauntRoll: true,
		},
		{
			id: "holy-symbol",
			name: "Holy Symbol",
			type: "Item",
			icon: "game-icons:holy-grail",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Sanity roll",
				},
				{
					type: "action",
					description:
						"Whenever you discover a tile, you may discard this item and discover one adjacent unexplored tile instead",
					rules: "If you do not receive any effects for the first tile",
				},
			],
			diceRange: {
				low: "0-3",
				high: "4-6",
			},
			hauntRoll: true,
		},
		{
			id: "skull",
			name: "Skull",
			type: "Item",
			icon: "game-icons:skull-in-jar",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Knowledge rolls",
				},
				{
					type: "death",
					description:
						"If something would cause your explorer to die, first roll 3 dice. Instead of dying, set all your traits at the Critical Memento levels.",
					rules: "You die as normal",
				},
			],
			hauntRoll: true,
		},
		{
			id: "mask",
			name: "Mask",
			type: "Item",
			icon: "game-icons:iron-mask",
			effects: [
				{
					type: "passive",
					description: "Add 1 to the result of your Speed rolls",
				},
				{
					type: "action",
					description:
						"Once during your turn, you may use the Mask to move everyone else on your tile (explorers and monsters) to any adjacent tiles",
					rules: "This effect may not be used to discover new tiles",
				},
			],
			hauntRoll: true,
		},
	],
};
