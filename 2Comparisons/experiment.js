const jsPsych = initJsPsych({
	on_finish: function () {
		jsPsych.data.displayData('csv');
	},
	show_progress_bar: true, // doesn't automatically work with nested timelines and timeline variables
	auto_update_progress_bar: false
});

let timeline = [];

const irb = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>Thank you for participating in our study. In this study, you will read sentences and write down what you think they mean. The whole study should take no longer than 10 minutes. <br><br><p style="font-size:80%;">Legal information: By answering the following questions, you are participating in a cognitive science research study. If you have questions about this research, please contact Alon Fishman at alonfishm@gmail.com. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p><br>`,
	
    choices: ['Begin'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
	
};

timeline.push(irb);

const instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `In this study you will see a series of statements written by different people. Your task is to write down what you think the writer of each statement might have meant. For example: <br><br>
	<b>Apples are better than oranges</b><br><br>
	In what way?<br><br>The writer of the above statement thinks that apples are better than oranges in some way. In what way do you think that is? You can write down one or more things the writer might have meant. If a statement is very strange or difficult to understand, you can write down "I don't know".<br><br>`,
	
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

let tv_array = shuffle_array(create_tv_array(trial_objects));

//let tv_array = shuffle_array(trial_objects);

const trials = {
	timeline: [{
		type:  jsPsychSurveyHtmlForm,
	
		preamble: jsPsych.timelineVariable('stimulus'),
	
		html: `<p>In what way?<br><br>1: <input name="first" type="text" required placeholder="Required" size="20" /><br>
		2: <input name="second" type="text" size="20" /><br>3: <input name="third" type="text" size="20" />
		<br>4: <input name="fourth" type="text" size="20" /></p>`,
	
		data: jsPsych.timelineVariable('data'),

		on_finish: function(data) {
			jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
			}
	}],
	
	timeline_variables: tv_array,
};

timeline.push(trials);

const q_instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: "<p>That's the end of the study! Thank you for your responses. To help us analyze our results, it would be helpful to know know a little more about you.</p><br>",
	
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
			}
		]
	]
};

timeline.push(questionnaire);

jsPsych.run(timeline)