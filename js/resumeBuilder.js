var bio ={
	"name"   : "Cat Hat",
	"role"   : "Mischief Maker",
	"contact": {
		"mobile"  :"123 456 7890",
		"email"   :"cat@feline.com",
		"github"  :"cathat",
		"twitter" :"@cathat",
		"location": "San Francisco",
	}, 
	"WelcomeMessage": "Go go go on an adventure...", 
	"skills"        : ["Knows","Learns","Teaches","Wrecks!"],
	"biopic"        :"images/Cat.jpg",
	
	"display":function(){
		var formattedRole   = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName   = HTMLheaderName.replace("%data%",bio.name);
		var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMessage);

		//Skills are NOT allining properly!!!
		$("#header").append(HTMLskillsStart);
		for(var i=0;  i<bio.skills.length; i++){
					var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
					$("#skills").append(formattedSkills);
				}
		},

	"TopContactsdisplay":function(){
		var formattedMobile   = HTMLmobile.replace("%data%",bio.contact.mobile);
		var formattedEmail    = HTMLemail.replace("%data%",bio.contact.email);
		var formattedGithub   = HTMLgithub.replace("%data%",bio.contact.github);
		var formattedTwitter  = HTMLtwitter.replace("%data%",bio.contact.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	},
	"FooterContactsdisplay": function(){
		var formattedMobile   = HTMLmobile.replace("%data%",bio.contact.mobile);
		var formattedEmail    = HTMLemail.replace("%data%",bio.contact.email);
		var formattedGithub   = HTMLgithub.replace("%data%",bio.contact.github);
		var formattedTwitter  = HTMLtwitter.replace("%data%",bio.contact.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
		$("#footerContacts").append(formattedMobile,formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	}
	
};

var work ={
	"jobs":[{
			"employer"   : "Bever's",
			"title"      :"Dam Fixer",
			"dates"      : 1995,
			"location"   : "Los Angeles",
			"description": "With mud and sticks we'll fix the dam, fix the dam TODAY.With mud and sticks we'll fix the dam,fix the dam TODAY.With mud and sticks we'll fix the dam,fix the dam TODAY.With mud and sticks we'll fix the dam,fix the dam TODAY.With mud and sticks we'll fix the dam,fix the dam TODAY..."
		},{
			"employer"		: "Robin's",
			"title"			:"Song Coach",
			"dates"			: 1996,
			"location"		: "Portland",
			"description"	: "Songs to guide baby robin's home. Laaaalaaalaaa...Songs to guide baby robin's home. Laaaalaaalaaa...Songs to guide baby robin's home. Laaaalaaalaaa...Songs to guide baby robin's home. Laaaalaaalaaa...Songs to guide baby robin's home. Laaaalaaalaaa...Songs to guide baby robin's home. Laaaalaaalaaa..."
		}
		
	],
	"display": function(){
	for( var job in work.jobs){
		$("#workExperience").prepend(HTMLworkStart);
			var formattedEmployer    = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle       = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates       =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation    = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$("#workExperience").append(formattedEmployer, formattedTitle, formattedDates,formattedLocation, formattedDescription);
	}
}
};

var project = {
	"projects":[{
			"title"			:"Migration",
			"dates"			: 1997,
			"description"	:"Follow the birds and gophers as they go for their anual migration.",
			"image"			: "images/gophers.jpg"
		},{
			"title"			:"Forest",
			"dates"			: 1997,
			"description"	:"Make friends with snakes and hippos; turtles and camels; crocks and chimps and much much more...",
			"image"			:"images/polarbear.jpg"
		}
	],
	"display":function(){
	for(var proj in project.projects){
			$("#projects").prepend(HTMLprojectStart);
			var formattedTitle       = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
			var formattedDates       = HTMLprojectDates.replace("%data%", project.projects[proj].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
			var formattedImage       = HTMLprojectImage.replace("%data%", project.projects[proj].image);
			$("#projects").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
		}
	}
	};

var SchoolEducation ={
	"schools":[{
			"name"		: " College Of Hoopla Hoo",
			"location"	: "San Diego",
			"degree"		: "Singing, Rhyming, Fixing",
			"majors"		: "Hat Mending", 
			"dates"		: 1990,
			},{
			"name"		: "University Of Who who",
			"location"	: "Seattle",
			"degree"		: "Fishing, Tracking, Building",
			"majors"		: "Swimming", 
			"dates"		: 1991,
			}],
			"display":function(){
				for(var edu in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedschoolName     = HTMLschoolName.replace("%data%", education.schools[edu].name);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);			
			var formattedschoolDegree   = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
			var formattedschoolMajors   = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
			var formattedschoolDates    = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
			$("#education").append(formattedschoolName,formattedschoolLocation,
									formattedschoolDegree,formattedschoolMajors,formattedschoolDates);
			}
	}
};
var OnlineEducation ={
	"onlineCourses" : [{
			"title" 	 : "Taking care of fish",
			"school"  : "Fish School",
			"date"	 : 1992,
			"url"		 : "http://fishCenterOfUniverse.com/classOf1992"
			},{
			"title"	: "Thing 1&2",
			"school"	: "School Of Managing Things",
			"date"	: 1990,
			"url"		: "http://thingHelpers.com/classOf1990"
			}],
			"display":function(){
			for(var OnlineEdu in education.onlineCourses){
			$("#education").append(HTMLonlineClasses);
			var formattedOnlineTitle  = HTMLonlineTitle.replace("%data%",education.onlineCourses[OnlineEdu].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[OnlineEdu].school);
			var formattedOnlineDates  = HTMLonlineDates.replace("%data%",education.onlineCourses[OnlineEdu].date);
			var formattedOnlineURL    = HTMLonlineURL.replace("%data%",education.onlineCourses[OnlineEdu].url);
			$("#education").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates,formattedOnlineURL);			
		}
	}};

bio.display();
bio.TopContactsdisplay();
bio.FooterContactsdisplay();
work.display();
project.display();
SchoolEducation.display();
OnlineEducation.display();
//******************internationalize name****************************************

function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+ name[1];	
}

var name = $("#name").text();

$('#main').append(internationalizeButton);
//***********************MAP***********
$("#mapDiv").append(googleMap);
