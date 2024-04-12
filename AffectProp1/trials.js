let affect_objects = [
{"directional_comparison": "Lizards are like snakes", "nondirectional_comparison": "Lizards and snakes are alike", "directional_simile": "Mountain roads are like snakes", "nondirectional_simile": "Mountain roads and snakes are alike", "comparison_neutral_prop": "Both lizards and snakes move close to the ground and are therefore difficult to notice", "comparison_affective_prop": "Both lizards and snakes move close to the ground and are therefore difficult to defend oneself from", "simile_neutral_prop": "Both mountain roads and snakes are winding and elongated", "simile_affective_prop": "Both mountain roads and snakes are winding and dangerous"},
{"directional_comparison": "Ghouls are like vampires", "nondirectional_comparison": "Ghouls and vampires are alike", "directional_simile": "Debt collectors are like vampires", "nondirectional_simile": "Debt collectors and vampires are alike", "comparison_neutral_prop": "Both ghouls and vampires are supernatural creatures", "comparison_affective_prop": "Both ghouls and vampires are supernatural monsters", "simile_neutral_prop": "Both debt collectors and vampires rely on others to survive", "simile_affective_prop": "Both debt collectors and vampires prey on others to survive"},
{"directional_comparison": "A dictionary is like an encyclopedia", "nondirectional_comparison": "A dictionary and an encyclopedia are alike", "directional_simile": "A professor is like an encyclopedia", "nondirectional_simile": "A professor and an encyclopedia are alike", "comparison_neutral_prop": "Both dictionaries and encyclopedias provide general information", "comparison_affective_prop": "Both dictionaries and encyclopedias provide important information", "simile_neutral_prop": "Both professors and encyclopedias are sources of certain information ", "simile_affective_prop": "Both professors and encyclopedias are sources of useful information"},
{"directional_comparison": "A hot spring is like a volcanic geyser", "nondirectional_comparison": "A hot spring and a volcanic geyser are alike", "directional_simile": "A hot temper is like a volcanic geyser", "nondirectional_simile": "A hot temper and a volcanic geyser are alike", "comparison_neutral_prop": "Hot springs and volcanic geysers are both rare natural phenomena", "comparison_affective_prop": "Hot springs and volcanic geysers are both impressive natural phenomena", "simile_neutral_prop": "Hot tempers and volcanic geysers both erupt unexpectedly", "simile_affective_prop": "Hot tempers and volcanic geysers both erupt violently"},
{"directional_comparison": "Nursery rhymes are like lullabies", "nondirectional_comparison": "Nursery rhymes and lullabies are alike", "directional_simile": "Lectures are like lullabies", "nondirectional_simile": "Lectures and lullabies are alike", "comparison_neutral_prop": "Both nursery rhymes and lullabies are intended for young children", "comparison_affective_prop": "Both nursery rhymes and lullabies are excellent for young children", "simile_neutral_prop": "Both lectures and lullabies influence their audiences", "simile_affective_prop": "Both lectures and lullabies exhaust their audiences"},
{"directional_comparison": "Tire irons are like crow bars", "nondirectional_comparison": "Tire irons and crow bars are alike", "directional_simile": "Questions are like crow bars", "nondirectional_simile": "Questions and crow bars are alike", "comparison_neutral_prop": "Both tire irons and crow bars are curved metal instruments", "comparison_affective_prop": "Both tire irons and crow bars are useful metal instruments", "simile_neutral_prop": "Both questions and crow bars give one access to hidden or closed-off things", "simile_affective_prop": "Both questions and crow bars give one access to interesting and valuable things"},
{"directional_comparison": "Steamrollers are like bulldozers", "nondirectional_comparison": "Steamrollers and bulldozers are alike", "directional_simile": "Salesmen are like bulldozers", "nondirectional_simile": "Salesmen and bulldozers are alike", "comparison_neutral_prop": "Both steamrollers and bulldozers are very heavy vehicles", "comparison_affective_prop": "Both steamrollers and bulldozers are very powerful vehicles", "simile_neutral_prop": "Both salesmen and bulldozers move aside obstacles in their path ", "simile_affective_prop": "Both salesmen and bulldozers wipe out obstacles in their path"},
{"directional_comparison": "Tigers are like lions", "nondirectional_comparison": "Tigers and lions are alike", "directional_simile": "Monarchs are like lions", "nondirectional_simile": "Monarchs and lions are alike", "comparison_neutral_prop": "Both tigers and lions are wild predators", "comparison_affective_prop": "Both tigers and lions are powerful predators", "simile_neutral_prop": "Both monarchs and lions are individual rulers", "simile_affective_prop": "Both monarchs and lions are powerful rulers"},
{"directional_comparison": "Microwaves are like ovens", "nondirectional_comparison": "Microwaves and ovens are alike", "directional_simile": "Deserts are like ovens", "nondirectional_simile": "Deserts and ovens are alike", "comparison_neutral_prop": "Both microwaves and ovens warm food quickly", "comparison_affective_prop": "Both microwaves and ovens warm food easily and efficiently", "simile_neutral_prop": "Both deserts and ovens warm their contents regularly", "simile_affective_prop": "Both deserts and ovens warm their contents intensely"},
{"directional_comparison": "Manacles are like shackles", "nondirectional_comparison": "Manacles and shackles are alike", "directional_simile": "Obligations are like shackles", "nondirectional_simile": "Obligations and shackles are alike", "comparison_neutral_prop": "Both manacles and shackles are used to handle prisoners", "comparison_affective_prop": "Both manacles and shackles are used to restrict prisoners", "simile_neutral_prop": "Obligations and shackles both limit one's actions", "simile_affective_prop": "Obligations and shackles both limit one's freedom"},
{"directional_comparison": "Landslides are like earthquakes", "nondirectional_comparison": "Landslides and earthquakes are alike", "directional_simile": "Revolutions are like earthquakes", "nondirectional_simile": "Revolutions and earthquakes are alike", "comparison_neutral_prop": "Landslides and earthquakes are both unpredictable natural phenomena", "comparison_affective_prop": "Landslides and earthquakes are both unpredictable natural disasters", "simile_neutral_prop": "Revolutions and earthquakes both cause a sudden change", "simile_affective_prop": "Revolutions and earthquakes both cause a violent change"},
{"directional_comparison": "Dynamite sticks are like time bombs", "nondirectional_comparison": "Dynamite sticks and time bombs are alike", "directional_simile": "Cigarettes are like time bombs", "nondirectional_simile": "Cigarettes and time bombs are alike", "comparison_neutral_prop": "Dynamite sticks and time bombs both go off after a certain time", "comparison_affective_prop": "Dynamite sticks and time bombs both inflict damage after a certain time", "simile_neutral_prop": "It takes time to experience the influence of both cigarettes and time bombs", "simile_affective_prop": "It takes time to experience the harm of both cigarettes and time bombs"},
{"directional_comparison": "A war is like a battle", "nondirectional_comparison": "A war and a battle are alike", "directional_simile": "An argument is like a battle", "nondirectional_simile": "An argument and a battle are alike", "comparison_neutral_prop": "Wars and battles are both armed conflicts", "comparison_affective_prop": "Wars and battles are both violent conflicts", "simile_neutral_prop": "Both arguments and battles can be won or lost", "simile_affective_prop": "Both arguments and battles can cause serious damage"},
{"directional_comparison": "Protective padding is like body armor", "nondirectional_comparison": "Protective padding and body armor are alike", "directional_simile": "Self-confidence is like body armor", "nondirectional_simile": "Self-confidence and body armor are alike", "comparison_neutral_prop": "Both protective padding and body armor are worn in specialized situations", "comparison_affective_prop": "Both protective padding and body armor are worn in dangerous situations", "simile_neutral_prop": "Both self-confidence and body armor keep their possessors from being influenced by outside forces", "simile_affective_prop": "Both self-confidence and body armor protect their possessors from being harmed by outside forces"},
{"directional_comparison": "Art galleries are like museums", "nondirectional_comparison": "Art galleries and museums are alike", "directional_simile": "Family albums are like museums", "nondirectional_simile": "Family albums and museums are alike", "comparison_neutral_prop": "Both art galleries and museums are public buildings where different objects are on display", "comparison_affective_prop": "Both art galleries and museums are public buildings where valuable artifacts are on display", "simile_neutral_prop": "Both family albums and museums document various periods", "simile_affective_prop": "Both family albums and museums document important periods"},
{"directional_comparison": "Moths are like butterflies", "nondirectional_comparison": "Moths and butterflies are alike", "directional_simile": "Dancers are like butterflies", "nondirectional_simile": "Dancers and butterflies are alike", "comparison_neutral_prop": "Both moths and butterflies have colorful patterns on their wings", "comparison_affective_prop": "Both moths and butterflies have exquisite patterns on their wings", "simile_neutral_prop": "Dancers and butterflies both move lightly", "simile_affective_prop": "Dancers and butterflies both move beautifully"},
{"directional_comparison": "House arrest is like imprisonment", "nondirectional_comparison": "House arrest and imprisonment are alike", "directional_simile": "Illiteracy is like imprisonment", "nondirectional_simile": "Illiteracy and imprisonment are alike", "comparison_neutral_prop": "House arrest and imprisonment are both measures employed by law enforcement to confine individuals", "comparison_affective_prop": "House arrest and imprisonment are both solutions employed by justice systems for dealing with criminals", "simile_neutral_prop": "Illiteracy and imprisonment both keep one from engaging with the outside world", "simile_affective_prop": "Illiteracy and imprisonment both keep one from experiencing the beauty of the world"},
{"directional_comparison": "LED lamps are like spotlights", "nondirectional_comparison": "LED lamps and spotlights are alike", "directional_simile": "Proverbs are like spotlights", "nondirectional_simile": "Proverbs and spotlights are alike", "comparison_neutral_prop": "LED lamps and spotlights both cast bright light", "comparison_affective_prop": "LED lamps and spotlights both cast focused light", "simile_neutral_prop": "Proverbs and spotlights both present their object in a new light", "simile_affective_prop": "Proverbs and spotlights both illuminate their object in a helpful way"}
];

//From the ARC Nonword Database (4-6 letters, neighborhood size = 1)
let nons_words = ["CREELDs","GRAIMs","YIRKs","JUVEs","WHUSKs","PLANCHes","PLYMEs","DRONCs"];
//let nons_words = ["cridges","gwarfs","thirks","nosses","spacks","blaiths","prooms","yuts"];

let filler_objects = ["foxes","cities","beards","hallways","telescopes","forests","beehives","fugitives"];

/*
let nons_objects = [
	{
		"data": {"phrasing": "nondirectional",
				"propNum": "one"},
		"text": `The two share one specific property.`
	},
	{
		"data": {"phrasing": "nondirectional",
				"propNum": "many"},
		"text": `The two share a large number of properties, constituting a broad sense of similarity between them.`
	},
	{
		"data": {"phrasing": "directional",
				"propNum": "one"},
		"text": `One specific property of the first is also shared by the second.`
	},
	{
		"data": {"phrasing": "directional",
				"propNum": "many"},
		"text": `A large number of properties of the first are also shared by the second.`
	}
];

let nonce_instr = [
	{
		"data": {"phrasing": "nondirectional",
				"propNum": "one"},
		"text": `Suppose that you want to express the fact that two things (a ZUM and a GAX) share one specific property.`
	},
	{
		"data": {"phrasing": "nondirectional",
				"propNum": "many"},
		"text": `Suppose that you want to express the fact that two things (a ZUM and a GAX) share a large number of properties, constituting 
			a broad sense of similarity between them.`
	},
	{
		"data": {"phrasing": "directional",
				"propNum": "one"},
		"text": `Suppose that you want to express the fact that one specific property of one thing (a ZUM) is also shared by another thing 
			(a GAX).`
	},
	{
		"data": {"phrasing": "directional",
				"propNum": "many"},
		"text": `Suppose that you want to express the fact that a large number of properties of one thing (a ZUM) are also shared by another 
			thing (a GAX).`
	}
];
*/
