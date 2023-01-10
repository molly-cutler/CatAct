// generate trials
		
function get_training_types(
	category_levels,
	category_kinds, 
	training_labels,
	alternate_training_labels,
	narrow_correct_category_label,
	intermediate_correct_category_label,
	broad_correct_category_label) {

	//shuffle elements
	var category_kinds_shuffled = jsPsych.randomization.shuffle(category_kinds);
	var category_levels_shuffled = jsPsych.randomization.shuffle(category_levels);
	var training_labels_shuffled = jsPsych.randomization.shuffle(training_labels);
	var alternate_training_labels_shuffled = jsPsych.randomization.shuffle(alternate_training_labels);

	var training_types = {
		narrow: {
			category_kind: category_kinds_shuffled[0],
			category_training_level: "narrow",
			category_label_level: narrow_correct_category_label,
			training_label: training_labels_shuffled[0],
			alternate_training_label: alternate_training_labels_shuffled[0],
			training_image_path_info: ["sub1.jpg","sub2.jpg","sub3.jpg"]
		},
		intermediate: {
			category_kind: category_kinds_shuffled[1],
			category_training_level: "intermediate",
			category_label_level: intermediate_correct_category_label,
			training_label: training_labels_shuffled[1],
			alternate_training_label: alternate_training_labels_shuffled[1],
			training_image_path_info: ["sub1.jpg","bas1.jpg","bas2.jpg"]
		},
		broad: {
			category_kind: category_kinds_shuffled[2],
			category_training_level: "broad",
			category_label_level: broad_correct_category_label,
			training_label: training_labels_shuffled[2],
			alternate_training_label: alternate_training_labels_shuffled[2],
			training_image_path_info: ["sub1.jpg","sup1.jpg","sup2.jpg"]
		}
	};

	return(training_types)
}

function get_trial_order(category_levels) {
	var trial_order = jsPsych.randomization.shuffle(category_levels);
	return(trial_order)
}

