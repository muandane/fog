import type { ItemCard } from "$lib/types";

export const items: { cards: ItemCard[] } = {
	cards: [
		{
			id: "rabbits-foot",
			name: "Rabbit's Foot",
			type: "Item",
			icon: "mdi:rabbit",
			effects: [
				{
					type: "action",
					description:
						"Once during your turn, you may use the Rabbit's Foot to reroll one dice for any roll",
				},
			],
		},
		{
			id: "angels-feather",
			name: "Angel's Feather",
			type: "Item",
			icon: "ph:feather-fill",
			effects: [
				{
					type: "action",
					description:
						"When you are required to make a trait roll, you may instead have a die result of 4 for that roll. Then another number from 0-6 for the second roll",
					rules:
						"You may not use this power again until you have gained from Events.",
				},
			],
		},
		{
			id: "dynamite",
			name: "Dynamite",
			type: "Weapon",
			icon: "game-icons:dynamite",
			effects: [
				{
					type: "attack",
					description:
						"You may use the Dynamite to place a Might token on this card and then discard your turn to set dynamite one. Everyone on that tile takes 4 Physical damage",
					rules: "You may only use one weapon per attack",
				},
			],
			diceRange: {
				success: "4+",
				fail: "0-3",
			},
		},
		{
			id: "gun",
			name: "Gun",
			type: "Weapon",
			icon: "mdi:gun",
			effects: [
				{
					type: "attack",
					description:
						"When you use the Gun to attack, roll 2 extra dice on your attack",
					rules:
						"You may only use one weapon per attack. You may not trade a weapon on the same turn in which it was used for an attack.",
				},
			],
		},
		{
			id: "crossbow",
			name: "Crossbow",
			type: "Weapon",
			icon: "game-icons:crossbow",
			effects: [
				{
					type: "attack",
					description:
						"When you use this to make an attack, choose a target up to two spaces away that you can see through legal movement",
					rules:
						"You may only use one weapon per attack. You may not trade a weapon on the same turn in which it was used for an attack.",
				},
			],
		},
		{
			id: "machete",
			name: "Machete",
			type: "Weapon",
			icon: "game-icons:machete",
			effects: [
				{
					type: "attack",
					description:
						"When you use this to make an attack, add 1 to the result of your attack",
					rules:
						"You may not trade a weapon on the same turn in which it was used for an attack.",
				},
			],
		},
		{
			id: "lucky-coin",
			name: "Lucky Coin",
			type: "Item",
			icon: "ph:coin-fill",
			effects: [
				{
					type: "action",
					description:
						"Once during your turn, you may choose to flip the coin or walk up three spaces. After all these actions are taken, flip or use the result coin 5.",
				},
			],
		},
		{
			id: "chainsaw",
			name: "Chainsaw",
			type: "Weapon",
			icon: "game-icons:chainsaw",
			effects: [
				{
					type: "attack",
					description:
						"When you use the Chainsaw to attack, add 3 dice to your attack",
					rules:
						"You may only use one weapon per attack. You may not trade a weapon on the same turn in which it was used for an attack.",
				},
			],
		},
		{
			id: "map",
			name: "Map",
			type: "Item",
			icon: "gis:landcover-map",
			effects: [
				{
					type: "action",
					description:
						"On your turn, you may bury the Map. If you do, place your explorer at the nearest unvisited entrance.",
				},
			],
		},
		{
			id: "mystical-stopwatch",
			name: "Mystical Stopwatch",
			type: "Item",
			icon: "mdi:stopwatch",
			effects: [
				{
					type: "action",
					description:
						"On your turn, you may bury the stopwatch. If you do, take another complete turn. You can only use this ability after the haunt has started.",
				},
			],
		},
		{
			id: "skeleton-key",
			name: "Skeleton Key",
			type: "Item",
			icon: "game-icons:skeleton-key",
			effects: [
				{
					type: "action",
					description:
						"You may move through walls. Whenever you do so, roll a die. If you roll a blank, bury the Skeleton Key. You may not use the Skeleton key to discover new rooms.",
				},
			],
		},
		{
			id: "necklace-of-teeth",
			name: "Necklace of Teeth",
			type: "Item",
			icon: "game-icons:primitive-necklace",
			effects: [
				{
					type: "action",
					description:
						"At the end of your turn, you may gain 1 in a critical trait of your choice.",
				},
			],
		},
		{
			id: "leather-jacket",
			name: "Leather Jacket",
			type: "Item",
			icon: "lucide-lab:jacket-sports",
			effects: [
				{
					type: "passive",
					description: "Roll an extra die whenever you are being attacked.",
				},
			],
		},
		{
			id: "first-aid-kit",
			name: "First Aid Kit",
			type: "Item",
			icon: "solar:medical-kit-bold",
			effects: [
				{
					type: "action",
					description:
						"On your turn, you may heal 1 from your First Aid Kit. If you are at any critical traits, you may use the First Aid Kit to heal another explorer on your tile.",
				},
			],
		},
		{
			id: "strange-medicine",
			name: "Strange Medicine",
			type: "Item",
			icon: "icon-park-solid:medicine-bottle-one",
			effects: [
				{
					type: "action",
					description:
						"Once during your turn, you may use the Strange Medicine. If you do, heal 2 but lose Might and Speed.",
				},
			],
		},
		{
			id: "brooch",
			name: "Brooch",
			type: "Item",
			icon: "game-icons:gem-necklace",
			effects: [
				{
					type: "passive",
					description:
						"Whenever you take Physical or Mental damage, you may instead take it as General damage.",
				},
			],
		},
		{
			id: "strange-amulet",
			name: "Strange Amulet",
			type: "Item",
			icon: "fluent-emoji-high-contrast:nazar-amulet",
			effects: [
				{
					type: "passive",
					description: "Whenever you take Physical damage, gain 1 Sanity",
					rules:
						"General damage applied to Might or Speed does not count. A direct loss of Might and/or Speed does not count.",
				},
			],
		},
		{
			id: "headphones",
			name: "Headphones",
			type: "Item",
			icon: "game-icons:headphones",
			effects: [
				{
					type: "passive",
					description:
						"Whenever you take Mental damage, gain 1 Physical damage",
					rules:
						"The Headphones do not prevent General damage. They do not prevent any direct loss of Knowledge or Sanity.",
				},
			],
		},
		{
			id: "flashlight",
			name: "Flashlight",
			type: "Item",
			icon: "fluent:flashlight-16-filled",
			effects: [
				{
					type: "passive",
					description:
						"During Events, you may roll 2 extra dice on trait rolls.",
				},
			],
		},
		{
			id: "magic-camera",
			name: "Magic Camera",
			type: "Item",
			icon: "f7:camera-fill",
			effects: [
				{
					type: "action",
					description: "You may use your Sanity to make Knowledge rolls.",
				},
			],
		},
		{
			id: "creepy-doll",
			name: "Creepy Doll",
			type: "Item",
			icon: "game-icons:voodoo-doll",
			effects: [
				{
					type: "action",
					description:
						"Once during your turn, you may use the Creepy Doll to reroll all dice rolls until you get results. Then, lose 1 Sanity.",
				},
			],
		},
		{
			id: "mirror",
			name: "Mirror",
			type: "Item",
			icon: "fluent-emoji-high-contrast:mirror",
			effects: [
				{
					type: "action",
					description:
						"On your turn, you may bury the Mirror. If you do, both your Knowledge and Sanity.",
				},
			],
		},
	],
};
