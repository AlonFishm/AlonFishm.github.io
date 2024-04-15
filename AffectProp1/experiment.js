const jsPsych = initJsPsych({
	on_finish: function (data) {
//		jsPsych.data.displayData('csv');
		proliferate.submit({"trials": data.values()});
	},
	show_progress_bar: true, // doesn't automatically work with nested timelines and timeline variables
	auto_update_progress_bar: false
});

let timeline = [];

const irb = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>Dear participant, thank you for contributing to our research! <br>In this study, we are interested in how people choose what to say. <br>The whole thing should take less than 10 minutes. <br><br><p style="font-size:80%;">Legal information: 
			By answering the following questions, you are participating in a research study by cognitive scientists at the Hub for Digital Humanities and 
			Social Sciences at The Open University of Israel. If you have questions about this research, please contact Alon Fishman at alonfishm@gmail.com. 
			You must be at least 18 years old to participate. Your participation in this research is voluntary and you may decline further participation at 
			any time. Your anonymity is assured; the researchers who have requested your participation will not receive any personally identifiable 
			information about you.</p><br>`,
	
    choices: ['Begin'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(irb);
/*
const instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see a a pair of sentences. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>A dream is a story</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>A story is a dream</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<p>In some cases, the sentences may include made up words. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>A zum and a gax are similar</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>A zum and a gax are the same</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<p>Following each pair, you will see a potential interpretation of the two sentences. For example:</p>
			<p>Interpretation: <span style="color:blue">Both are sequences of events which haven't actually happened</span></p>
		<p>We are interested in which sentence you think would be a better and more natural fit for the given interpretation.<br>
		Try to answer even if you disagree with the interpretation, or have a hard time understanding it.</p><br>`,
		
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructions);

const instructionsB = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see a pair of sentences. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>A dream is a story</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>A story is a dream</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<p>Following each pair, you will see a potential interpretation of the two sentences. For example:</p>
		<p>Interpretation: <span style="color:blue">Both are sequences of events which haven't actually happened</span></p><br>
		<p>In some cases, the sentences may include made up words. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>A ZUM and a GAX are similar</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>A ZUM and a GAX are the same</b><br>(B)</p></div>
		<div style="visibility:hidden">All the buffer we could ever need</div></div>
		<p>Interpretation: <span style="color:blue">They share a number of beneficial qualities</span></p>
		<p>We are interested in which sentence you think would be a better and more natural fit for the given interpretation.<br>
		Try to answer even if you disagree with the interpretation, or have a hard time understanding it.</p>`,
		
	choices: ['Continue'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructionsB);
*/

const instructionsC = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see an <span style="color:blue"><b>idea</b></span> that someone might want to express.
		For example:</p>
		<p style="color:blue"><b>Dreams and stories are both sequences of events which haven't actually happened</b></p>
		<p>Underneath, you will see two different sentences that someone might say to express this idea. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:300px; float: left; margin-left:150px"><p><b>A dream is a story</b><br>(A)</p></div>
		<div style="width:300px; float: right"><p><b>A story is a dream</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<p>In some cases, the idea and the two sentences might be about made up words (in ALL CAPS). For example:</p>
		<p style="color:blue"><b>ZUMs and GAXes share a number of beneficial qualities</b></p>
		<div style="width:800px; float: center">
		<div style="width:300px; float: left; margin-left:150px"><p><b>A ZUM and a GAX are similar</b><br>(A)</p></div>
		<div style="width:300px; float: right"><p><b>A ZUM and a GAX are the same</b><br>(B)</p></div>
		<div style="visibility:hidden">All the buffer we could ever need</div></div>
		<p>We are interested in which of the two sentences (A or B) you would choose to say to express the idea.<br>
		Try to answer even if you disagree with the idea, or have a hard time understanding it.</p>`,
		
	choices: ['Continue'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructionsC);


let nons_array = shuffle_array(create_nons_objects(shuffle_array(nons_words)));
let temp_array = create_balanced_array(shuffle_array(affect_objects));
let affect_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.property === b.data.property & a.data.type === b.data.type}); //shuffle so that 2 consecutive stimuli don't share both type AND affect
let filler_array = shuffle_array(create_filler_objects(filler_objects));
let tv_array = [];

for (let i = 0; i < 16; i ++) {
	tv_array.push(affect_array[i]);
	if (i % 4 == 0) {
		tv_array.push(filler_array[(i)/4]);
	};
	if (i % 4 == 2) {
		tv_array.push(nons_array[(i-2)/4]);
	};
};

const trials = {
	timeline: [
		{
			type:  jsPsychHtmlButtonResponse,
			
			stimulus: jsPsych.timelineVariable('display'),
			
			choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
			
			data: jsPsych.timelineVariable('data'),

			on_finish: function(data) {
				jsPsych.setProgressBar((data.trial_index-1) / (tv_array.length)); //only trials count for progress, not instructions, debriefing, etc.
			}
		}
	],
	timeline_variables: tv_array,
};

timeline.push(trials);

/*
const nons_trial = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: nons_array.display,
	
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
	data: nons_stim.data,
	
};

timeline.push(nons_trial);

*/

const q_instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: "<p>That's the end of the study! Thank you for your responses. <br>To help us analyze our results, it would be helpful to know a little more about you.</p><br>",
	
	choices: ['Continue'],
};

timeline.push(q_instructions);

const questionnaire = {
	type: jsPsychSurvey,

	pages: [
		[
			{
				type: 'html',
				prompt: 'Please answer the following questions.'
			},
			{
				type: 'drop-down',
				prompt: 'Gender',
				name: 'gender',
				options: ['Female','Male','Other']
			},
			{
				type: 'text',
				prompt: 'Age',
				name: 'age',
				textbox_columns: 10
			},
			{
				type: 'text',
				prompt: 'Native language(s)',
				name: 'language',
				textbox_columns: 20
			},
			{
				type: 'multi-choice',
				prompt: 'Did you read the instructions and do you think you did the study correctly?',
				name: 'read',
				options: ['No','Yes','I was confused']
			},
			{
				type: 'text',
				prompt: 'Do you have any other comments?',
				name: 'comments',
				textbox_columns: 30,
				textbox_rows: 3
			},
			{
				type: 'html',
				prompt: "The goal of this study was to explore how the idea that someone wants to express might influence the way they phrase a similarity statement. <br>If you have any questions, please contact Alon Fishman at alonfishm@gmail."
			}
		]
	]
};

timeline.push(questionnaire);

jsPsych.run(timeline)
