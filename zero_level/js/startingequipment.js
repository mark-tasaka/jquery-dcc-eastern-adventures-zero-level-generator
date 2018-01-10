/*
getStartingEquipment() - returns a randomly selected piece of starting equipment for the character
*/
function getStartingEquipment(){
	let startingEquipment = [
		{"equipment": "Backpack"},
		{"equipment": "Candle"},
		{"equipment": "Chain (10 feet)"},
		{"equipment": "Chalk (1 piece)"},
		{"equipment": "Chest (empty)"},
		{"equipment": "Crowbar"},
		{"equipment": "Flask (empty)"},
		{"equipment": "Flint and Steel"},
		{"equipment": "Grappling Hook"},
		{"equipment": "Small hammer"},
		{"equipment": "Holy Symbol"},
		{"equipment": "Holy Water (1 vial)"},
		{"equipment": "Iron Spike"},
		{"equipment": "Lantern"},
		{"equipment": "Mirror (hand size)"},
		{"equipment": "Oil (1 flask)"},
		{"equipment": "10 foot Pole"},
		{"equipment": "Ration (1 day)"},
		{"equipment": "Rope (50 feet)"},
		{"equipment": "Sack (large)"},
		{"equipment": "Sack (small)"},
		{"equipment": "Thieves Tools"},
		{"equipment": "Torch (1)"},
		{"equipment": "Waterskin"}
		];
		return startingEquipment[Math.floor(Math.random() * 24)]; 
}

