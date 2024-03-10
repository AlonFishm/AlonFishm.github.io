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
		stim_sides = 'dir_nondir';
		leftEx1 = 'Lucy is like Sarah';
		rightEx1 = 'Lucy and Sarah are alike';
		leftEx2 = 'Korea is like Italy';
		rightEx2 = 'Korea and Italy are alike';
	} else {
		stim_sides = 'nondir_dir';
		leftEx1 = 'Lucy and Sarah are alike';
		rightEx1 = 'Lucy is like Sarah';
		leftEx2 = 'Korea and Italy are alike';
		rightEx2 = 'Korea is like Italy';
	};

// makes a (non-shuffled) array of 16 stimuli, counterbalanced by Type (comparison vs simile) and PropertyNum (1 through 4), randomizing which structures appear on left & right
function create_balanced_array2(json_object) {
	let tv_array = [];
	for (let i = 0; i < 8; i++) {
		const num = i%4;
		obj = {};
		obj.properties = [json_object[i].comparison_property1,json_object[i].comparison_property2,json_object[i].comparison_property3,json_object[i].comparison_property4];
		obj.list = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">';
		for (let j = 0; j < num+1; j++) {
			obj.list += '<li>' + obj.properties[j] + '</li>';
		}	
		obj.list += '</ul></div>';
		if (side < 1) {
			lefthand = json_object[i].directional_comparison;
			righthand = json_object[i].nondirectional_comparison;
		} else {
			lefthand = json_object[i].nondirectional_comparison;
			righthand = json_object[i].directional_comparison;
		};		
		obj.choices = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		obj.display = obj.list + '<div style="visibility:hidden">' + obj.choices +
					'<button class="jspsych-btn">["A is much better","A is better","No preference","B is better","B is much better"]</button></div></div>';
		obj.fullDisplay = obj.list + obj.choices;
		obj.duration = (num+1)*500+1000;
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.number = num+1;
		obj.data.type = "literal";
		obj.data.salience = json_object[i].comparison_salience;
		obj.data.sides = stim_sides;
		tv_array.push(obj);
	}
	for (let i = 8; i < 16; i++) {
		const num = i%4;
		obj = {};
		obj.properties = [json_object[i].simile_property1,json_object[i].simile_property2,json_object[i].simile_property3,json_object[i].simile_property4];
		obj.list = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">';
		for (let j = 0; j < num+1; j++) {
			obj.list += '<li>' + obj.properties[j] + '</li>';
		}	
		obj.list += '</ul></div>';
		if (side < 1) {
			lefthand = json_object[i].directional_simile;
			righthand = json_object[i].nondirectional_simile;
		} else {
			lefthand = json_object[i].nondirectional_simile;
			righthand = json_object[i].directional_simile;
		};		
		obj.choices = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		obj.display = obj.list + '<div style="visibility:hidden">' + obj.choices +
					'<button class="jspsych-btn">["A is much better","A is better","No preference","B is better","B is much better"]</button></div></div>';
		obj.fullDisplay = obj.list + obj.choices;
		obj.duration = (num+1)*500+1000;
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.number = num+1;
		obj.data.type = "simile";
		obj.data.salience = json_object[i].simile_salience;
		obj.data.sides = stim_sides;
		tv_array.push(obj);
	}
	return tv_array;
};

/*
// makes a (non-shuffled) array of 16 stimuli, counterbalanced by Type (comparison vs simile) and PropertyNum (1 through 4)
function create_balanced_array(json_object) {
	let tv_array = [];
	for (let i = 0; i < 8; i++) {
		const num = i%4;
		obj = {};
		obj.properties = [json_object[i].comparison_property1,json_object[i].comparison_property2,json_object[i].comparison_property3,json_object[i].comparison_property4];
		obj.list = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">';
		for (let j = 0; j < num+1; j++) {
			obj.list += '<li>' + obj.properties[j] + '</li>';
		}	
		obj.list += '</ul></div>';
		obj.choices = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					json_object[i].directional_comparison+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					json_object[i].nondirectional_comparison+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		obj.display = obj.list + '<div style="visibility:hidden">' + obj.choices +
					'<button class="jspsych-btn">["A is much better","A is better","No preference","B is better","B is much better"]</button></div></div>';
		obj.fullDisplay = obj.list + obj.choices;
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.number = num+1;
		obj.data.type = "literal";
		obj.data.salience = json_object[i].comparison_salience;
		tv_array.push(obj);
	}
	for (let i = 8; i < 16; i++) {
		const num = i%4;
		obj = {};
		obj.properties = [json_object[i].simile_property1,json_object[i].simile_property2,json_object[i].simile_property3,json_object[i].simile_property4];
		obj.list = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">';
		for (let j = 0; j < num+1; j++) {
			obj.list += '<li>' + obj.properties[j] + '</li>';
		}	
		obj.list += '</ul></div>';
		obj.choices = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					json_object[i].directional_simile+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					json_object[i].nondirectional_simile+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		obj.display = obj.list + '<div style="visibility:hidden">' + obj.choices +
					'<button class="jspsych-btn">["A is much better","A is better","No preference","B is better","B is much better"]</button></div></div>';
		obj.fullDisplay = obj.list + obj.choices;
		obj.data = {};
		obj.data.item = json_object[i].directional_comparison;
		obj.data.number = num+1;
		obj.data.type = "simile";
		obj.data.salience = json_object[i].simile_salience;
		tv_array.push(obj);
	}
	return tv_array;
};
*/

// copy text on click
function copy(that){
var inp =document.createElement('input');
document.body.appendChild(inp)
inp.value =that.textContent
inp.select();
document.execCommand('copy',false);
inp.remove();
};

/*
//simple test function
function simple_ex(json_object) {
	let obj1 = {};
		obj1.display = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%"><li>'+
					json_object[0].comparison_property1+
					'</li><li>'+json_object[0].comparison_property2+
					'</li><li>'+json_object[0].comparison_property3+
					'</li><li>'+json_object[0].comparison_property4+
					'</li></ul></div><div style="width:600px"><div style="width:250px; float: left; visibility:hidden; margin-left:50px"><p><b>'+
					json_object[0].directional_comparison+
					'</b><br>(A)</p></div><div style="width:250px; float: right; visibility:hidden"><p><b>'+
					json_object[0].nondirectional_comparison+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';
		obj1.fulldisplay = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%"><li>'+
					json_object[0].comparison_property1+
					'</li><li>'+json_object[0].comparison_property2+
					'</li><li>'+json_object[0].comparison_property3+
					'</li><li>'+json_object[0].comparison_property4+
					'</li></ul></div><div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					json_object[0].directional_comparison+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					json_object[0].nondirectional_comparison+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';			
	return obj1;
}

//better test function
function better_ex(json_object) {
	let ex_array = [];
	for (let i = 0; i < 2; i++) {
		obj = {};
		obj.display = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%"><li>'+
					json_object[i].comparison_property1+
					'</li><li>'+json_object[i].comparison_property2+
					'</li><li>'+json_object[i].comparison_property3+
					'</li><li>'+json_object[i].comparison_property4+
					'</li></ul></div><div style="width:600px"><div style="width:250px; float: left; visibility:hidden; margin-left:50px"><p>'+
					json_object[i].directional_comparison+
					'<br>(A)</p></div><div style="width:250px; float: right; visibility:hidden"><p>'+
					json_object[i].nondirectional_comparison+
					'<br>(B)</p></div><div style="visibility:hidden">buffer</div>';
		obj.fulldisplay = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%"><li>'+
					json_object[i].comparison_property1+
					'</li><li>'+json_object[i].comparison_property2+
					'</li><li>'+json_object[i].comparison_property3+
					'</li><li>'+json_object[i].comparison_property4+
					'</li></ul></div><div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					json_object[i].directional_comparison+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					json_object[i].nondirectional_comparison+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		ex_array.push(obj);
	}
	return ex_array
}

//even better test function
function even_better_ex(json_object) {
	let ex_array = [];
	for (let i = 0; i < 2; i++) {
		obj = {};
		obj.properties = [json_object[i].comparison_property1,json_object[i].comparison_property2,json_object[i].comparison_property3,json_object[i].comparison_property4];
		obj.list = '<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">';
		const num = Math.floor(Math.random()*4);
		for (let j = 0; j < num+1; j++) {
			obj.list += '<li>' + obj.properties[j] + '</li>';
		}	
		obj.list += '</ul></div>';
		obj.buffer = '<div style="width:600px"><div style="width:250px; float: left; visibility:hidden; margin-left:50px"><p>'+
					json_object[i].directional_comparison+
					'<br>(A)</p></div><div style="width:250px; float: right; visibility:hidden"><p>'+
					json_object[i].nondirectional_comparison+
					'<br>(B)</p></div><div style="visibility:hidden">buffer</div>';
		obj.choices = '<div style="width:600px"><div style="width:250px; float: left; margin-left:50px"><p><b>'+
					json_object[i].directional_comparison+
					'</b><br>(A)</p></div><div style="width:250px; float: right"><p><b>'+
					json_object[i].nondirectional_comparison+
					'</b><br>(B)</p></div><div style="visibility:hidden">buffer</div>';	
		ex_array.push(obj);
	}
	return ex_array;
};
	

*/