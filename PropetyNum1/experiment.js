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

timeline.push(irb);

const instructionsA = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see a list of one or more properties, like this:</p>
		<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Smart</li><li>Tall</li><li>Long hair</li></ul></div><br>
		<div style="visibility:hidden">
		You will then see a pair of sentences, like this:
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>`+leftEx1+`</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>`+rightEx1+`</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<div>Suppose that what Lucy and Sarah have in common is the list of properties above: being smart, tall, and having long hair.<br>
		Which sentence would you rather say: A or B?</div><br>
		</div>`,
	
	choices: ['Continue'],
	
/*	on_finish: function(data) {
		jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
		}*/
};

timeline.push(instructionsA);

const instructionsB = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>At each stage of the study, you will see a list of one or more properties, like this:</p>
		<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Smart</li><li>Tall</li><li>Long hair</li></ul></div><br>
		You will then see a pair of sentences, like this:
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>`+leftEx1+`</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>`+rightEx1+`</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<div style="visibility:hidden">
		<div>Suppose that what Lucy and Sarah have in common is the list of properties above: being smart, tall, and having long hair.<br>
		Which sentence would you rather say: A or B?</div><br>
		</div>`,
	
	choices: ['Continue'],
	
/*	on_finish: function(data) {
		jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
		}*/
};

timeline.push(instructionsB);

const instructionsC = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p><p>At each stage of the study, you will see a list of one or more properties, like this:</p>
		<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Smart</li><li>Tall</li><li>Long hair</li></ul></div><br>
		You will then see a pair of sentences, like this:
		<div style="width:800px; float: center">
		<div style="width:250px; float: left; margin-left:200px"><p><b>`+leftEx1+`</b><br>(A)</p></div>
		<div style="width:250px; float: right"><p><b>`+rightEx1+`</b><br>(B)</p></div>
		</div>
		<div style="visibility:hidden">All the buffer we could ever need</div>
		<div>Suppose that what Lucy and Sarah have in common is the list of properties above: being smart, tall, and having long hair.<br>
		Which sentence would you rather say: A or B?</div><br>
		</div>`,
	
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
/*	on_finish: function(data) {
		jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
		}*/
};

timeline.push(instructionsC);

const instructionsD = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>This is what a full question looks like:</p><br>
		<div style="visibility:hidden">
			<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Peninsula</li></div><br>
				<div style="width:600px">
					<div style="width:250px; float: left; margin-left:50px"><p><b>`+leftEx2+`</b><br>(A)</p></div>
					<div style="width:250px; float: right"><p><b>`+rightEx2+`</b><br>(B)</p></div>
					<div style="visibility:hidden">buffer</div>
				</div>
			</div>`,
	
	choices: ['Continue'],
	
/*	on_finish: function(data) {
		jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
		}*/
};

timeline.push(instructionsD);

var instructionsE = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p>This is what a full question looks like:</p><br>
		<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Peninsula</li></div><br>
			<div style="visibility:hidden">
				<div style="width:600px">
					<div style="width:250px; float: left; margin-left:50px"><p><b>`+leftEx2+`</b><br>(A)</p></div>
					<div style="width:250px; float: right"><p><b>`+rightEx2+`</b><br>(B)</p></div>
					<div style="visibility:hidden">buffer</div>
				</div>
				<div style="visibility:hidden">
				<button class="jspsych-btn">['A is much better','A is better','No preference','B is better','B is much better']</button>
				</div>
			</div>`,
  choices: [],
  trial_duration: 2000,
};

timeline.push(instructionsE);

var instructionsF = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<p>This is what a full question looks like:</p><br>
		<div><ul style="text-align:left; width:300px; margin:auto; padding-left:180px; font-size:90%">
		<li>Peninsula</li></div><br>
				<div style="width:600px">
					<div style="width:250px; float: left; margin-left:50px"><p><b>`+leftEx2+`</b><br>(A)</p></div>
					<div style="width:250px; float: right"><p><b>`+rightEx2+`</b><br>(B)</p></div>
					<div style="visibility:hidden">buffer</div>
				</div>`,
	choices: ['A is much better','A is better','No preference','B is better','B is much better'],
};

timeline.push(instructionsF);


const b_instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: "<p>If you understand the instructions, you may now begin the study.</p><br>",
	
	choices: ['Continue'],
};

timeline.push(b_instructions);

//let test_array = create_balanced_array(shuffle_array(trial_object1));
let temp_array = create_balanced_array2(shuffle_array(trial_objects));
let tv_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.number === b.data.number & a.data.type === b.data.type}); //shuffle so that 2 consecutive stimuli don't share both type AND number

// display stimulus alone for a few seconds with no button, then add choices and wait for response
const trials = {
	timeline: [
		{
			type:  jsPsychHtmlButtonResponse,
			
			stimulus: jsPsych.timelineVariable('display'),
			
			choices: [],
			
			trial_duration: 1500,
		},
		{
			type:  jsPsychHtmlButtonResponse,
			
			stimulus: jsPsych.timelineVariable('fullDisplay'),
			
			choices: ['A is much better','A is better','No preference','B is better','B is much better'],
			
			data: jsPsych.timelineVariable('data'),

			on_finish: function(data) {
				jsPsych.setProgressBar((data.trial_index-6)/2 / (tv_array.length)); //only trials count for progress, not instructions, debriefing, etc.
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

//Task for experiment 2b: binary choice between property lists
var trial2 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: `<p style="font-weight:bold; text-align:center">Dictionaries and encyclopedias are alike.</p>
				<p style="text-align:center">In what way?</p>`,
      options: [`&bull; Books<br>
				&emsp; &nbsp; &bull; Contain information<br>
				&emsp; &nbsp; &bull; Ordered alphabetically<br>
				&emsp; &nbsp; &bull; Long`,
					`&bull; Books &emsp;`], 
//      options: [`<p style="white-space:pre">Books<br>&#9; Contain information<br>&#9; Definitions listed alphabetically<br>&#9; Long`, `Books</p>`], 
      required: false,
	  horizontal: true
    }
  ],
};

//timeline.push(trial2);


jsPsych.run(timeline)


/*
var trial1disp = {
  type: jsPsychHtmlButtonResponse,
  stimulus: test_array[1].display,
  choices: [],
  trial_duration: 2000,
};

//timeline.push(trial1disp);

var trial1task = {
  type: jsPsychHtmlButtonResponse,
  stimulus: test_array[1].fullDisplay,
  choices: ['A is much better','A is better','No preference','B is better','B is much better'],
};

//timeline.push(trial1task);

var trial_likert = {
  type: jsPsychSurveyLikert,
  preamble: `<div>
				<ul style="text-align:left; width:300px; margin:auto; padding-left:140px">
					<li>Books</li>
					<li>Contain information</li>
					<li>Ordered alphabetically</li>
					<li>Long</li></ul>
			</div>
			<div>
				<div style="width:250px; float: left">
					<p>(A) Dictionaries and encyclopedias are alike.</p>
				</div>
				<div style="width:250px; float: right">
					<p>(B) Dictionaries are like encyclopedias.</p>
				</div>
			</div>`,
  questions: [
    {
      prompt: ``,
	  required: true,
      labels: [
        "A is much better", 
        "A is better", 
        "No preference", 
        "B is better", 
        "B is much better"
      ]
    }
  ]
};

//timeline.push(trial_likert);

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
	
//timeline.push(cloze_trial);


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

var slider_1 = {
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

//timeline.push(slider_1);

var slider_2 = {
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

timeline.push(slider_2);

var slider_3 = {
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

timeline.push(slider_3);
*/