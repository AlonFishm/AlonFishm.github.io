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
	You must be at least 18 years old to participate. Your participation in this research is voluntary and you may decline further participation at any time. Your anonymity is assured; the researchers who have requested your participation will not receive any personally identifiable information about you.</p><br>`,
	
    choices: ['Begin'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
	
};

//timeline.push(irb);

var trial_likert = {
  type: jsPsychSurveyLikert,
  preamble: `<div style="width:800px"><p>_______________________________________, in that they're books with definitions.</p>
				<div style="width:350px; float: left; color: purple">
					<p>Dictionaries and encyclopedias are alike</p>
				</div>
				<div style="width:350px; float: right; color: green">
					<p>Dictionaries are like encyclopedias</p>
				</div></div>`,
  questions: [
    {
      prompt: `<div style="visibility:hidden"><p>Which sounds better</p></div>`,
	  required: true,
      labels: [
        "Purple is much better", 
        "Purple is better", 
        "No preference", 
        "Green is better", 
        "Green is much better"
      ]
    }
  ]
};

timeline.push(trial_likert);

/* display stimulus alone for a few seconds */
var displayStimulus = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="width:520px;"><p>Both dictionaries and encyclopedias are books with definitions listed alphabetically.</p>
				<div style="width:240px; float: left; color: purple; visibility:hidden">
					<p>Dictionaries and encyclopedias are alike.</p>
				</div>
				<div style="width:240px; float: right; color: green; visibility:hidden">
					<p>Dictionaries are like encyclopedias.</p>
				</div>
				<div style="visibility:hidden">
					<button class="jspsych-btn">['Purple is better','No preference', 'Green is better']</button>
				</div>
			</div>`,
  choices: [],
  trial_duration: 1500,

};

timeline.push(displayStimulus);

/* display stimulus with choices and wait for keyboard response */
var displayStimulusAndChoices = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="width:520px;"><p>Both dictionaries and encyclopedias are books with definitions listed alphabetically.</p>
				<div style="width:240px; float: left; color: purple">
					<p>Dictionaries and encyclopedias are alike.</p>
				</div>
				<div style="width:240px; float: right; color: green">
					<p>Dictionaries are like encyclopedias.</p>
				</div>
			</div>`,
  choices: ['Purple is better','No preference', 'Green is better'],
  trial_duration: null,

};

timeline.push(displayStimulusAndChoices);

var cloze_trial = {
	type: jsPsychCloze,
	text: `<div style="width:650px"> <p>Dictionaries %%: they're books.</p>
				<div style="width:300px; float: left; cursor:copy">
					<div class="tooltip">
					<p onclick="copy(this)">and encyclopedias are alike</p><span class="tooltiptext">Copy to clipboard</span>
					</div>
				</div>
				<div style="width:300px; float: right; cursor:copy">
					<div class="tooltip">
					<p onclick="copy(this)">are like encyclopedias</p><span class="tooltiptext">Copy to clipboard</span>
					</div>
				</div>
			</div>`,
//	allow_blanks: false,
	button_text: "Continue",
	mistake_fn: function() { alert('Please use one of the offered options.'); }
};
	
timeline.push(cloze_trial);

var multichoice_trial = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: `<p style="font-weight:bold">Dictionaries and encyclopedias are alike.</p>
				<p>What does the writer mean?</p>`,
      options: ["They're books.", "They're books with definitions listed alphabetically.", "They're reptiles."], 
      required: false
    }
  ],
};

timeline.push(multichoice_trial);

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

timeline.push(multiselect_trial);

/*
const instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<div style="width:600px;">
		<p>Both dictionaries and encyclopedias are books.</p><br><br><br><br><br><br>
        </div>`,
	
	choices: ['Continue'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

//timeline.push(instructions);

var trial_1 = {
    type: jsPsychHtmlSliderResponse,
	
    stimulus: `<div style="width:600px;">
        <div style="width:240px; float: left; color: purple">
            <p>Dictionaries and encyclopedias are alike.</p>
        </div>
        <div style="width:240px; float: right; color: green">
            <p>Dictionaries are like encyclopedias.</p>
        </div>
		<br><br><br>
        <p>They are books with alphabetically ordered definitions meant to provide information.</p>
        <p>Which is better?</p>
        </div>`,
    require_movement: true,
    labels: ['Purple is better', 'No preference', 'Green is better']
};

//timeline.push(trial_1);

var trial_2 = {
    type: jsPsychHtmlSliderResponse,
	
    stimulus: `<div style="width:600px;">
		<p>Both dictionaries and encyclopedias are books.</p>
        <p>Which sounds better?</p>
	    <div style="width:240px; float: left; color: purple">
            <p>Dictionaries and encyclopedias are alike.</p>
        </div>
        <div style="width:240px; float: right; color: green">
            <p>Dictionaries are like encyclopedias.</p>
        </div>
        </div>`,
    require_movement: true,
    labels: ['Purple is better', 'No preference', 'Green is better']
};

timeline.push(trial_2);

var trial_3 = {
    type: jsPsychHtmlSliderResponse,
	
    stimulus: `<div style="width:600px;">
		<p>Both dictionaries and encyclopedias are books with alphabetically ordered definitions meant to provide information.</p>
        <p>Which sounds better?</p>
	    <div style="width:240px; float: left; color: purple">
            <p>Dictionaries and encyclopedias are alike.</p>
        </div>
        <div style="width:240px; float: right; color: green">
            <p>Dictionaries are like encyclopedias.</p>
        </div>
        </div>`,
    require_movement: true,
    labels: ['Purple is better', 'No preference', 'Green is better']
};

timeline.push(trial_3);

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

*/
jsPsych.run(timeline)