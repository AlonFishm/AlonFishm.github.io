function shuffle_array(arr) {
	for (let i = arr.length -1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

function create_balanced_array(json_object) {
	let tv_array = [];
	for (let i = 0; i < 4; i++) {
		obj = {};
		obj.properties = [json_object[i].comparison_property1,json_object[i].comparison_property2,json_object[i].comparison_property3,json_object[i].bad_property1,json_object[i].bad_property2];
		obj.options = shuffle_array(obj.properties);
		obj.display = '<p><b>'+json_object[i].directional_comparison+'</b></p><p>How so? (you may select more than one)</p>';
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "literal";
		obj.data.grammar = "directional";
		obj.data.salience = json_object[i].comparison_salience;
		tv_array.push(obj);		
	}
	for (let i = 4; i < 8; i++) {
		obj = {};
		obj.properties = [json_object[i].comparison_property1,json_object[i].comparison_property2,json_object[i].comparison_property3,json_object[i].bad_property1,json_object[i].bad_property2];
		obj.options = shuffle_array(obj.properties);
		obj.display = '<p><b>'+json_object[i].nondirectional_comparison+'</b></p><p>How so? (you may select more than one)</p>';
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "literal";
		obj.data.grammar = "nondirectional";
		obj.data.salience = json_object[i].comparison_salience;
		tv_array.push(obj);		
	}
		for (let i = 8; i < 12; i++) {
		obj = {};
		obj.properties = [json_object[i].simile_property1,json_object[i].simile_property2,json_object[i].simile_property3,json_object[i].bad_property1,json_object[i].bad_property2];
		obj.options = shuffle_array(obj.properties);
		obj.display = '<p><b>'+json_object[i].directional_simile+'</b></p><p>How so? (you may select more than one)</p>';
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "simile";
		obj.data.grammar = "directional";
		obj.data.salience = json_object[i].simile_salience;
		tv_array.push(obj);		
	}
	for (let i = 12; i < 16; i++) {
		obj = {};
		obj.properties = [json_object[i].simile_property1,json_object[i].simile_property2,json_object[i].simile_property3,json_object[i].bad_property1,json_object[i].bad_property2];
		obj.options = shuffle_array(obj.properties);
		obj.display = '<p><b>'+json_object[i].nondirectional_simile+'</b></p><p>How so? (you may select more than one)</p>';
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "simile";
		obj.data.grammar = "nondirectional";
		obj.data.salience = json_object[i].simile_salience;
		tv_array.push(obj);		
	}
	return tv_array;
}