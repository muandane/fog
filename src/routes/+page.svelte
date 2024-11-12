<script lang="ts">
import { onMount } from "svelte";
import type { ItemCard, OmenCard, BaseCard } from "$lib/types";
import Icon from "@iconify/svelte";
// biome-ignore lint/style/useConst: needs to be like this
let searchQuery = "";
let cards: (ItemCard | OmenCard)[] = [];
let loading = false;
let showTypeMenu = false;
let error: string | null = null;
let showModal = false;
let selectedCard: (ItemCard | OmenCard) | null = null;
const types = ["all", "item", "omen"] as const;
type CardType = (typeof types)[number];
let selectedType: CardType = "all";
onMount(() => {
	fetchCards();
	window.addEventListener("keydown", handleKeydown);
	return () => {
		window.removeEventListener("keydown", handleKeydown);
	};
});
async function fetchCards() {
	loading = true;
	error = null;
	try {
		// biome-ignore lint/style/useConst: <explanation>
		let url = new URL(
			"/api/cards",
			import.meta.env.VITE_APP_BASE_URL || "http://localhost:5173",
		);
		if (selectedType !== "all") {
			url.searchParams.append("type", selectedType);
		}
		if (searchQuery) {
			url.searchParams.append("q", searchQuery);
		}
		const response = await fetch(url.toString());
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		cards = await response.json();
	} catch (err) {
		console.error("Error fetching cards:", err);
		error = err instanceof Error ? err.message : "Failed to fetch cards";
	} finally {
		loading = false;
	}
}
function setType(type: CardType) {
	selectedType = type;
	showTypeMenu = false;
	fetchCards();
}
function openCardModal(card: ItemCard | OmenCard) {
	selectedCard = card;
	showModal = true;
}
function closeModal() {
	showModal = false;
	selectedCard = null;
}
// Improved search with debouncing
let searchTimeout: NodeJS.Timeout;
$: {
	clearTimeout(searchTimeout);
	searchTimeout = setTimeout(() => {
		fetchCards();
	}, 300);
}
// Close modal on escape key
function handleKeydown(event: KeyboardEvent) {
	if (event.key === "Escape" && showModal) {
		closeModal();
	}
}
</script>
<div class="container mx-auto py-8 px-4">
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
        <!-- Search Input -->
        <div class="relative flex-1 max-w-sm">
            <div class="relative">
                <Icon icon="lucide:search" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by name or effects..."
                    bind:value={searchQuery}
                    class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {#if searchQuery}
                    <button
                        class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        on:click={() => {
                            searchQuery = '';
                            fetchCards();
                        }}
                    >
                        <Icon icon="lucide:x" class="h-5 w-5" />
                    </button>
                {/if}
            </div>
        </div>
        <!-- Type Filter -->
        <div class="relative">
            <button
                on:click={() => (showTypeMenu = !showTypeMenu)}
                class="px-4 py-2 border rounded-md flex items-center gap-2 bg-white hover:bg-gray-50"
            >
                <Icon icon="lucide:filter" class="h-4 w-4" />
                <span>Type: {selectedType}</span>
            </button>
            {#if showTypeMenu}
                <div class="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    {#each types as type}
                        <button
                            class="w-full px-4 py-2 text-left hover:bg-gray-100"
                            on:click={() => setType(type)}
                        >
                            {type === 'all' ? 'All Cards' : `${type}s Only`}
                        </button>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    {#if error}
        <div class="text-red-500 p-4 rounded-md bg-red-50 mb-4">
            Error: {error}
        </div>
    {/if}
    {#if loading}
        <div class="text-center py-8">Loading...</div>
    {:else if cards.length === 0}
        <div class="text-center py-8 text-gray-500">
            No cards found
        </div>
    {:else}
        <div class="bg-white rounded-md border">
            <table class="w-full">
                <thead>
                    <tr class="border-b bg-gray-50">
                        <th class="text-left p-4">Title</th>
                        <th class="text-left p-4">Type</th>
                        <th class="text-left p-4">Effects</th>
                    </tr>
                </thead>
                <tbody>
                    {#each cards as card (card.id)}
                        <tr 
                            class="border-b hover:bg-gray-50 cursor-pointer"
                            on:click={() => openCardModal(card)}
                        >
                            <td class="p-4 font-medium">
                                <div class="flex items-center gap-2">
                                    <Icon
                                        icon={card.icon}
                                        class="w-6 h-6 object-contain"
                                    />
                                    {card.name}
                                </div>
                            </td>
                            <td class="p-4">
                                <span class={`px-2 py-1 rounded-full text-sm flex items-center gap-1 ${'hauntRoll' in card ? 'bg-emerald-100 text-green-600' : 'bg-orange-100 text-amber-600'}`}>
                                    <Icon icon={'hauntRoll' in card ? 'fa6-solid:crow' : 'game-icons:desert-skull'} class="w-4 h-4" />
                                    {'hauntRoll' in card ? 'Omen' : 'Item'}
                                </span>
                            </td>
                            <td class="p-4">
                                {#each card.effects as effect}
                                    <div class="text-sm text-gray-500">
                                        {effect.type}: {effect.description}
                                    </div>
                                {/each}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</div>
{#if showModal && selectedCard}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <!-- Icon Container - Positioned in top-left corner -->
            <div class="absolute top-4 left-4">
                <Icon 
                    icon={selectedCard.icon} 
                    class="w-10 h-10 text-gray-800"
                />
            </div>
            <!-- Header -->
            <div class="border-b p-4 pl-16">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold">{selectedCard.name}</h2>
                    <button 
                        on:click={closeModal}
                        class="text-gray-500 hover:text-gray-700"
                    >
                        <Icon icon="lucide:x" class="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div class="p-6">
                <div class="mb-6">
                    <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${'hauntRoll' in selectedCard ? 'bg-emerald-100 text-green-600' : 'bg-orange-100 text-amber-600'}`}>
                        <Icon icon={'hauntRoll' in selectedCard ? 'fa6-solid:crow' : 'game-icons:desert-skull'} class="w-4 h-4" />
                        {'hauntRoll' in selectedCard ? 'Omen' : 'Item'}
                    </span>
                </div>
                <div class="space-y-4">
                    {#each selectedCard.effects as effect}
                        <div class="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <h3 class="font-medium mb-2">{effect.type}</h3>
                            <p class="text-gray-600">{effect.description}</p>
                            {#if effect.rules}
                                <div class="mt-2 text-sm text-gray-500">
                                    Rules: {effect.rules}
                                </div>
                            {/if}
                        </div>
                    {/each}
                    {#if 'diceRange' in selectedCard && selectedCard.diceRange}
                        <div class="mt-4 border-t pt-4">
                            <div class="flex items-center gap-2 text-gray-600">
                                <Icon icon="lucide:dices" class="h-5 w-5" />
                                <span>Dice Range:</span>
                                {#if 'success' in selectedCard.diceRange}
                                    <span>Success: {selectedCard.diceRange.success}, Fail: {selectedCard.diceRange.fail}</span>
                                {:else}
                                    <span>High: {selectedCard.diceRange.high}, Low: {selectedCard.diceRange.low}</span>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="border-t p-4 bg-gray-50 flex justify-end">
                <button
                    on:click={closeModal}
                    class="px-4 py-2 bg-white hover:bg-gray-100 rounded-md border transition-colors duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
{/if}
