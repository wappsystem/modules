(function(){
    var modules={
        "panel-main-spardac":    			{url:"$A/modules/mdb/p/panel-spardac/panel-main.html",router:1},
        "panel-child-spardac":    			{url:"$A/modules/mdb/p/panel-spardac/panel-child.html"},
        
        "participant-data-spardac":   		{url:"$A/modules/mdb/p/participant-data-spardac.html",Table:"spardac-participant",form_module:"participant-form-spardac",router:1,
                                            child_panel:"panel-child-spardac",
                                            questionnaire_setup:"online-questionnaire-setup-spardac",
                                            online_questionnaire:"online-questionnaire-app-spardac"
                                        },
        "participant-form-spardac":   		{url:"$A/modules/mdb/p/participant-form-spardac.html",Table:"spardac-participant"},

        "notes":  		  	  			{url:"$A/modules/mdb/n/notes.html"},

        "dynamic-text-form-data-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-data.html",Table:"dynamic-text-form-spardac",form_module:"dynamic-text-form-form-spardac"},
        "dynamic-text-form-form-spardac":		{url:"$A/modules/mdb/d/dynamic-text-form-form.html.html",Table:"dynamic-text-form-spardac"},
        "one-many-standard-data-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-data.html",Table:"one-many-standard-spardac",form_module:"one-many-standard-form-spardac"},
        "one-many-standard-form-spardac":	    {url:"$A/modules/mdb/o/one-many-standard-form.html",Table:"one-many-standard-spardac"},
        "adverseevents-data-3m-spardac":	    {url:"$A/modules/mdb/a/adverseevents-data-spardac.html",Table:"cpap-adverseevents-3m",form_module:"adverseevents-form-3m-spardac"},
        "adverseevents-form-3m-spardac":	    {url:"$A/modules/mdb/a/adverseevents-form-spardac.html",Table:"cpap-adverseevents-3m"},

        "bloodgas-data-spardac":                   {url:"$A/modules/mdb/b/bloodgas-data-spardac.html",Table:"bloodgas-spardac",form_module:"bloodgas-form-spardac"},
        "bloodgas-form-spardac":                   {url:"$A/modules/mdb/b/bloodgas-form-spardac.html",Table:"bloodgas-spardac"},
        "bloodgas-data-1m-spardac":                {url:"$A/modules/mdb/b/bloodgas-data-spardac.html",Table:"bloodgas-1m-spardac",form_module:"bloodgas-form-1m-spardac"},
        "bloodgas-form-1m-spardac":                {url:"$A/modules/mdb/b/bloodgas-form-spardac.html",Table:"bloodgas-1m-spardac"},
        "bloodgas-data-3m-spardac":                {url:"$A/modules/mdb/b/bloodgas-data-spardac.html",Table:"bloodgas-3m-spardac",form_module:"bloodgas-form-3m-spardac"},
        "bloodgas-form-3m-spardac":                {url:"$A/modules/mdb/b/bloodgas-form-spardac.html",Table:"bloodgas-3m-spardac"},
        "blood-data-spardac":                      {url:"$A/modules/mdb/b/blood-data-spardac.html",Table:"blood-spardac",form_module:"blood-form-spardac"},
        "blood-form-spardac":                      {url:"$A/modules/mdb/b/blood-form-spardac.html",Table:"blood-spardac"},
        "blood-data-3m-spardac":                   {url:"$A/modules/mdb/b/blood-data-spardac.html",Table:"blood-3m-spardac",form_module:"blood-form-3m-spardac"},
        "blood-form-3m-spardac":                   {url:"$A/modules/mdb/b/blood-form-spardac.html",Table:"blood-3m-spardac"},

        "clinical-trials-app-spardac":     {url:"$A/apps/c/clinical-trials-spardac/index.html"},
        "consent-form-upload-data-spardac":{url:"$A/modules/mdb/c/consent-form-upload-data-spardac.html",Table:"consent-form",form_module:"consent-form-upload-form-spardac"},
        "consent-form-upload-form-spardac":{url:"$A/modules/mdb/c/consent-form-upload-form-spardac.html",Table:"consent-form"},
        "contact-details-data":   		{url:"$A/modules/mdb/c/contact-details-data.html",Table:"contact-details",form_module:"contact-details-form",router:1},
        "contact-details-form":   		{url:"$A/modules/mdb/c/contact-details-form.html",Table:"contact-details"},

        "cpapdownload-data-spardac":   	{url:"$A/modules/mdb/c/cpapdownload-data-spardac.html",Table:"cpapdownload-spardac",form_module:"cpapdownload-form-spardac"},
        "cpapdownload-form-spardac":   	{url:"$A/modules/mdb/c/cpapdownload-form-spardac.html",Table:"cpapdownload-spardac"},
        "cpapdownload-data-3m-spardac":   	{url:"$A/modules/mdb/c/cpapdownload-data-spardac.html",Table:"cpapdownload-3m-spardac",form_module:"cpapdownload-form-3m-spardac"},
        "cpapdownload-form-3m-spardac":   	{url:"$A/modules/mdb/c/cpapdownload-form-spardac.html",Table:"cpapdownload-3m-spardac"},

        "ess-data-spardac":       			{url:"$A/modules/mdb/e/epworth-sleepiness-scale-data-spardac.html",Table:"ess",form_module:"ess-form-spardac"},
        "ess-form-spardac":       			{url:"$A/modules/mdb/e/epworth-sleepiness-scale-form-spardac.html",Table:"ess",task_name:"Visit 1 - Epworth Sleepiness Scale"},
        "ess-data-3m-spardac":     		{url:"$A/modules/mdb/e/epworth-sleepiness-scale-data-spardac.html",Table:"ess-3m-spardac",form_module:"ess-form-3m-spardac"},
        "ess-form-3m-spardac":     		{url:"$A/modules/mdb/e/epworth-sleepiness-scale-form-spardac.html",Table:"ess-3m-spardac",task_name:"3 Month - Epworth Sleepiness Scale"},
        "ecg-data-spardac":   	  			{url:"$A/modules/mdb/e/ecg-data-spardac.html",Table:"ecg-spardac",form_module:"ecg-form-spardac"},
        "ecg-form-spardac":   	  			{url:"$A/modules/mdb/e/ecg-form-spardac.html",Table:"ecg-spardac"},
        "ecg-data-3m-spardac":   	  		{url:"$A/modules/mdb/e/ecg-data-spardac.html",Table:"ecg-3m-spardac",form_module:"ecg-form-3m-spardac"},
        "ecg-form-3m-spardac":   	  		{url:"$A/modules/mdb/e/ecg-form-spardac.html",Table:"ecg-3m-spardac"},
        
        "fosq-data-spardac":  	  			{url:"$A/modules/mdb/f/functional-outcome-of-sleepquestionnaire-data-spardac.html",Table:"fosq-spardac",form_module:"fosq-form-spardac"},
        "fosq-form-spardac":  	  			{url:"$A/modules/mdb/f/functional-outcome-of-sleepquestionnaire-form-spardac.html",Table:"fosq-spardac",task_name:"Visit 1 - Functional Outcomes of Sleep Questionnaire"},
        "fosq-data-3m-spardac":  	  		{url:"$A/modules/mdb/f/functional-outcome-of-sleepquestionnaire-data-spardac.html",Table:"fosq-3m-spardac",form_module:"fosq-form-3m-spardac"},
        "fosq-form-3m-spardac":  	  		{url:"$A/modules/mdb/f/functional-outcome-of-sleepquestionnaire-form-spardac.html",Table:"fosq-3m-spardac",task_name:"3 Month - Functional Outcomes of Sleep Questionnaire"},
        
        "medical-history-data-spardac":    {url:"$A/modules/mdb/m/medical-history-data-spardac.html",Table:"medical-history",form_module:"medical-history-form-spardac"},
        "medical-history-form-spardac":    {url:"$A/modules/mdb/m/medical-history-form-spardac.html",Table:"medical-history"},
        "medication-data-spardac":         {url:"$A/modules/mdb/m/medication-data-spardac.html",Table:"medication-spardac",form_module:"medication-form-spardac"},
        "medication-form-spardac":         {url:"$A/modules/mdb/m/medication-form-spardac.html",Table:"medication-spardac"},
        
        "online-questionnaire-setup-spardac": 	{url:"$A/modules/mdb/o/online-questionnaire-setup-spardac.html",Table:"spardac-participant"},
        "online-questionnaire-app-spardac":    {url:"$A/apps/o/online-questionnaire-spardac/index.html"},
        

        "pwa-data-spardac":	            {url:"$A/modules/mdb/p/pwa-data-spardac.html",Table:"pwa-spardac",form_module:"pwa-form-spardac"},
        "pwa-form-spardac":	            {url:"$A/modules/mdb/p/pwa-form-spardac.html",Table:"pwa-spardac"},
        "pwa2-data-spardac":	            {url:"$A/modules/mdb/p/pwa-data-spardac.html",Table:"pwa2-spardac",form_module:"pwa2-form-spardac"},
        "pwa2-form-spardac":	            {url:"$A/modules/mdb/p/pwa-form-spardac.html",Table:"pwa2-spardac"},
        "pwa-data-3m-spardac":	            {url:"$A/modules/mdb/p/pwa-data-spardac.html",Table:"pwa-3m-spardac",form_module:"pwa-form-3m-spardac"},
        "pwa-form-3m-spardac":	            {url:"$A/modules/mdb/p/pwa-form-spardac.html",Table:"pwa-3m-spardac"},
        "pwa2-data-3m-spardac":	        {url:"$A/modules/mdb/p/pwa-data-spardac.html",Table:"pwa2-3m-spardac",form_module:"pwa2-form-3m-spardac"},
        "pwa2-form-3m-spardac":	        {url:"$A/modules/mdb/p/pwa-form-spardac.html",Table:"pwa2-3m-spardac"},
        "pwv-data-spardac":	            {url:"$A/modules/mdb/p/pwv-data-spardac.html",Table:"pwv-spardac",form_module:"pwv-form-spardac"},
        "pwv-form-spardac":	            {url:"$A/modules/mdb/p/pwv-form-spardac.html",Table:"pwv-spardac"},
        "pwv2-data-spardac":	            {url:"$A/modules/mdb/p/pwv-data-spardac.html",Table:"pwv2-spardac",form_module:"pwv2-form-spardac"},
        "pwv2-form-spardac":	            {url:"$A/modules/mdb/p/pwv-form-spardac.html",Table:"pwv2-spardac"},
        "pwv-data-3m-spardac":	            {url:"$A/modules/mdb/p/pwv-data-spardac.html",Table:"pwv-3m-spardac",form_module:"pwv-form-3m-spardac"},
        "pwv-form-3m-spardac":	            {url:"$A/modules/mdb/p/pwv-form-spardac.html",Table:"pwv-3m-spardac"},
        "pwv2-data-3m-spardac":	        {url:"$A/modules/mdb/p/pwv-data-spardac.html",Table:"pwv2-3m-spardac",form_module:"pwv2-form-3m-spardac"},
        "pwv2-form-3m-spardac":	        {url:"$A/modules/mdb/p/pwv-form-spardac.html",Table:"pwv2-3m-spardac"},
        
        "pressurespardac-data-spardac":       {url:"$A/modules/mdb/p/pressurespardac-data-spardac.html",Table:"pressurespardac-spardac",form_module:"pressurespardac-form-spardac"},
        "pressurespardac-form-spardac":	    {url:"$A/modules/mdb/p/pressurespardac-form-spardac.html",Table:"pressurespardac-spardac"},
        "pressurecpap-data-spardac":       {url:"$A/modules/mdb/p/pressurecpap-data-spardac.html",Table:"pressurecpap-spardac",form_module:"pressurecpap-form-spardac"},
        "pressurecpap-form-spardac":	    {url:"$A/modules/mdb/p/pressurecpap-form-spardac.html",Table:"pressurecpap-spardac"},

        "physical-examination-data-spardac":{url:"$A/modules/mdb/p/physical-examination-data-spardac.html",Table:"physical-examination",form_module:"physical-examination-form-spardac"},
        "physical-examination-form-spardac":{url:"$A/modules/mdb/p/physical-examination-form-spardac.html",Table:"physical-examination"},

        "randomisation-table-low-data-spardac": {url:"$A/modules/mdb/r/randomisation-table-data-spardac.html",Table:"spardac-randomisation-low",form_module:"randomisation-table-low-form-spardac"},
        "randomisation-table-low-form-spardac": {url:"$A/modules/mdb/r/randomisation-table-form-spardac.html",Table:"spardac-randomisation-low"},
        "randomisation-table-high-data-spardac":{url:"$A/modules/mdb/r/randomisation-table-data-spardac.html",Table:"spardac-randomisation-high",form_module:"randomisation-table-high-form-spardac"},
        "randomisation-table-high-form-spardac":{url:"$A/modules/mdb/r/randomisation-table-form-spardac.html",Table:"spardac-randomisation-high"},
        
        "social-history-data-spardac":    	{url:"$A/modules/mdb/s/social-history-data-spardac.html",Table:"social-history",form_module:"social-history-form-spardac"},
        "social-history-form-spardac":    	{url:"$A/modules/mdb/s/social-history-form-spardac.html",Table:"social-history"},
        "spirometry-data-spardac":      	{url:"$A/modules/mdb/s/spirometry-data-spardac.html",Table:"spirometry-spardac",form_module:"spirometry-form-spardac"},
        "spirometry-form-spardac":      	{url:"$A/modules/mdb/s/spirometry-form-spardac.html",Table:"spirometry-spardac"},
        "spirometry-data-1m-spardac":     	{url:"$A/modules/mdb/s/spirometry-data-spardac.html",Table:"spirometry-1m-spardac",form_module:"spirometry-form-1m-spardac"},
        "spirometry-form-1m-spardac":     	{url:"$A/modules/mdb/s/spirometry-form-spardac.html",Table:"spirometry-1m-spardac"},
        "sri-data-spardac":      	        {url:"$A/modules/mdb/s/sri-data-spardac.html",Table:"sri-spardac",form_module:"sri-form-spardac"},
        "sri-form-spardac":      	        {url:"$A/modules/mdb/s/sri-form-spardac.html",Table:"sri-spardac",task_name:"Visit 1 - Severe Respiratory Insufficiency Questionnaire"},
        "sri-data-3m-spardac":             {url:"$A/modules/mdb/s/sri-data-spardac.html",Table:"sri-3m-spardac",form_module:"sri-form-3m-spardac"},
        "sri-form-3m-spardac":             {url:"$A/modules/mdb/s/sri-form-spardac.html",Table:"sri-3m-spardac",task_name:"3 Month - Severe Respiratory Insufficiency Questionnaire"},


    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
