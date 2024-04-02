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
	
	stimulus: `<p>Dear participant, thank you for contributing to our research! <br>In this study, we are interested in how people choose what to say. <br>The whole thing should take about 10 minutes. <br><br><p style="font-size:80%;">Legal information: 
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

//timeline.push(irb);

let nonce_stim = shuffle_array(nonce_instr)[0];

const nonce_trial = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: '<div style="width:900px; float: center">'+nonce_stim.text+`</div><p>Which sentence would you rather say: A or B?</p>
		<div style="width:700px; float: center">
		<div style="width:250px; float: left; margin-left:150px"><p><b>`+leftNonce+`</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>`+rightNonce+`</b><br>(B)</p></div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		</div>`,
	
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
	data: nonce_stim.data,
	
};

timeline.push(nonce_trial);

const instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see a a pair of sentences. For example:</p>
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>A dream is a story</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>A story is a dream</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<p>Following each pair, you will see a potential interpretation of the two sentences. For example:</p>
			<p style="color:blue">Both are sequences of events which haven't actually happened.</p>
		<p>We are interested in which sentence you think would be a better and more natural fit for the given interpretation.</p><br>`,
		
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructions);


//let test_array = create_balanced_array(shuffle_array(trial_object1));
let temp_array = create_balanced_array(shuffle_array(trial_objects));
let tv_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.property === b.data.property & a.data.type === b.data.type}); //shuffle so that 2 consecutive stimuli don't share both type AND affect
// display stimulus alone for a few seconds with no button, then add choices and wait for response
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
				prompt: "The goal of this study was to explore how the listed properties influence people's preferences for phrasing similarity statements. <br>If you have any questions, please contact Alon Fishman at alonfishm@gmail."
			}
		]
	]
};

timeline.push(questionnaire);

jsPsych.run(timeline)
