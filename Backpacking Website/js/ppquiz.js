<script>
var questans0={
	question:"What type of apples do you prefer?",
	answer1:"Granny smith - super sour",
	answer2:"Anything with a bit of a kick",
	answer3:"Pretty ambivalent tbh",
	answer4:"Slightly on the sweet side",
	answer5:"Red delicious - super sweet",
	image:"http://upload.wikimedia.org/wikipedia/commons/3/3c/Pommes_vertes.JPG",
	imageattribution:"",
};
var questans1={
	question:"How bubbly do you like your drank?",
	answer1:"The more bubbles the better!",
	answer2:"Efferevesent please!",
	answer3:"Can take it either way",
	answer4:"More towards the flat side",
	answer5:"Still only",
	image:"http://upload.wikimedia.org/wikipedia/commons/6/6b/Champagne_color-corrected.jpg",
	imageattribution:"",
};
var questans2={
	question:"Do you prefer a sweet or savory brunch?",
	answer1:"I'm going straight for the steak and eggs",
	answer2:"Eggs benedict please",
	answer3:"I alternate between sweet and savory",
	answer4:"Pancakes, waffles, muffins...",
	answer5:"Buttered rum syrup through a straw please!",
	image:"http://upload.wikimedia.org/wikipedia/commons/f/fb/Breakfast%21.jpg",
	imageattribution:"Licensed from Janine under the Creative Commons Attribution 2.0 Generic lincese (//creativecommons.org/licenses/by/2.0/deed.en)",
};
var questans3={
	question:"How hoppy do you like your beer?",
	answer1:"The more hoppy, the better",
	answer2:"IPA, please",
	answer3:"Middle of the road",
	answer4:"Malt is more my thing",
	answer5:"None for me thanks",
	image:"http://upload.wikimedia.org/wikipedia/commons/6/66/Rochefort-beers.jpg",
	imageattribution:"Licensed from Rifleman under the Creative Commons Attribution 2.0 Generic lincese (//creativecommons.org/licenses/by/2.0/deed.en)",
};
var questans4={
	question:"How much do you enjoy citrus?",
	answer1:"I spend my spare time sucking lemons",
	answer2:"3 glasses of OJ a day",
	answer3:"Could take it or leave it",
	answer4:"Not really my thing",
	answer5:"Super (not really) allergic",
	image:"http://upload.wikimedia.org/wikipedia/commons/2/2f/Citrus_reticulata_fruit_2009_G1.jpg",
	imageattribution:"",
};
//Order matters -> var allquestans must be after each individual var questans
var allquestans=new Array();
allquestans[0]=questans0;
allquestans[1]=questans1;
allquestans[2]=questans2;
allquestans[3]=questans3;
allquestans[4]=questans4;
function nextquestion(variable) {
	document.getElementById("question").innerHTML=variable.question;
	document.getElementById("choice1").innerHTML=variable.answer1;
	document.getElementById("choice2").innerHTML=variable.answer2;
	document.getElementById("choice3").innerHTML=variable.answer3;
	document.getElementById("choice4").innerHTML=variable.answer4;
	document.getElementById("choice5").innerHTML=variable.answer5;
	document.getElementById("RHSimage").src=variable.image;
	document.getElementById("RHSimageattribution").innerHTML=variable.imageattribution;
}
var question_count=-1;
var score='';
function next() {
	// Keeps track of the question
	question_count=question_count+1;
	
	if (question_count<allquestans.length) {
		nextquestion(allquestans[question_count]);
		//Collect user input to generate score
		var question_score=document.querySelector('input[name="answer"]:checked').value;
		//Store as a 6 digit binary string - e.g., 010101 = 2^6=32 choices
		score=score+question_score;
	}
	//After user answers all questions
	else {
		//Collect user input to generate score
		var question_score=document.querySelector('input[name="answer"]:checked').value;
		//Store as a 6 digit binary string - e.g., 010101 = 2^6=32 choices
		score=score+question_score;
		//English cider
		if ((score[0] == '0') || (score[0] == '1')) {
			document.getElementById("quiz").innerHTML="";
			document.getElementById("responseLHStitle").innerHTML="<h2 style='font-family:Verdanna;color:white;'>You ought to try an English Cider!</h2>";
			document.getElementById("responseLHSdescription").innerHTML="<p style='font-family:Georgia;color:white;'>This includes the English “West Country” plus ciders inspired by that style. These ciders are made with bittersweet and bitter-sharp apple varieties cultivated specifically for cider making.</p>";
			document.getElementById("responseLHSaroma").innerHTML="<p style='font-family:Georgia;color:white;'><b>Aroma/Flavor:</b> No overt apple character, but various flavors and esters that suggest apples. May have “smoky (bacon)” character from a combination of apple varieties and MLF.</p>";
			document.getElementById("responseLHSappearance").innerHTML="<p style='font-family:Georgia;color:white;'><b>Appearance:</b> Slightly cloudy to brilliant. Medium to deep gold color.</p>";
			document.getElementById("responseLHSmouthfeel").innerHTML="<p style='font-family:Georgia;color:white;'><b>Mouthfeel:</b> Full. Moderate to high tannin apparent as astringency and some bitterness. Carbonation still to moderate, never high or gushing.</p>";
			document.getElementById("responseLHSoverallimpression").innerHTML="<p style='font-family:Georgia;color:white;'><b>Overall Impression:</b> Generally dry, full-bodied, austere.</p>";
			document.getElementById("responseLHSABV").innerHTML="<p style='font-family:Georgia;color:white;'><b>ABV:</b> 6-9%</p>";
			document.getElementById("responseLHScommercialexamples").innerHTML="<p style='font-family:Georgia;color:white;'><b>Commercial Examples:</b> [US] Westcott Bay Traditional Very Dry, Traditional Dry and Traditional Medium Sweet (WA), Farnum Hill Extra-Dry, Dry, and Farmhouse (NH), Wandering Aengus Dry Cider (OR), Red Barn Cider Burro Loco (WA), Bellwether Heritage (NY); [UK] Oliver’s Herefordshire Dry Cider, various from Hecks, Dunkerton, Burrow Hill, Gwatkin Yarlington Mill, Aspall Dry Cider</p>";
			document.getElementById("responseRHS").src="https://s3-us-west-2.amazonaws.com/cyderz.com/cidrerienormandie2.jpg";
			document.getElementById("quizshareimage").src="https://s3-us-west-2.amazonaws.com/cyderz.com/share-button-fb3.png";
			document.getElementById("quizshare").href = "javascript:fbShare('http://www.cidercraft.com/flavor_profile/', 'Which type of cider are you?', 'You got an English Cider! These ciders are made with bittersweet and bitter-sharp apple varieties cultivated specifically for cider making.', 'https://s3-us-west-2.amazonaws.com/cyderz.com/cidrerienormandie2.jpg', 520, 350)";
			document.getElementById("resultimageattribute").innerHTML="";
		}
		//French cider
		else if ((score[3] == '3') || (score[3] == '4')) {
			document.getElementById("quiz").innerHTML="";
			document.getElementById("responseLHStitle").innerHTML="<h2 style='font-family:Verdanna;color:white;'>You ought to try a French Cider!</h2>";
			document.getElementById("responseLHSdescription").innerHTML="<p style='font-family:Georgia;color:white;'>This is a cider made with  made with bittersweet and bitter-sharp apple varieties cultivated specifically for cider making.</p>";
			document.getElementById("responseLHSaroma").innerHTML="<p style='font-family:Georgia;color:white;'><b>Aroma/Flavor:</b> Fruity character/aroma. This may come from slow or arrested fermentation or approximated by back sweetening with juice. Tends to a rich fullness.</p>";
			document.getElementById("responseLHSappearance").innerHTML="<p style='font-family:Georgia;color:white;'><b>Appearance:</b> Clear to brilliant, medium to deep gold color.</p>";
			document.getElementById("responseLHSmouthfeel").innerHTML="<p style='font-family:Georgia;color:white;'><b>Mouthfeel:</b> Medium to full, mouth filling. Moderate tannin apparent mainly as astringency. Carbonation moderate to champagne-like, but at higher levels it must not gush or foam.</p>";
			document.getElementById("responseLHSoverallimpression").innerHTML="<p style='font-family:Georgia;color:white;'><b>Overall Impression:</b> Medium to sweet, full-bodied, rich.</p>";
			document.getElementById("responseLHSABV").innerHTML="<p style='font-family:Georgia;color:white;'><b>ABV:</b> 3-6%</p>";
			document.getElementById("responseLHScommercialexamples").innerHTML="<p style='font-family:Georgia;color:white;'><b>Commercial Examples:</b> [US] West County Reine de Pomme (MA), Rhyne Cider (CA); [France] Eric Bordelet (various), Etienne Dupont, Etienne Dupont Organic, Bellot</p>";
			document.getElementById("responseRHS").src="https://s3-us-west-2.amazonaws.com/cyderz.com/sagarrak_zanpatzen2.jpg";
			document.getElementById("quizshareimage").src="https://s3-us-west-2.amazonaws.com/cyderz.com/share-button-fb3.png";
			document.getElementById("quizshare").href = "javascript:fbShare('http://www.cidercraft.com/flavor_profile/', 'Which type of cider are you?', 'You got a French Cider! This is a cider made with  made with bittersweet and bitter-sharp apple varieties cultivated specifically for cider making.', 'https://s3-us-west-2.amazonaws.com/cyderz.com/sagarrak_zanpatzen2.jpg', 520, 350)";
			document.getElementById("resultimageattribute").innerHTML="Licensed from Sagardun under the Creative Commons Attribution-Share Alike 3.0 Unported License (http://creativecommons.org/licenses/by-sa/3.0/deed.en)";
		}
		//New england cider (aka barrel cider)
		else {
			document.getElementById("quiz").innerHTML="";
			document.getElementById("responseLHStitle").innerHTML="<h2 style='font-family:Verdanna;color:white;'>You ought to try a New England Cider, also known as Barrel Cider!</h2>";
			document.getElementById("responseLHSdescription").innerHTML="<p style='font-family:Georgia;color:white;'>This is a cider made with characteristic New England apples for relatively high acidity, with adjuncts to raise alcohol levels.</p>";
			document.getElementById("responseLHSaroma").innerHTML="<p style='font-family:Georgia;color:white;'><b>Aroma/Flavor:</b> A dry flavorful cider with robust apple character, strong alcohol, and derivative flavors from sugar adjuncts.</p>";
			document.getElementById("responseLHSappearance").innerHTML="<p style='font-family:Georgia;color:white;'><b>Appearance:</b> Clear to brilliant, pale to medium yellow.</p>";
			document.getElementById("responseLHSmouthfeel").innerHTML="<p style='font-family:Georgia;color:white;'><b>Mouthfeel:</b> Substantial, alcoholic. Moderate tannin.</p>";
			document.getElementById("responseLHSoverallimpression").innerHTML="<p style='font-family:Georgia;color:white;'><b>Overall Impression:</b> Substantial body and character.</p>";
			document.getElementById("responseLHSABV").innerHTML="<p style='font-family:Georgia;color:white;'><b>ABV:</b> 7 – 13%</p>";
			document.getElementById("responseLHScommercialexamples").innerHTML="<p style='font-family:Georgia;color:white;'><b>Commercial Examples:</b> [US] Black Bird Cider Works (NY), Reverend Nat's Hard Cider (RI);</p>";
			document.getElementById("responseRHS").src="https://s3-us-west-2.amazonaws.com/cyderz.com/apfelwein_geripptes_bembel2.jpg";
			document.getElementById("quizshareimage").src="https://s3-us-west-2.amazonaws.com/cyderz.com/share-button-fb3.png";
			document.getElementById("quizshare").href = "javascript:fbShare('http://www.cidercraft.com/flavor_profile/', 'Which type of cider are you?', 'You got a New England Cider! This is a cider made with characteristic New England apples for relatively high acidity, with adjuncts to raise alcohol levels.', 'https://s3-us-west-2.amazonaws.com/cyderz.com/apfelwein_geripptes_bembel2.jpg', 520, 350)";
			document.getElementById("resultimageattribute").innerHTML="Licensed from Eva Kröcher under the Creative Commons Attribution-Share Alike 3.0 Unported License (http://creativecommons.org/licenses/by-sa/3.0/deed.en)";
		}
	}
}
	</script>
	<script>
		function setupLabel() {
    if ($('.label_radio input').length) {
        $('.label_radio').each(function() {
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function() {
            $(this).parent('label').addClass('r_on');
        });
    };
};
//do on ready
$('label').click(function() {
    $(this).children("input").prop("checked", true);
    setupLabel();
});
setupLabel();
	</script>

	<script>
// JS Facebook share
//POTENTIAL SOLUTION -> RUN ALL 5 potential answer choices in the beginning, then choose the relevant output upon
//checkout, e.g., load all 5 possible solutions, and if score = '000000', show option 1, etc.
		
		//Individual user summary (e.g., You got cider type X!)
		function fbShare(url, title, descr, image, winWidth, winHeight) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width='+winWidth+',height='+winHeight);
    	}
  </script>

  <script>
//FB share
 function createFBShareLink(fbAppId,fbShareUrl,fbShareImg,fbShareName,fbShareCaption,fbShareDesc,baseURL) {
	window.open('http://www.facebook.com/dialog/feed?app_id=' + FBVars.fbAppId + '&link=' + FBVars.fbShareUrl + '&picture='+ FBVars.fbShareImg + '&name=' + encodeURIComponent(FBVars.fbShareName) + '&caption=' + encodeURIComponent(FBVars.fbShareCaption) + '&description=' + encodeURIComponent(FBVars.fbShareDesc) + '&redirect_uri=' + FBVars.baseURL + 'popupClose.html' + '&display=popup', 'feedDialog', 'toolbar=0,status=0,width=626,height=436');
}
</script>
<script>
//do on ready
$('label').click(function() {
    $(this).children("input").prop("checked", true);
    setupLabel();
});
setupLabel();
</script>