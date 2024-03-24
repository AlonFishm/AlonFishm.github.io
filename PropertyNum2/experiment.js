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
	
	stimulus: `<p>Dear participant, thank you for contributing to our research! <br>In this study, we are interested in how people understand comparisons. <br>
			The whole thing should take about 10 minutes. <br><br><p style="font-size:80%;">Legal information: 
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

const instructions = {
	type: jsPsychHtmlButtonResponse,
	
		stimulus: `At each stage of the study, you will see a sentence comparing between two things, <br>followed by a list of properties.
		We are interested in what you think the sentence likely means;<br> that is, which of the listed properties did the speaker of the sentence have in mind?
		<p>For example: </p>
		<div style="text-align:left; width:350px; margin:auto">
		<b>Oranges are like apples</b><br><p>How so? (you may select more than one)</p>
		&#9634 &nbsp Grow on trees<br>
		&#9634 &nbsp Can be juggled<br>
		&#9634 &nbsp Fruits<br>
		&#9634 &nbsp Countries<br>
		&#9634 &nbsp Can go bad<br><br>
		</div>
		If you understand the instructions, you may now begin the study.<br><br>`,
		
		choices: ['Continue'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructions);

let temp_array = create_balanced_array(shuffle_array(trial_objects));
let tv_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.grammar === b.data.grammar & a.data.type === b.data.type}); //shuffle so that 2 consecutive stimuli don't share both type AND grammar


const trials = {
	timeline: [
		{
			type:  jsPsychSurveyMultiSelect,
			
			questions: [
				{
				prompt: jsPsych.timelineVariable('display'),
				options: jsPsych.timelineVariable('options'),
				required: true
				}
			],
			
			data: jsPsych.timelineVariable('data'),

			on_finish: function(data) {
				jsPsych.setProgressBar((data.trial_index - 1) / (tv_array.length)); //only trials count for progress, not instructions, debriefing, etc.
			}
		}
	],
	timeline_variables: tv_array,
};

timeline.push(trials);

var multiselect_trial = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: `<p style="font-weight:bold">Dictionaries and encyclopedias are alike.</p>
				<p>They are (you may select more than one):</p>`, 
      options: ["books", "informative", "ordered alphabetically", "large", "made of metal"], 
      required: true
    }
  ], 
  randomize_question_order: true
};

//timeline.push(multiselect_trial);


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
