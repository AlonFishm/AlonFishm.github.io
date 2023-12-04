function shuffle_array(arr) {
	for (let i = arr.length -1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

// makes a (non-shuffled) counterbalanced array of 16 stimuli
function create_balanced_array(json_object) {
	let tv_array = [];
	for (let i = 0; i < 4; i++) {
		obj = {};
		obj.data = {};
		obj.stimulus = '<b>'+json_object[i].directional_comparison+'</b>';
		obj.data.item = json_object[i].directional_comparison;
		obj.data.syntax = "directional";
		obj.data.type = "literal";
		obj.data.salience = json_object[i].comparison_salience;
		tv_array.push(obj);
	}
	for (let i = 4; i < 8; i++) {
		obj = {};
		obj.data = {};
		obj.stimulus = '<b>'+json_object[i].nondirectional_comparison+'</b>';
		obj.data.item = json_object[i].nondirectional_comparison;
		obj.data.syntax = "nondirectional";
		obj.data.type = "literal";
		obj.data.salience = json_object[i].comparison_salience;
		tv_array.push(obj);
	}
	for (let i = 8; i < 12; i++) {
		obj = {};
		obj.data = {};
		obj.stimulus = '<b>'+json_object[i].directional_simile+'</b>';
		obj.data.item = json_object[i].directional_simile;
		obj.data.syntax = "directional";
		obj.data.type = "simile";
		obj.data.salience = json_object[i].simile_salience;
		tv_array.push(obj);
	}
	for (let i = 12; i < 16; i++) {
		obj = {};
		obj.data = {};
		obj.stimulus = '<b>'+json_object[i].nondirectional_simile+'</b>';
		obj.data.item = json_object[i].nondirectional_simile;
		obj.data.syntax = "nondirectional";
		obj.data.type = "simile";
		obj.data.salience = json_object[i].simile_salience;
		tv_array.push(obj);
	}
	return tv_array;
};


// makes an array that is fully random, no counterbalance between stimuli types
function create_tv_array(json_object) {
    let tv_array = [];
    for (let i = 0; i < json_object.length; i++) {
        obj = {};
		obj.data = {};
		let rnd = Math.floor(Math.random()*4);
		if (rnd == 0) {
			obj.stimulus = '<b>'+json_object[i].directional_comparison+'</b>';
			obj.data.item = json_object[i].directional_comparison;
			obj.data.syntax = "directional";
			obj.data.type = "literal";
			obj.data.salience = json_object[i].comparison_salience;
		} else if (rnd == 1) {
			obj.stimulus = '<b>'+json_object[i].nondirectional_comparison+'</b>';
			obj.data.item = json_object[i].nondirectional_comparison;
			obj.data.syntax = "nondirectional";
			obj.data.type = "literal";
			obj.data.salience = json_object[i].comparison_salience;
		} else if (rnd == 2) {
			obj.stimulus = '<b>'+json_object[i].directional_simile+'</b>';
			obj.data.item = json_object[i].directional_simile;
			obj.data.syntax = "directional";
			obj.data.type = "simile";
			obj.data.salience = json_object[i].simile_salience;
		} else {
			obj.stimulus = '<b>'+json_object[i].nondirectional_simile+'</b>';
			obj.data.item = json_object[i].nondirectional_simile;
			obj.data.syntax = "nondirectional";
			obj.data.type = "simile";
			obj.data.salience = json_object[i].simile_salience;
		}
		tv_array.push(obj);
	}
	return tv_array;
};

// makes an information-rich but kinda unwieldy array
function Xcreate_tv_array(json_object) {
    let tv_array = [];
    for (let i = 0; i < json_object.length; i++) {
        obj = {};
		obj.dir_com = {};
		obj.dir_com.stimulus = '<b>'+json_object[i].directional_comparison+'</b>';
		obj.dir_com.syntax = "directional";
		obj.dir_com.type = "literal";
		obj.dir_com.salience = json_object[i].comparison_salience;
		obj.non_com = {};
		obj.non_com.stimulus = '<b>'+json_object[i].nondirectional_comparison+'</b>';
		obj.non_com.syntax = "nondirectional";
		obj.non_com.type = "literal";
		obj.non_com.salience = json_object[i].comparison_salience;
		obj.dir_sim = {};
		obj.dir_sim.stimulus = '<b>'+json_object[i].directional_simile+'</b>';
		obj.dir_sim.syntax = "directional";
		obj.dir_sim.type = "simile";
		obj.dir_sim.salience = json_object[i].simile_salience;
		obj.non_sim = {};
		obj.non_sim.stimulus = '<b>'+json_object[i].nondirectional_simile+'</b>';
		obj.non_sim.syntax = "nondirectional";
		obj.non_sim.type = "simile";
		obj.non_sim.salience = json_object[i].simile_salience;
        tv_array.push(obj)
    }
    return tv_array;
};

