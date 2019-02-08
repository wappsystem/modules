(function(){
    var modules={
        "panel-main-spardac":    			{url:"$A/modules/mdb/p/panel-spardac/panel-main.html",router:1},
        "panel-child-spardac":    			{url:"$A/modules/mdb/p/panel-spardac/panel-child.html"},
        
        "participant-data":   		{url:"$A/modules/mdb/p/participant-data-spardac.html",Table:"spardac-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-spardac",
                                            questionnaire_setup:"online-questionnaire-setup-spardac",
                                            online_questionnaire:"online-questionnaire-app-spardac"
                                        },
        "participant-form":   		{url:"$A/modules/mdb/p/participant-form-spardac.html",Table:"spardac-participant"},

        "notes":  		  	  			{url:"$A/modules/mdb/n/notes.html"},

        "dynamic-text-form-data-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac"},
        "dynamic-text-form-form-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-form.html",Table:"dynamic-text-form-spardac"},
        "one-many-standard-data-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac"},
        "one-many-standard-form-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-form.html",Table:"one-many-standard-spardac"},
        "one-many-special-1-data-spardac":	    {url:"$A/modules/mdb/o/one-many-special-1-data.html",Table:"one-many-special-1-spardac",form_module:"one-many-special-1-form-spardac"},
        "one-many-special-1-form-spardac":	    {url:"$A/modules/mdb/o/one-many-special-1-form.html",Table:"one-many-special-1-spardac"},
        "one-many-special-2-data-spardac":	    {url:"$A/modules/mdb/o/one-many-special-2-data.html",Table:"one-many-special-2-spardac",form_module:"one-many-special-2-form-spardac"},
        "one-many-special-2-form-spardac":	    {url:"$A/modules/mdb/o/one-many-special-2-form.html",Table:"one-many-special-2-spardac"},

        "textarea-data-spardac":                {url:"$A/modules/mdb/t/textarea-data.html",Table:"textarea-spardac",form_module:"textarea-form-spardac"},
        "textarea-form-spardac":                {url:"$A/modules/mdb/t/textarea-form.html",Table:"textarea-spardac"},
        "many-of-many-data-spardac":            {url:"$A/modules/mdb/m/many-of-many-data.html",Table:"many-of-many-spardac",form_module:"many-of-many-form-spardac"},
        "many-of-many-form-spardac":            {url:"$A/modules/mdb/m/many-of-many-form.html",Table:"many-of-many-spardac"},

        "calculation-data-spardac":             {url:"$A/modules/mdb/c/calculation-data.html",Table:"calculation-spardac",form_module:"calculation-form-spardac"},
        "calculation-form-spardac":             {url:"$A/modules/mdb/c/calculation-form.html",Table:"calculation-spardac"},
        "visual-analogue-scale-data-spardac":   {url:"$A/modules/mdb/v/visual-analogue-scale-data.html",Table:"visual-analogue-scale-spardac",form_module:"visual-analogue-scale-form-spardac"},
        "visual-analogue-scale-form-spardac":   {url:"$A/modules/mdb/v/visual-analogue-scale-form.html",Table:"visual-analogue-scale-spardac"},
        "digital-scale-data-spardac":           {url:"$A/modules/mdb/d/digital-scale-data.html",Table:"digital-scale-spardac",form_module:"digital-scale-form-spardac"},
        "digital-scale-form-spardac":           {url:"$A/modules/mdb/d/digital-scale-form.html",Table:"digital-scale-spardac"},
        "star-rating-data-spardac":             {url:"$A/modules/mdb/s/star-rating-data.html",Table:"star-rating-spardac",form_module:"star-rating-form-spardac"},
        "star-rating-form-spardac":             {url:"$A/modules/mdb/s/star-rating-form.html",Table:"star-rating-spardac"},
    
        "date-time-data-spardac":   	{url:"$A/modules/mdb/c/date-time-datac.html",Table:"date-time-spardac",form_module:"date-time-form-spardac"},
        "date-time-form-spardac":   	{url:"$A/modules/mdb/c/date-time-form.html",Table:"date-time-spardac"},
        "number-max-min-data-spardac":   {url:"$A/modules/mdb/n/number-max-min-data.html",Table:"number-max-min-spardac",form_module:"number-max-min-form-spardac"},
        "number-max-min-form-spardac":   {url:"$A/modules/mdb/n/number-max-min-form.html",Table:"number-max-min-spardac"},

        "'concom-medication-data-spardac":   {url:"$A/modules/mdb/c/'concom-medication-data.html",Table:"'concom-medication-spardac",form_module:"'concom-medication-form-spardac"},
        "'concom-medication-form-spardac":   {url:"$A/modules/mdb/c/'concom-medication-form.html",Table:"'concom-medication-spardac"},
        "adverse-event-data-spardac":   {url:"$A/modules/mdb/a/adverse-event-data.html",Table:"adverse-event-spardac",form_module:"adverse-event-form-spardac"},
        "adverse-event-form-spardac":   {url:"$A/modules/mdb/a/adverse-event-form.html",Table:"adverse-event-spardac"}
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();