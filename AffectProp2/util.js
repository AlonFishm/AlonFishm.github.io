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
	function pres_sides(w1,w2) {
		lefthand = '<span style="text-transform: capitalize"><i>'+w1+'</i></span> are like <i>'+w2+'</i>';
		righthand = '<span style="text-transform: capitalize"><i>'+w1+'</i></span> and <i>'+w2+'</i> are alike';
		return [lefthand,righthand];
		}
	} else {
	stim_sides = 'nondir_dir';
	function pres_sides(w1,w2) {
		righthand = '<span style="text-transform: capitalize"><i>'+w1+'</i></span> are like <i>'+w2+'</i>';
		lefthand = '<span style="text-transform: capitalize"><i>'+w1+'</i></span> and <i>'+w2+'</i> are alike';
		return [lefthand,righthand];
		}
	};

//takes two sentences + an interpretation and returns full display
function disp_func(lefthand,righthand,interp) {
	let display = '<p style="color:blue">Say you feel that <b>'+interp+'</b></p>'+
					'<div style="width:800px"><div style="width:400px; float: left; margin-left:0px"><p><b>'+
					lefthand+
					'</b><br>(A)</p></div><div style="width:400px; float: right"><p><b>'+
					righthand+
					'</b><br>(B)</p></div><div style="visibility:hidden">all the buffer we could ever need</div></div>';
	return display;
};


function create_balanced_array(props_list,nons_list) {
	let tv_array = [];
	for (let i = 0; i < 4; i++) {
		obj = {};
		obj.property = props_list[i].property;
		obj.sents = pres_sides(nons_list[i],nons_list[i+8]);
		obj.interp = "<i>"+nons_list[i]+"</i> and <i>"+nons_list[i+8]+"</i> share some "+obj.property+" properties";
//		obj.interp = '<span style="text-transform: capitalize"><i>'+nons_list[i]+"</i></span> and <i>"+nons_list[i+8]+"</i> are both <b>"+obj.property+"</b>";
		obj.display = disp_func(obj.sents[0],obj.sents[1],obj.interp);
		obj.data = {};
		obj.data.type = "critical";
		obj.data.property = obj.property;
		obj.data.valence = props_list[i].valence;
		obj.data.sides = stim_sides;
		obj.data.rank = props_list[i].rank;
		obj.data.phrasing = "nondirectional";
		tv_array.push(obj);		
	};
	for (let i = 4; i < 8; i++) {
		obj = {};
		obj.property = props_list[i].property;
		obj.sents = pres_sides(nons_list[i],nons_list[i+8]);
		obj.interp = "<i>"+nons_list[i]+"</i> share some "+obj.property+" properties of <i>"+nons_list[i+8]+"</i>";
//		obj.interp = '<span style="text-transform: capitalize"><i>'+nons_list[i+8]+"</i></span> are <b>"+obj.property+'</b>, and so are <i>'+nons_list[i]+"</i>";
//		obj.interp = '<i>'+nons_list[i]+"</i> are <b>"+obj.property+'</b>';
		obj.display = disp_func(obj.sents[0],obj.sents[1],obj.interp);
		obj.data = {};
		obj.data.type = "critical";
		obj.data.property = obj.property;
		obj.data.valence = props_list[i].valence;
		obj.data.sides = stim_sides;
		obj.data.rank = props_list[i].rank;
		obj.data.phrasing = "directional";
		tv_array.push(obj);		
	}
	return tv_array;
};


function create_filler_array(props_list,adverb_list,nons_list) {
	let tv_array = [];
	for (let i = 0; i < 4; i++) {
		obj = {};
		obj.property = props_list[i];
		obj.adverb = adverb_list[i];
		obj.sents = pres_sides(nons_list[15-i],nons_list[i]);
		obj.interp = '<span style="text-transform: capitalize">'+nons_list[15-i]+"</span> and "+nons_list[i]+" are both "+obj.adverb+" "+obj.property;
		obj.display = disp_func(obj.sents[0],obj.sents[1],obj.interp);
		obj.data = {};
		obj.data.property = obj.property;
		obj.data.sides = stim_sides;
		obj.data.type = "filler";
		obj.data.phrasing = "nondirectional";
		tv_array.push(obj);		
	};
	for (let i = 4; i < 8; i++) {
		obj = {};
		obj.property = props_list[i];
		obj.adverb = adverb_list[i-4];
		obj.sents = pres_sides(nons_list[15-i],nons_list[i]);
		obj.interp = '<span style="text-transform: capitalize">'+nons_list[i]+"</span> are "+obj.adverb+" "+obj.property+", and so are "+nons_list[15-i];
		obj.display = disp_func(obj.sents[0],obj.sents[1],obj.interp);
		obj.data = {};
		obj.data.property = obj.property;
		obj.data.sides = stim_sides;
		obj.data.type = "filler";
		obj.data.phrasing = "directional";
		tv_array.push(obj);		
	}
	return tv_array;
};
