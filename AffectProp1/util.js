function shuffle_array(arr) {
	for (let i = arr.length -1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

// randomize which structure appears on which side
const side = Math.floor(Math.random() * 2);

function create_balanced_array(json_object) {
	let tv_array = [];
	for (let i = 0; i < 4; i++) {
		obj = {};
		obj.property = json_object[i].comparison_neutral_prop;
		if (side < 1) {
			lefthand = json_object[i].directional_comparison;
			righthand = json_object[i].nondirectional_comparison;
		} else {
			lefthand = json_object[i].nondirectional_comparison;
			righthand = json_object[i].directional_comparison;
		};		
		obj.display = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div></div>'+
					'<p style="color:blue">'+obj.property+'</p><br>';	
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "literal";
		obj.data.property = "neutral";
		tv_array.push(obj);		
	}
	for (let i = 4; i < 8; i++) {
		obj = {};
		obj.property = json_object[i].comparison_affective_prop;
		if (side < 1) {
			lefthand = json_object[i].directional_comparison;
			righthand = json_object[i].nondirectional_comparison;
		} else {
			lefthand = json_object[i].nondirectional_comparison;
			righthand = json_object[i].directional_comparison;
		};		
		obj.display = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div></div>'+
					'<p style="color:blue">'+obj.property+'</p><br>';	
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "literal";
		obj.data.property = "affective";
		tv_array.push(obj);		
	}
		for (let i = 8; i < 12; i++) {
		obj = {};
		obj.property = json_object[i].simile_neutral_prop;
		if (side < 1) {
			lefthand = json_object[i].directional_simile;
			righthand = json_object[i].nondirectional_simile;
		} else {
			lefthand = json_object[i].nondirectional_simile;
			righthand = json_object[i].directional_simile;
		};		
		obj.display = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div></div>'+
					'<p style="color:blue">'+obj.property+'</p><br>';	
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "simile";
		obj.data.property = "neutral";
		tv_array.push(obj);		
	}
	for (let i = 12; i < 16; i++) {
		obj = {};
		obj.property = json_object[i].simile_affective_prop;
		if (side < 1) {
			lefthand = json_object[i].directional_simile;
			righthand = json_object[i].nondirectional_simile;
		} else {
			lefthand = json_object[i].nondirectional_simile;
			righthand = json_object[i].directional_simile;
		};		
		obj.display = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div></div>'+
					'<p style="color:blue">'+obj.property+'</p><br>';	
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "simile";
		obj.data.property = "affective";
		tv_array.push(obj);		
	}
	return tv_array;
}