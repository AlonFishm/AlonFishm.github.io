const jsPsych = initJsPsych({
	on_finish: function (data) {
//		jsPsych.data.displayData('csv');
		proliferate.submit({"trials": data.values()});
	},
	show_progress_bar: true, // doesn't automatically work with nested timelines and timeline variables
	auto_update_progress_bar: false
});

let timeline = [];

var preload = {
    type: jsPsychPreload,
    auto_preload: true
}

timeline.push(preload);

var irb = {
  type: jsPsychSurveyMultiSelect,
  preamble: `<p>Liebe*r Teilnehmer*in, vielen Dank für Ihren Beitrag zu unserer Forschung.<br>Dieses Experiment sollte nicht länger 
			als 10 Minuten dauern.</p><p>Weitere Informationen zu dieser Forschung und Ihren Rechten als Teilnehmer*in finden Sie 
			<a href="Information_für_Teilnehmende.pdf" target="_blank" rel="noopener noreferrer">hier</a>.</p>`,
  questions: [
    {
      prompt: "", 
      options: ["Ich willige in die Studienteilnahme und die damit verbundene Verarbeitung meiner personenbezogenen Daten ein."], 
	  horizontal: true,
      required: true,
    }
  ],
  required_message: "Um teilzunehmen, müssen Sie das Häkchen zur Bestätigung Ihrer Einwilligung setzen."
};

timeline.push(irb);

var instructions = {
	type: jsPsychHtmlButtonResponse,
	
	stimulus: `<p>Im Folgenden werden Ihnen Bilder von Objekten präsentiert (manche werden Ihnen bekannt vorkommen, 
	andere weniger).<br>Ihre Aufgabe ist es, jedes Objekt mit einem Wort zu benennen, das dieses Objekt möglichst genau beschreibt. 
	<br>Schreiben Sie Ihre Antwort in das Textfeld unter dem Objekt.</p><br>`,
	
    choices: ['Weiter']
	
};

timeline.push(instructions);

//creating an array with four levels of familiarity
/*
let arrayB = create_basic_imgs()[0];
arrayB = arrayB.slice(0,1).concat(shuffle_array(arrayB.slice(1))); // keep the first shape constant (= circle)
let arrayB1 = shuffle_array(create_basic_imgs()[1]);
let arrayC = shuffle_array(create_complex_imgs()[0]);
let arrayC1 = shuffle_array(create_complex_imgs()[1]);
let tv_array = combine_arrays([arrayB,arrayC,arrayB1,arrayC1]);
*/

//creating an array with two levels of familiarty
let arrayB = create_basic_imgs();
arrayB = arrayB.slice(0,1).concat(shuffle_array(arrayB.slice(1))); // keep the first shape constant (=horizontal rectangle)
let arrayC = shuffle_array(create_complex_imgs());
let tv_array = combine_arrays(arrayB,arrayC);

// using jsPsych's nested timelines & loop_function to do 2 things: display a trial, then (conditionally) display a repeat_message & loop back
var trials = {
	timeline: [
	{
		timeline: [
		
		{
			type: jsPsychSurveyText,
			preamble: jsPsych.timelineVariable('img'),
			questions: [
				{prompt: 'Benennen Sie das Objekt', required: true, rows: 1, columns: 20}
			],
			button_label: "Weiter",
			data: jsPsych.timelineVariable('data')
		},
		
		repeat_conditional
		
		],
		
		loop_function: function() {
			return repeat_loop;
			},
			
		on_start: function() { //we use on_start instead of on_finish to allow nameCounter to update
				jsPsych.setProgressBar((nameCounter) / (tv_array.length));
			}
	}
	],
	timeline_variables: tv_array
};

timeline.push(trials);

const debriefing = {
	type: jsPsychSurvey,
	
	on_start: function() {
				jsPsych.setProgressBar((nameCounter) / (tv_array.length));
			},
	
	pages: [
		[
			{
				type: 'html',
				prompt: 'Das ist das Ende des Experiments. Um uns bei der Analyse der Ergebnisse zu helfen, beantworten Sie bitte die folgenden Fragen.'
			},
			{
				type: 'drop-down',
				prompt: 'Geschlecht',
				name: 'gender',
				options: ['Weiblich','Männlich','Divers']
			},
			{
				type: 'text',
				prompt: 'Alter',
				name: 'age',
				textbox_columns: 10
			},
			{
				type: 'text',
				prompt: 'Muttersprache(n)',
				name: 'language',
				textbox_columns: 20
			},
			{
				type: 'multi-choice',
				prompt: 'Haben Sie die Anweisungen gelesen und glauben Sie, dass Sie die Studie richtig durchgeführt haben?',
				name: 'read',
				options: ['Nein','Ja','Ich war verwirrt']
			},
			{
				type: 'text',
				prompt: 'Haben Sie noch weitere Anmerkungen?',
				name: 'comments',
				textbox_columns: 30,
				textbox_rows: 3
			},
			{
				type: 'html',
				prompt: "Bei Fragen wenden Sie sich bitte an Alon Fishman unter alon.fishman@uni-bielefeld.de."
			}
		]
	]
};

timeline.push(debriefing);

jsPsych.run(timeline)
