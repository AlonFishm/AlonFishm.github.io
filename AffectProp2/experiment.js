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
	
	stimulus: `<p>Dear participant, thank you for contributing to our research! <br>In this study, we are interested in how people choose what to say. <br>
			The whole thing should take less than 5 minutes. <br><br><p style="font-size:80%;">Legal information: 
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
	
	stimulus: `<p>At each stage of the study, you will be asked to imagine having a certain <span style="color:blue"><b>emotional attitude</b></span> 
		about some <i>made up things</i>.<br>For example:</p>
		<p style="color:blue">Say you feel that <b><i>zums</i> share some surprising properties of <i>gaxes</i></b></p>
		<p>Which of the two following sentences (A or B) would you choose to say to express this attitude?</p>
		<div style="width:900px; float: center">
		<div style="width:350px; float: left; margin-left:150px"><p><b>`+pres_sides("<i>zums</i>","<i>gaxes</i>")[0]+`</b><br>(A)</p></div>
		<div style="width:350px; float: right"><p><b>`+pres_sides("<i>zums</i>","<i>gaxes</i>")[1]+`</b><br>(B)</p></div>
		<div style="visibility:hidden">All the buffer we could ever need</div></div>`,

/*	stimulus: `<p>At each stage of the study, you will see an <span style="color:blue"><b>idea</b></span> that someone might want to express, 
		concerning a pair of <i>made up words</i>. <br>For example:</p>
		<p style="color:blue">A <i>zum</i> and a <i>gax</i> are both <b>strong and fast</b></p>
		<p>Underneath, you will see two different sentences that someone might say to express this idea. <br>For example:</p>
		<div style="width:900px; float: center">
		<div style="width:350px; float: left; margin-left:150px"><p><b>A <i>zum</i> and a <i>gax</i> are similar</b><br>(A)</p></div>
		<div style="width:350px; float: right"><p><b>A <i>zum</i> and a <i>gax</i> are the same</b><br>(B)</p></div>
		<div style="visibility:hidden">All the buffer we could ever need</div></div>
		<p>We are interested in which of the two sentences (A or B) you would choose to say to express the idea.<br>
		Try to answer even if the idea isn't entirely clear to you.</p>`,
*/		
	choices: ['Definitely A','Probably A','No preference','Probably B','Definitely B'],
	
	//on_finish: function(data) {
	//	jsPsych.setProgressBar((data.trial_index - 1) / (timeline.length + tv_array.length));
	//	}
};

timeline.push(instructions);

let nons_array = shuffle_array(nons_words);
let props_array = shuffle_array(affect_props);
let temp_array = create_balanced_array(props_array,nons_array);
let tv_array = jsPsych.randomization.shuffleNoRepeats(temp_array,function(a,b) 
																{return a.data.rank === 9-b.data.rank}); //shuffle so that 2 consecutive stimuli aren't "opposites" in valence score
//																{return a.data.rank === b.data.rank+1 || a.data.rank === b.data.rank-1}); //shuffle so that 2 consecutive stimuli aren't adjacent in valence score

/*
let filler_array = create_filler_array(shuffle_array(filler_props),shuffle_array(filler_adverbs),nons_array);
let tv_array = [];

for (let i = 0; i < 8; i ++) {
	tv_array.push(critical_array[i]);
	tv_array.push(filler_array[i]);
};
*/

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
				prompt: 'Please share any other comments or thoughts you have about the study (For example, did you enjoy it? Did you find it difficult?)',
				name: 'comments',
				textbox_columns: 30,
				textbox_rows: 3
			},
			{
				type: 'html',
				prompt: "The goal of this study was to explore how the attitude that someone wants to express might influence the way they phrase a similarity statement. <br>If you have any questions, please contact Alon Fishman at alonfishm@gmail."
			}
		]
	]
};

timeline.push(questionnaire);

jsPsych.run(timeline)
