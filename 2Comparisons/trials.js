let trial_objects0 = [
	{
		"stimulus": '<b>Salesmen and ladders are alike</b>',
		"form": "nondirectional"
	},
	{
		"stimulus": '<b>Salesmen and bulldozers are alike</b>',
		"form": "nondirectional"
	},
	{
		"stimulus": "<b>Salesmen and vampires are alike</b>",
		"form": "nondirectional"
	},
	
];

let trial_objects1 = [
	{
		"directional_comparison": "Steamrollers are like bulldozers",
		"nondirectional_comparison": "Steamrollers and bulldozers are alike",
		"directional_simile": "Salesmen are like bulldozers",
		"nondirectional_simile": "Salesmen and bulldozers are alike",
		"comparison_salience": "balanced",
		"simile_salience": "balanced"
	},
	{
		"directional_comparison": "Ghouls are like vampires",
		"nondirectional_comparison": "Ghouls and vampires are alike",
		"directional_simile": "Debt collectors are like vampires",
		"nondirectional_simile": "Debt collectors and vampires are alike",
		"comparison_salience": "balanced",
		"simile_salience": "balanced"
	},
];

let trial_objects = [
	{ "directional_comparison": "Lizards are like snakes", "nondirectional_comparison": "Lizards and snakes are alike", "directional_simile": "Highways are like snakes", "nondirectional_simile": "Highways and snakes are alike", "comparison_salience": "balanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Dynamite sticks are like time bombs", "nondirectional_comparison": "Dynamite sticks and time bombs are alike", "directional_simile": "Cigarettes are like time bombs", "nondirectional_simile": "Cigarettes and time bombs are alike", "comparison_salience": "balanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Ghouls are like vampires", "nondirectional_comparison": "Ghouls and vampires are alike", "directional_simile": "Debt collectors are like vampires", "nondirectional_simile": "Debt collectors and vampires are alike", "comparison_salience": "balanced", "simile_salience": "balanced" },
	{ "directional_comparison": "A dictionary is like an encyclopedia", "nondirectional_comparison": "A dictionary and an encyclopedia are alike", "directional_simile": "A professor is like an encyclopedia", "nondirectional_simile": "A professor and an encyclopedia are alike", "comparison_salience": "balanced", "simile_salience": "balanced" },
	{ "directional_comparison": "A war is like a battle", "nondirectional_comparison": "A war and a battle are alike", "directional_simile": "An argument is like a battle", "nondirectional_simile": "An argument and a battle are alike", "comparison_salience": "balanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "A hot spring is like a volcanic geyser", "nondirectional_comparison": "A hot spring and a volcanic geyser are alike", "directional_simile": "A hot temper is like a volcanic geyser", "nondirectional_simile": "A hot temper and a volcanic geyser are alike", "comparison_salience": "balanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "Nursery rhymes are like lullabies", "nondirectional_comparison": "Nursery rhymes and lullabies are alike", "directional_simile": "Lectures are like lullabies", "nondirectional_simile": "Lectures and lullabies are alike", "comparison_salience": "balanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "Protective padding is like body armor", "nondirectional_comparison": "Protective padding and body armor are alike", "directional_simile": "Self-confidence is like body armor", "nondirectional_simile": "Self-confidence and body armor are alike", "comparison_salience": "balanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "Tire irons are like crow bars", "nondirectional_comparison": "Tire irons and crow bars are alike", "directional_simile": "Questions are like crow bars", "nondirectional_simile": "Questions and crow bars are alike", "comparison_salience": "balanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "Steamrollers are like bulldozers", "nondirectional_comparison": "Steamrollers and bulldozers are alike", "directional_simile": "Salesmen are like bulldozers", "nondirectional_simile": "Salesmen and bulldozers are alike", "comparison_salience": "imbalanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Art galleries are like museums", "nondirectional_comparison": "Art galleries and museums are alike", "directional_simile": "Family albums are like museums", "nondirectional_simile": "Family albums and museums are alike", "comparison_salience": "imbalanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Tigers are like lions", "nondirectional_comparison": "Tigers and lions are alike", "directional_simile": "Monarchs are like lions", "nondirectional_simile": "Monarchs and lions are alike", "comparison_salience": "imbalanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Moths are like butterflies", "nondirectional_comparison": "Moths and butterflies are alike", "directional_simile": "Dancers are like butterflies", "nondirectional_simile": "Dancers and butterflies are alike", "comparison_salience": "imbalanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Microwaves are like ovens", "nondirectional_comparison": "Microwaves and ovens are alike", "directional_simile": "Deserts are like ovens", "nondirectional_simile": "Deserts and ovens are alike", "comparison_salience": "imbalanced", "simile_salience": "balanced" },
	{ "directional_comparison": "Manacles are like shackles", "nondirectional_comparison": "Manacles and shackles are alike", "directional_simile": "Obligations are like shackles", "nondirectional_simile": "Obligations and shackles are alike", "comparison_salience": "imbalanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "LED lamps are like spotlights", "nondirectional_comparison": "LED lamps and spotlights are alike", "directional_simile": "Proverbs are like spotlights", "nondirectional_simile": "Proverbs and spotlights are alike", "comparison_salience": "imbalanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "House arrest is like imprisonment", "nondirectional_comparison": "House arrest and imprisonment are alike", "directional_simile": "Illiteracy is like imprisonment", "nondirectional_simile": "Illiteracy and imprisonment are alike", "comparison_salience": "imbalanced", "simile_salience": "imbalanced" },
	{ "directional_comparison": "Landslides are like earthquakes", "nondirectional_comparison": "Landslides and earthquakes are alike", "directional_simile": "Revolutions are like earthquakes", "nondirectional_simile": "Revolutions and earthquakes are alike", "comparison_salience": "imbalanced", "simile_salience": "imbalanced" },
]