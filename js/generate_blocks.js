//generate instructions
function generate_learning_instructions(current_training_label, current_training_images) {
    var current_learning_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
    current_learning_stimulus+='<p><b><font size="4.5">These are 3 '+current_training_label+'s.</font></b><style="text-align:center;" /p>';
    current_learning_stimulus+='<div class="row">';
    current_learning_stimulus+='<div class="column"><figure><img src="'+current_training_images[0]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
    current_learning_stimulus+='<div class="column"><figure><img src="'+current_training_images[1]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
    current_learning_stimulus+='<div class="column"><figure><img src="'+current_training_images[2]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
    current_learning_stimulus+='<div class="column"><img src="'+current_training_images[0]+'" style="width:50%;opacity:0"></div></div>';
    current_learning_stimulus+='<b><font size="4.5">Press any key to continue.</font></b><style="text-align:center;" /p></div>';  
    return(current_learning_stimulus)

}

function generate_sampling_instructions(current_training_label, current_training_images) {

  var current_sampling_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>'
  current_sampling_stimulus +='<p><b><font size="4.5">These are 3 '+current_training_label+'s.</font></b><style="text-align:center;" /p>';
  current_sampling_stimulus +='<div class="row">';
  current_sampling_stimulus +='<div class="column"><figure><img src="'+current_training_images[0]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_sampling_stimulus +='<div class="column"><figure><img src="'+current_training_images[1]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_sampling_stimulus +='<div class="column"><figure><img src="'+current_training_images[2]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_sampling_stimulus +='<div class="column"><img src="'+current_training_images[0]+'" style="width:50%;opacity:0"></div></div>';
  current_sampling_stimulus +='<p><b><font size="4.5">Which of these nine objects would you like to learn the name of? Click on the object that you would like to know the name of.</font></b><style="text-align:center;" /p>';
  current_sampling_stimulus +='<div class="row"><div class="column"></div></div></div>';
  return(current_sampling_stimulus)
}

function generate_selection_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image) {

  var current_selection_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_selection_stimulus += '<p><b><font size="4.5">The image you selected is a '+current_sampling_label+'.</font></b><style="text-align:center;" /p>'
  current_selection_stimulus += '<div class="row">';
  current_selection_stimulus += '<div class="column"><figure><img src="'+current_training_images[0]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_selection_stimulus += '<div class="column"><figure><img src="'+current_training_images[1]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_selection_stimulus += '<div class="column"><figure><img src="'+current_training_images[2]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_selection_stimulus += '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:50%"><figcaption style="font-size:24px">'+current_sampling_label+'</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column">';
  current_selection_stimulus += '<div id="container"><p><b><font size="4.5">Next, you will see a set of 24 new objects and decide which of them are also '+current_training_label+'s.</font></b>';
  current_selection_stimulus += '<p><b><font size="4.5">Press any key to continue.</font></b><style="text-align:center;" /p><style="text-align:center;" /p></div>';
  
  return(current_selection_stimulus)
}

function generate_test_instructions(current_training_label, current_sampling_label,current_training_images,current_sampling_image) {
  var current_test_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p>';
  current_test_stimulus += '<div class="row">';
  current_test_stimulus += '<div class="column"><figure><img src="'+current_training_images[0]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><img src="'+current_training_images[1]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><img src="'+current_training_images[2]+'" style="width:50%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div>';
  current_test_stimulus += '<div class="column"><figure><img src="'+current_sampling_image+'" style="width:50%"><figcaption style="font-size:24px">'+current_sampling_label+'</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column">';
  current_test_stimulus += '<p><b><font size="4.5">Now, pick <u>all of the '+current_training_label+'s</u> from among these 24 objects.</font></b><style="text-align:center;" /p>';
  current_test_stimulus += '<p><b><font size="4.5">You can pick an object by clicking on it. Objects you select will turn red. You can also unselect items by clicking on them again. ';
  current_test_stimulus += 'When you are finished selecting <u>all</u> of the objects you think are '+current_training_label+'s, press the submit button at the bottom of the page.</font></b><style="text-align:center;" /p></div>';
  current_test_stimulus += '<div class="row"><div class="column"></div></div></div>';

  return(current_test_stimulus)
}



// generate a block for CatAct
function generate_block(trial, training_types) {

  var cur_block=[];
	current_trial_info = training_types[trial];
  console.log(current_trial_info);

  // PREPPTING THE SELECTION ARRAYS
		  
	//shuffle the grid images
  var shuffled_images = jsPsych.randomization.repeat(grid_image_names, 1);
	//put images together into an array
	var current_grid_array=[]
  for (var i = 0; i < shuffled_images.length; i++) {
    current_grid_array.push('<img src="'+shuffled_images[i]+'" width='+grid_image_width+' height='+grid_image_height+'>')
  }
  
  // shuffle sampling array
  var shuffled_sampling_images = jsPsych.randomization.repeat(sampling_image_names, 1);
	// put sampling images together into an array
	var current_sample_array=[];
  for (var i = 0; i < shuffled_sampling_images.length; i++) {
    current_sample_array.push('<img src="'+shuffled_sampling_images[i]+'" width='+grid_image_width+' height='+grid_image_height+' style="border:2px solid #808080">')
  };

  //current trial info
  var current_training_label = current_trial_info["training_label"];
	var current_alternate_training_label = current_trial_info["alternate_training_label"];
	var current_category_kind = current_trial_info["category_kind"];
	var current_category_training_level = current_trial_info["category_training_level"];
	var current_category_label_level = current_trial_info["category_label_level"];
	var current_training_image_path_info = current_trial_info["training_image_path_info"]

  if (current_category_kind=="vegetables") {
    var current_category_label = "c1";
  } else if (current_category_kind=="vehicles") {
    var current_category_label = "c2";
  } else {
    var current_category_label = "c3";
  }

  console.log(current_training_label);
  console.log(current_alternate_training_label);
  console.log(current_category_kind);
  console.log(current_category_label_level);
  console.log(current_category_label);

  //create training images
  var current_training_images = [];
  for (var i = 0; i < current_training_image_path_info.length; i++) {
    current_training_images.push('stims/'+current_category_kind+'/'+current_training_image_path_info[i][0]+current_category_label+current_training_image_path_info[i][1])
  };

  console.log(current_training_images);

  //hypernym category candidates
  var hypernym_cat_options = removeItemOnce(["c1","c2","c3"],current_category_label);
	console.log(hypernym_cat_options);

  //select hypernym category (if needed)
  var hypernym_category = jsPsych.randomization.sampleWithoutReplacement(hypernym_cat_options,1)[0];
  console.log(hypernym_category);

  //create words
  var sampling_image_words = [];
  for (var k = 0; k < shuffled_sampling_images.length; k++) {
    sampling_image = shuffled_sampling_images[k];
    console.log(sampling_image);
    console.log(sampling_image.includes(current_category_label));
    console.log(sampling_image.includes("sub"));
    if (current_category_label_level == "narrow") {
      if (sampling_image.includes(current_category_label) && sampling_image.includes("sub")) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "intermediate") {
      if (sampling_image.includes(current_category_label) && (sampling_image.includes("sub") || sampling_image.includes("bas"))) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "broad") {
      if (sampling_image.includes(current_category_label)) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    } else if (current_category_label_level == "hypernym") {
      if (sampling_image.includes(current_category_label) || sampling_image.includes(hypernym_category)) {
        sampling_image_words.push(current_training_label);
      } else {
        sampling_image_words.push(current_alternate_training_label);
      }
    }
  }

  console.log(sampling_image_words)

  var current_learning_stimulus = generate_learning_instructions(current_training_label, current_training_images); 
	var current_sampling_stimulus = generate_sampling_instructions(current_training_label, current_training_images);

  // display learning trial
  var learning_trial = {
    type: 'html-keyboard-response',
    stimulus: current_learning_stimulus ,
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      trial_type: "learning"
    },
  }

  cur_block.push(learning_trial);

  // display sampling trial
  var sampling_trial = {
    type: 'html-button-response-cols',
    stimulus: current_sampling_stimulus,
    choices: current_sample_array,
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      trial_type: "sampling"
    }
  }

  cur_block.push(sampling_trial);

   //display selection trial
   var selection_trial = {
    type: 'html-keyboard-response',
    on_start: function(trial) {
        last_trial_data = jsPsych.data.get().last(1).values()[0];
        trial.data.sampled_image = last_trial_data.shuffled_sampling_images[last_trial_data.response];
        trial.data.sampled_label = last_trial_data.sampling_image_words[last_trial_data.response];
      },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_selection_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampling_image_words[last_trial_data.response],
        last_trial_data.current_training_images,
        last_trial_data.shuffled_sampling_images[last_trial_data.response])
    },
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      trial_type: "sampling_feedback"
    }
  }

  cur_block.push(selection_trial);

  // display test trial
  var test_trial = {
    type: 'html-button-response-catact',
    on_start: function(trial) {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      trial.data.sampled_image = last_trial_data.sampled_image;
      trial.data.sampled_label = last_trial_data.sampled_label
    },
    stimulus: function() {
      last_trial_data = jsPsych.data.get().last(1).values()[0];
      return generate_test_instructions(
        last_trial_data.current_training_label, 
        last_trial_data.sampled_label,
        last_trial_data.current_training_images,
        last_trial_data.sampled_image
        )
    },
    choices: current_grid_array,
    images: shuffled_images,
    response_ends_trial: false,
    data: {
      current_training_images: current_training_images,
      current_training_label: current_training_label,
      shuffled_sampling_images: shuffled_sampling_images,
      sampling_image_words: sampling_image_words,
      shuffled_test_images: shuffled_images,
      trial_type: "test"
    }
  }

  cur_block.push(test_trial);

  return(cur_block)
 } 

// generate all blocks
function generate_all_blocks(trial_order, training_types) {

  var all_blocks=[];
  for (var j = 0; j < trial_order.length; j++) {
    trial=trial_order[j];
    cur_block=generate_block(trial, training_types)
    all_blocks=all_blocks.concat(cur_block)
  }

  return(all_blocks)
}