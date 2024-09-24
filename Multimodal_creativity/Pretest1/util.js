function shuffle_array(arr) {
	for (let i = arr.length -1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

let basic_shape_names = ["circle","square","equiTriangle","rectangle","ellipse","rightTriangle","star","cross","heart","arrow",
					"ring","halfcircle","arch","crescent","slice","frame","trapez","diamond","el","chevron"];

//randomly generate a rotation angle: 0, 45, 90 or 135
function random_rotation() {
	var alpha = Math.floor(Math.random() * 4) * 0;
	return alpha;
}

//creating a simuli array with four levels of familiarity
function create_basic_imgs() {
	let basic_imgs_A = [];
	for (let i = 0; i < 10; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/B'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = basic_shape_names[i];
		obj.data.type = "basic";
		obj.data.subtype = "basicA";
		obj.data.rotation = rot;
		basic_imgs_A.push(obj);
	};
	let basic_imgs_B = [];
	for (let i = 10; i < 20; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/B'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = basic_shape_names[i];
		obj.data.type = "basic";
		obj.data.type = "basicB";
		obj.data.rotation = rot;
		basic_imgs_B.push(obj);
	};
	return [basic_imgs_A,basic_imgs_B];
}

function create_complex_imgs() {
	let complex_imgs_A = [];
	for (let i = 0; i < 10; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/C'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = "Comp"+i;
		obj.data.type = "complex";
		obj.data.subtype = "complexA";
		obj.data.rotation = rot;
		complex_imgs_A.push(obj);
	};
	let complex_imgs_B = [];
	for (let i = 10; i < 20; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/C'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = "Comp"+i;
		obj.data.type = "complex";
		obj.data.subtype = "complexB";
		obj.data.rotation = rot;
		complex_imgs_B.push(obj);
	};
	return [complex_imgs_A,complex_imgs_B];
}

//combining an array of four image arrays pseudo-randomly (start every quartet with a basicA shape)
function combine_arrays(arr_squared) {
	let img_array = [];
	for (let i = 0; i < arr_squared[0].length; i++) {
		img_array.push(arr_squared[0][i]);
		for (let j = arr_squared.length -1; j > 0; j--) {
			var pos = Math.floor(Math.random() * j)+1;
			[arr_squared[j][i],arr_squared[pos][i]] = [arr_squared[pos][i],arr_squared[j][i]];
		};
		img_array.push(arr_squared[1][i]);
        img_array.push(arr_squared[2][i]);
        img_array.push(arr_squared[3][i]);
	};
	return img_array;
}

//creating a simuli array with two levels of familiarity
/*
function create_basic_imgs() {
	let basic_imgs = [];
	for (let i = 0; i < 20; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/B'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = basic_shape_names[i];
		obj.data.type = "basic";
		obj.data.rotation = rot;
		basic_imgs.push(obj);
	};
	return basic_imgs;
}

function create_complex_imgs() {
	let complex_imgs = [];
	for (let i = 0; i < 20; i++) {
		obj = {};
		rot = random_rotation();
		obj.img = '<img src="img/C'+i+'.jpg" style="width:100px; rotate:'+rot+'deg"></img>';
		obj.data = {};
		obj.data.name = "Comp"+i;
		obj.data.type = "complex";
		obj.data.rotation = rot;
		complex_imgs.push(obj);
	};
	return complex_imgs;
}

//combining the two stimulus arrays alternatingly for pseudo-randomization (want to start with a basic shape)
function combine_arrays(arr1,arr2) {
	let img_array = [];
	for (let i = 0; i < arr1.length; i++) {
		img_array.push(arr1[i]);
		img_array.push(arr2[i]);
	};
	return img_array;
}
*/

var nameCounter = 0; //counting completed trials for the progress bar

//checking that responses have no spaces/special characters and looping back if they do
var repeat_loop = false; //a "switch" variable for looping

var repeat_message = { //a full slide for telling participants they got it wrong
	type: jsPsychHtmlButtonResponse,
	stimulus: 'Entschuldigung, Sie können das Objekt nur mit genau einem Wort benennen, ohne Leerzeichen oder Satzzeichen.<br><br>',
	choices: ['Zurück']
}; 

var specChars = /[ `!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/; //the characters we want to exclude (dash not included)

//using jsPsych's conditional_function to do 3 things: display the repeat_message slide, flip the repeat_loop switch, increment responses
var repeat_conditional = {
	timeline: [repeat_message],
	conditional_function: function() {
		var lastResponse = jsPsych.data.get().last(1).values()[0].response.Q0;
		if (specChars.test(lastResponse) === true) {
			repeat_loop = true;
			return true;
		} else {
			repeat_loop = false;
			nameCounter++;
			return false;
		}
	}
}; 

// page refresh
$(window).bind('beforeunload', function(e) {
	// TODO: adjust the right sentence
    return "Unloading this page may lose data. What do you want to do..."
    e.preventDefault();
});
