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
	
	stimulus: `<p>Dear participant, thank you for contributing to our research! <br>This is a study about the meanings of sentences. We will ask you to read sentences and write down what you think they mean. <br>The whole thing should take about 10 minutes. 
	<br><br><p style="font-size:80%;">Legal information: By answering the following questions, you are participating in a research study by cognitive scientists at the Hub for Digital Humanities and Social Sciences at The Open University of Israel. If you have questions about this research, please contact Alon Fishman at alonfishm@gmail.com. 
	You must be at least 18 years old to participate. Your participation in this research is voluntary and you may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p><br>`,
	
    choices: ['Begin'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
	
};

timeline.push(irb);

const instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `In this study you will see a series of sentences spoken by different people. <br>We are interested in what you think the speaker of each sentence might have meant. <br>For example: <br><br>
	<b>Apples are better than oranges</b><br><br>In what way?<br><br>
	Try to think of at least two things to write about each sentence. In this case, you might write down "Better taste", "More crunchy", and "Healthier". <br>If the sentence is very strange or difficult to understand, you can write down "I don't know".<br><br>`,
	
	choices: ['Continue'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructions);

const trial_1 = {
	
	type: jsPsychSurveyHtmlForm,
	
	preamble: '<b>Salesmen are like bulldozers</b>',
	
	html: `<p>In what way?<br><br>1: <input name="first" type="text" required placeholder="Required" size="20" /><br>
	2: <input name="second" type="text" size="20" /><br>3: <input name="third" type="text" size="20" />
	<br>4: <input name="fourth" type="text" size="20" /></p>`,
	
	on_finish: function(data) {
		jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length));
		}

};

//timeline.push(trial_1);

let temp_array = create_balanced_array(shuffle_array(trial_objects));
let tv_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.syntax === b.data.syntax & a.data.type === b.data.type}); //shuffle so that 2 consecutive stimuli don't share both syntax AND type

//let tv_array = shuffle_array(create_tv_array(trial_objects));

//let tv_array = shuffle_array(trial_objects);

	//Separate text boxes for responses
const trials = {
	timeline: [{
		type:  jsPsychSurveyHtmlForm,
	
		preamble: jsPsych.timelineVariable('stimulus'),

		html: `<p>In what way?<br><br><input name="first" type="text" required placeholder="Required" size="20" /><br>
		<input name="second" type="text" required placeholder="Required" size="20" /><br><input name="third" type="text" size="20" /></p>`,

//		html: `<p>In what way?<br><br>1: <input name="first" type="text" required placeholder="Required" size="20" /><br>
//		2: <input name="second" type="text" size="20" /><br>3: <input name="third" type="text" size="20" />
//		<br>4: <input name="fourth" type="text" size="20" /></p>`,
	
		data: jsPsych.timelineVariable('data'),

		on_finish: function(data) {
			jsPsych.setProgressBar((data.trial_index - 1) / (tv_array.length)); //only trials count for progress, not instructions, debriefing, etc.
			}
	}],
	timeline_variables: tv_array,
};

	//Single big text box for responses
//const trials = {
//	timeline: [{
//		type:  jsPsychSurveyText,
		
//		preamble: jsPsych.timelineVariable('stimulus'),
		
//		questions: [
//			{prompt: "In what way?", name: "properties", rows: 3, required: true}
//			],			
				
//		data: jsPsych.timelineVariable('data'),

//		on_finish: function(data) {
//			jsPsych.setProgressBar((data.trial_index - 1) / (tv_array.length)); //only trials count for progress, not instructions, debriefing, etc.
//			}
//		}],	
//	timeline_variables: tv_array,
//};

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
				prompt: 'The goal of this study was to explore how people interpret comparisons and similes phrased with the words "like" and "alike". <br>If you have any questions, please contact Alon Fishman at alonfishm@gmail.'
			}
		]
	]
};

timeline.push(questionnaire);

jsPsych.run(timeline)