function shuffle_array(arr) {
	for (let i = arr.length -1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

// randomize which structure appears on which side
const side = Math.floor(Math.random() * 2);

if (side < 1) {
	function pres_sides(w1,w2) {
		lefthand = '<span style="text-transform: capitalize">'+w1+'</span> are like '+w2;
		righthand = '<span style="text-transform: capitalize">'+w1+'</span> and '+w2+' are alike';
		return [lefthand,righthand];
		}
	} else {
	function pres_sides(w1,w2) {
		righthand = '<span style="text-transform: capitalize">'+w1+'</span> are like '+w2;
		lefthand = '<span style="text-transform: capitalize">'+w1+'</span> and '+w2+' are alike';
		return [lefthand,righthand];
		}
	};

//takes two sentences + an interpretation and returns full display
function disp_func(lefthand,righthand,interp) {
	let display = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div></div>'+
					'<p>Interpretation: <span style="color:blue">'+interp+'</span></p><br>';
	return display;
};

//create pseudoword array
function create_nons_objects(rnd_words) {
	obj1 = {};
	obj1.data = {};
	obj1.data.phrasing = "nondirectional";
	obj1.data.propNum = "one";
	obj1.sents = pres_sides(rnd_words[0],rnd_words[1]);
	obj1.interp = '<span style="text-transform: capitalize">'+rnd_words[0]+"</span> and "+rnd_words[1]+" share one specific property";
	obj1.display = disp_func(obj1.sents[0],obj1.sents[1],obj1.interp);
	obj2 = {};
	obj2.data = {};
	obj2.data.phrasing = "nondirectional";
	obj2.data.propNum = "many";
	obj2.sents = pres_sides(rnd_words[2],rnd_words[3]);
	obj2.interp = '<span style="text-transform: capitalize">'+rnd_words[2]+"</span> and "+rnd_words[3]+" share a large number of properties";
	obj2.display = disp_func(obj2.sents[0],obj2.sents[1],obj2.interp);
	obj3 = {};
	obj3.data = {};
	obj3.data.phrasing = "directional";
	obj3.data.propNum = "one";
	obj3.sents = pres_sides(rnd_words[4],rnd_words[5]);
	obj3.interp = "One specific property of "+rnd_words[5]+" is also shared by "+rnd_words[4];
	obj3.display = disp_func(obj3.sents[0],obj3.sents[1],obj3.interp);
	obj4 = {};
	obj4.data = {};
	obj4.data.phrasing = "directional";
	obj4.data.propNum = "many";
	obj4.sents = pres_sides(rnd_words[6],rnd_words[7]);
	obj4.interp = "A large number of properties of "+rnd_words[7]+" are also shared by "+rnd_words[6];
	obj4.display = disp_func(obj4.sents[0],obj4.sents[1],obj4.interp);
	return [obj1,obj2,obj3,obj4];
};

//create affective properties array
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
		obj.display = disp_func(lefthand,righthand,obj.property);	
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
		obj.display = disp_func(lefthand,righthand,obj.property);
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
		obj.display = disp_func(lefthand,righthand,obj.property);
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
		obj.display = disp_func(lefthand,righthand,obj.property);	
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.type = "simile";
		obj.data.property = "affective";
		tv_array.push(obj);		
	}
	return tv_array;
};

//create filler array
function create_filler_objects(words) {
	obj1 = {};
	obj1.sents = pres_sides(words[0],words[1]);
	obj1.interp = '<span style="text-transform: capitalize">'+words[0]+"</span> and "+words[1]+" share one specific property";
	obj1.display = disp_func(obj1.sents[0],obj1.sents[1],obj1.interp);
	obj2 = {};
	obj2.sents = pres_sides(words[2],words[3]);
	obj2.interp = '<span style="text-transform: capitalize">'+words[2]+"</span> and "+words[3]+" share a large number of properties";
	obj2.display = disp_func(obj2.sents[0],obj2.sents[1],obj2.interp);
	obj3 = {};
	obj3.sents = pres_sides(words[4],words[5]);
	obj3.interp = "One specific property of "+words[5]+" is also shared by "+words[4];
	obj3.display = disp_func(obj3.sents[0],obj3.sents[1],obj3.interp);
	obj4 = {};
	obj4.sents = pres_sides(words[6],words[7]);
	obj4.interp = "A large number of properties of "+words[7]+" are also shared by "+words[6];
	obj4.display = disp_func(obj4.sents[0],obj4.sents[1],obj4.interp);
	return [obj1,obj2,obj3,obj4];
};