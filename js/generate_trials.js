// generate trials
		
function get_training_types(
	category_kinds, 
	training_labels,
	alternate_training_labels,
	correct_category_labels) {

	//shuffle elements
	var training_labels_shuffled = jsPsych.randomization.shuffle(training_labels);
	var alternate_training_labels_shuffled = jsPsych.randomization.shuffle(alternate_training_labels);

	var training_types = {
		narrow: {
			category_kind: category_kinds["narrow"],
			category_training_level: "narrow",
			category_label_level: correct_category_labels["narrow"],
			training_label: training_labels_shuffled[0],
			alternate_training_label: alternate_training_labels_shuffled[0],
			training_image_path_info: ["sub1.jpg","sub2.jpg","sub3.jpg"]
		},
		intermediate: {
			category_kind: category_kinds["intermediate"],
			category_training_level: "intermediate",
			category_label_level: correct_category_labels["intermediate"],
			training_label: training_labels_shuffled[1],
			alternate_training_label: alternate_training_labels_shuffled[1],
			training_image_path_info: ["sub1.jpg","bas1.jpg","bas2.jpg"]
		},
		broad: {
			category_kind: category_kinds["broad"],
			category_training_level: "broad",
			category_label_level: correct_category_labels["broad"],
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

function create_category_kinds(category_kinds,narrow_category_kind,intermediate_category_kind,broad_category_kind) {

	var category_kinds_shuffled = jsPsych.randomization.shuffle(category_kinds);

      if (narrow_category_kind == "ani") {
          var category_kinds_narrow = "animals";
        } else if (narrow_category_kind == "veh") {
          var category_kinds_narrow = "vehicles";
        } else if (narrow_category_kind == "veg") {
          var category_kinds_narrow = "vegetables";
        } else {
          var category_kinds_narrow = category_kinds_shuffled[0]
        }

        if (intermediate_category_kind == "ani") {
          var category_kinds_intermediate = "animals";
        } else if (intermediate_category_kind == "veh") {
          var category_kinds_intermediate = "vehicles";
        } else if (intermediate_category_kind == "veg") {
          var category_kinds_intermediate = "vegetables";
        } else {
          var category_kinds_intermediate = category_kinds_shuffled[1]
        }

        if (broad_category_kind == "ani") {
          var category_kinds_broad = "animals";
        } else if (broad_category_kind == "veh") {
          var category_kinds_broad = "vehicles";
        } else if (broad_category_kind == "veg") {
          var category_kinds_broad = "vegetables";
        } else {
          var category_kinds_broad = category_kinds_shuffled[2]
        }



        var category_kind_assigned_dict = {
          narrow: category_kinds_narrow,
          intermediate: category_kinds_intermediate,
          broad: category_kinds_broad
        }

        return(category_kind_assigned_dict)
}

function create_correct_category_labels(narrow_category_level,intermediate_category_level,broad_category_level) {
	var narrow_correct_category_labels = ["narrow","intermediate","broad"];
	var intermediate_category_labels = ["intermediate","broad","hypernym"];
	var broad_category_labels = ["broad","hypernym","hypernym"];

        if (narrow_category_level == "n") {
          var narrow_correct_category_label_level = "narrow"
        } else if (narrow_category_level== "i") {
          var narrow_correct_category_label_level = "intermediate"
        } else if (narrow_category_level == "b") {
          var narrow_correct_category_label_level = "broad"
        } else {
          var narrow_correct_category_label_level = jsPsych.randomization.sampleWithoutReplacement(narrow_correct_category_labels,1)[0];
        }

        if (intermediate_category_level == "i") {
          var intermediate_correct_category_label_level = "intermediate"
        } else if (intermediate_category_level == "b") {
          var intermediate_correct_category_label_level = "broad"
        } else if (intermediate_category_level == "h") {
          var intermediate_correct_category_label_level = "hypernym"
        } else {
          var intermediate_correct_category_label_level = jsPsych.randomization.sampleWithoutReplacement(intermediate_category_labels,1)[0];
        }

        if (broad_category_level == "b") {
          var broad_correct_category_label_level = "broad"
        } else if (broad_category_level == "h") {
          var broad_correct_category_label_level = "hypernym"
        } else {
          var broad_correct_category_label_level = jsPsych.randomization.sampleWithoutReplacement(broad_category_labels,1)[0];
        }

    var correct_category_labels = {
    	narrow: narrow_correct_category_label_level,
    	intermediate: intermediate_correct_category_label_level,
    	broad: broad_correct_category_label_level
    }

    return (correct_category_labels)


}

