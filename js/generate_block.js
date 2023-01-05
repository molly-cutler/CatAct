// generate a block for CatAct

function generate_block(trial_order) {
	trial = trial_order[j];
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
              current_sample_array.push('<img src="'+shuffled_sampling_images[i]+'" width='+grid_image_width+' height='+grid_image_height+'>')
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
		  	sampling_image = shuffled_sampling_images[k]
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
		  
		  
		  
		  var current_learning_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p><p><b><font size="4.5">These are 3 '+current_training_label+'s.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><figure><img src="'+current_training_images[0]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><figure><img src="'+current_training_images[1]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><figure><img src="'+current_training_images[2]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><img src="'+current_training_images[0]+'" style="width:50%;opacity:0"></div></div><b><font size="4.5">Press any key to continue.</font></b><style="text-align:center;" /p></div>';
		  
		  var current_sampling_stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p><p><b><font size="4.5">These are 3 '+current_training_label+'s.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><figure><img src="'+current_training_images[0]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><figure><img src="'+current_training_images[1]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><figure><img src="'+current_training_images[2]+'" style="width:75%"><figcaption style="font-size:24px">'+current_training_label+'</figcaption></figure></div><div class="column"><img src="'+current_training_images[0]+'" style="width:50%;opacity:0"></div></div><p><b><font size="4.5">Which of these nine objects would you like to learn the name of? Click on the object that you would like to know the name of.</font></b><style="text-align:center;" /p><div class="row"><div class="column"></div></div></div>';
		  
		  
        // empty variables to store response data
        var subject_response ="";
        var number_response ="";
        var training_images_tracker = [];
        var training_label_tracker = [];
        var shuffled_sampling_image_tracker = [];
        var sampling_image_words_tracker = [];
        var shuffled_test_images_tracker = [];

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
        timeline.push(learning_trial);

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

            },
            // log data    
            on_finish: function(data) {
                number_response = data.response;
                training_images_tracker = data.current_training_images;
                training_label_tracker = data.current_training_label;
                shuffled_sampling_image_tracker = data.shuffled_sampling_images;
                sampling_image_words_tracker = data.sampling_image_words;
                shuffled_test_images_tracker = data.shuffled_test_images;
                subject_response = data.shuffled_sampling_images[data.response];
                console.log(subject_response);
                console.log(data);
                console.log(number_response);
                console.log(training_images_tracker);
                console.log(training_label_tracker);
                console.log(shuffled_sampling_image_tracker);
                console.log(sampling_image_words_tracker);
                console.log(shuffled_test_images_tracker);

            }
        }
        timeline.push(sampling_trial);

   //display selection trial
   // display sampling trial
        var selection_trial = {
            type: 'html-keyboard-response',
			stimulus: current_sampling_stimulus,
			data: {
            	current_training_images: current_training_images, 
            	current_training_label: current_training_label,
            	shuffled_sampling_images: shuffled_sampling_images,
            	sampling_image_words: sampling_image_words,
            	shuffled_test_images: shuffled_images,
            	trial_type: "sampling_feedback"

            },
            on_start: function(trial) {
       	console.log(sampling_image_words_tracker);
       	console.log(number_response);
            trial.stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+current_training_label+'s and which are not.</font></b><style="text-align:center;" /p><p><b><font size="4.5">The image you selected is a '+sampling_image_words_tracker[number_response]+'.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><figure><img src="'+training_images_tracker[0]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+training_images_tracker[1]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+training_images_tracker[2]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+subject_response+'" style="width:50%"><figcaption style="font-size:24px">'+sampling_image_words_tracker[number_response]+'</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column"><div id="container"><p><b><font size="4.5">Next, you will see a set of 24 new objects and decide which of them are also '+training_label_tracker+'s.</font></b><p><b><font size="4.5">Press any key to continue.</font></b><style="text-align:center;" /p><style="text-align:center;" /p></div>';
       
            console.log(trial.stimulus)
       }
            
        }
        timeline.push(selection_trial);
       

   console.log(subject_response);

   // display test trial
   var test_trial = {
       type: 'html-button-response-catact',
       stimulus: 
           '<div id="container"><p><b><font size="4.5">These are 3 wugs and 1 '+sampling_image_words_tracker[number_response]+'.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><figure><img src="'+current_training_images[0]+'" style="width:50%"></div><div class="column"><img src="'+current_training_images[1]+'" style="width:50%"></div><div class="column"><img src="'+current_training_images[2]+'" style="width:50%"></div><div class="column"><img src="'+current_training_images[0]+'" style="width:50%;opacity:0"></div></div><p><b><font size="4.5">Your job is to figure out which objects are wugs and which are not.</font></b><style="text-align:center;" /p> <p><b><font size="4.5">Which of these nine objects would you like to learn the name of?</font></b><style="text-align:center;" /p><div class="row"><div class="column"></div></div></div>',
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

            },
       on_start: function(trial) {
       	console.log(sampling_image_words_tracker);
       	console.log(number_response);
            trial.stimulus = '<div id="container"><p><b><font size="4.5">Your job is to figure out which objects are '+training_label_tracker+'s and which are not.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><figure><img src="'+training_images_tracker[0]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+training_images_tracker[1]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+training_images_tracker[2]+'" style="width:50%"><figcaption style="font-size:24px">'+training_label_tracker+'</figcaption></figure></div><div class="column"><figure><img src="'+subject_response+'" style="width:50%"><figcaption style="font-size:24px">'+sampling_image_words_tracker[number_response]+'</figcaption></figure></div class="column"></div class="column"></div class="column"></div class="column">\ <p><b><font size="4.5">Now, pick <u>all of the '+training_label_tracker+'s</u> from among these 24 objects.</font></b><style="text-align:center;" /p><p><b><font size="4.5">You can pick an object by clicking on it. Objects you select will turn red. You can also unselect items by clicking on them again. When you are finished selecting <u>all</u> of the objects you think are '+training_label_tracker+'s, press the submit button at the bottom of the page.</font></b><style="text-align:center;" /p></div><div class="row"><div class="column"></div></div></div>';
        // else if (sampling_image_words[number_response] == "wug")
           // trial.stimulus = '<p><b><font size="6.5">These are 4 wugs.</font></b><style="text-align:center;" /p><div class="row"><div class="column"><img src="stims/animals/subordinate/training/c3_sub1.jpg" style="width:50%"></div><div class="column"><img src="stims/animals/subordinate/training/c3_sub2.jpg" style="width:50%"></div><div class="column"><img src="stims/animals/subordinate/training/c3_sub3.jpg" style="width:50%"></div><div class="column"><img src="'+subject_response+'" style="width:50%"></div></div> <p><b><font size="6.5">Your job is to figure out which objects are wugs and which are not.</font></b><style="text-align:center;" /p> <p><b><font size="6.5">Now, pick all of the wugs.</font></b><style="text-align:center;" /p><div class="row"><div class="column">';  
            console.log(trial.stimulus)
       }

   }



   timeline.push(test_trial);
      } 