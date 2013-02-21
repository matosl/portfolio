var currPage = "home"
var currPicSet = "art";
var activateButtons = false;

function load() {
	//alert( document.URL );
	animateHome();
	setUpGalleries();
}

function setUpGalleries() {

	// Art and Design Galleries

	dancerImages = ['/images/dancer-games-f.jpg', '/images/dancer-games-m.jpg'];
	dancerDescriptions = ["<b>The Dancer Games</b> &#124; Photoshop, Illustrator<br/><br/>'The Dancer Games', a spin-off of the movie and novel, The Hunger Games, was chosen as the theme of Onda Latina's Fall 2012 show. I create two official posters for printing and a series of headshots to promote the event on Facebook.", ""];
	
	tsoImages = ['/images/tso-design-shirt.png'];
	tsoDescriptions = ["<b>Fresher than Freshman</b> &#124; Illustrator<br/><br/>As a favor to a dear friend, I designed a t-shirt for the Transfer Student Organization of the University of Pennsylvania."];
	
	bondaImages = ['/images/onda-never-dies-d.jpg', '/images/onda-never-dies-panels.jpg'];
	bondaDescriptions = ["<b>Onda Never Dies</b> &#124; Photoshop, Illustrator<br/><br/>'007: Onda Never Dies' was Onda Latina's 15th anniversary show. Inspired by vintage James Bond movie posters, I created two promotional posters for the event.",""];
	
	sansomImages = ['http://vimeo.com/38511787'];
	sansomDescriptions = ["<b>Evocation of a Place: Sansom Street</b> &#124; Final Cut Pro<br/><br/>"];
	
	heydayImages = ['/images/hey-day-twitter-shirt.png'];
	heydayDescriptions = ["<b>@HeyDay2012</b> &#124; Photoshop, Illustrator<br/><br/>Hey Day is a Quaker tradition that celebrates Juniors rising to Seniority. The design was one of the five finalists; however, it was not selected as the official Hey Day t-shirt design. Although, it should have been!"];

	var umamiDescription = "<b>Oh Mami, It's Umami</b> &#124; Photoshop, Illustrator<br/><br/>We were tasked to propose a project that addresses how design affects positive outlook. I chose to focus on the pleasure component of happiness and created a series of advertisements promoting the fifth taste&#151;umami.";
	umamiImages = ['/images/umami-magazine.jpg', '/images/umami-title.jpg', '/images/umami-blue.jpg','/images/umami-pink.jpg', '/images/umami-green.jpg', '/images/umami-yellow.jpg' ];
	umamiDescriptions = [umamiDescription,"","","","", ""];
	
	embeddedImages = ['/images/EMBS-poster.gif', '/images/embs-bookmark-front.png', '/images/embs-bookmark-back.png'];
	embeddedDescriptions = ["<b>Embedded Systems</b> &#124; Illustrator<br/><br/>Master of Science in Engineering in Embedded Systems is a fairly recent master's program in Penn's school of engineering. I was commissioned to create several materials to promote and brand the program.", "", ""];
	
	var swissDescription ="<b>Deconstruction</b> &#124; Photoshop, Illustrator<br/><br/>We were instructed to select an object of cultural importance and break it down into parts. I found it interesting to deconstruct a folk-designed Swiss chocolate bar wrapper and contrast it with the starkness of Swiss design.";
	swissImages = ['/images/swiss-triptych.png'];
	swissDescriptions = [swissDescription];
	
	grotesqueDescriptions = ["<b>Grotesque</b> &#124; Soft and Hard Pencils<br/><br/>A pencil drawing of a still-life arrangement in the grotesque style inspired by German artist, Hans Bellmer.","","",""];
	grotesqueImages = ['/images/grotesque-full.jpg', '/images/grotesque-cu-bone.jpg', '/images/grotesque-cu-trumpet.jpg', '/images/grotesque-cu-wheel.jpg'];
		
	// Code Galleries
	
	ecraftingDescriptions = ["<a class='button' href='http://www.ecrafting.org/' target='_blank'>Go to site</a><br/><br/><b>eCrafting Circles</b> &#124; HTML, CSS, JavaScript<br/><br/>eCrafting Circles is an online community associated with a group located in Philadelphia, Pennsylvania, USA. The group brings together expertise from learning sciences, digital media design, computer science, and informal science education. eCrafting Circles integrates engineering and technology into science education using e-textiles to catalyze online creative collectives.<br/><br>I was commissioned to design, develop, and implement its internet presence. The site is currently a landing page with information about the organization. However, it will soon be the hub and showcase for these amazing projects!"];
	ecraftingImages = ['/images/ecrafting.jpg'];
	
	vinklDescriptions = ["<br/><br/><b>Vinkl: The Talent Marketplace</b> &#124; Photoshop, Illustrator, HTML, CSS, JavaScript, XHTML, Java, NetBeans<br/><br/>Over the summer, I designed user interfaces for the cluster-based peer-to-peer talent marketplace internet startup, Vinkl. I created over +30 layouts and page elements with Adobe Illustrator and implemented the designs using HTML5, CSS3, JavaScript/JQuery, XSLT, and Java on the NetBeans IDE.", "", ""];
	vinklImages = ['/images/vinkl-home.jpg','/images/vinkl-posts.jpg','/images/vinkl-portfolio.jpg'];
	
	mosquitoDescriptions = ["<b>Mosquito Catcher</b> &#124; Java, Eclipse<br/><br/>Given a 100x100 board with randomly placed mosquitoes, our job was to collect as many mosquitoes as possible into a stationary collector using moving and non-moving lights to attract the mosquitoes.  The mosquitoes moved randomly except when within 20 spaces from a light, where the mosquitoes would move directly towards the light.  Depending on the configuration of the board, walls were placed that would create barriers between the mosquitoes, the collectors, and the lights.<br/><br/>My teammate and I created different strategies for the various configuration. The lights either moved according to hardcoded values, the A* algorithm, or a combination of these two strategies."];
	mosquitoImages = ['/images/mosquitos.jpg'];
	
	redblueDescriptions = ["<a class='button' href='http://redandblue.thedp.com/' target='_blank'>Go to site</a><br/><br/><b>The Red and The Blue</b> &#124; Wordpress, HTML, CSS<br/><br/>I designed and created logo, branding, and layout using Illustrator for The Daily Pennsylvanian's political blog, The Red and The Blue, in preparation for Fall 2012 launch. I implemented designs locally using XAMPP and WordPress using HTML and CSS."];
	redblueImages = ['/images/red-blue-blog.jpg'];
	
	sudokuDescriptions = ["<b>Sudoku Solver</b> &#124; Python, IDLE<br/><br/>Implemented two different types of solvers for the Sudoku problem: uninformed graph-based search and simulated annealing. For graph based search, a given state is just a partially filled in solution to the initial Sudoku board. More specifically, the graph-based searches included uninformed/informed depth-first and breadth-first search."];
	sudokuImages = ['/images/sudoku.png'];
		
	var hamburgefonsDescription ="<a class='button' href='http://www.lilianamatos.com/indproj/' target='_blank'>Go to site</a><br/><br/><b>Hamburgefons</b> &#124; Photoshop, HTML, CSS, JavaScript<br/><br/>For this independent project, I chose to explore the intricacies that make a type 'good'. The commonplace of typography has spawned a movement that rejects the fundamentals that were meticulously followed not too long ago. Still, I believe the absence of order is not synonymous for the presence of art and vice versa. Typography is art in its own right.";
	hamburgefonsImages = ['/images/hamburgefons.png'];
	hamburgefonsDescriptions =[hamburgefonsDescription];
	
	cloudsDescriptions = ["<b>Volumetric Renderer</b> &#124; C++, Visual Basic 2010<br/><br/>I implemented a volumetric renderer using a voxel buffer as the primary data structure and performed a ray march using Beer's Law to render the pixels onto the scene. <br/><br/>The renderer takes a configuration file and, using Perlin noise and fractal Brownian motion, renders three primatives: spheres, 'clouds' i.e. spheres with noise, and pyroclastics e.g. volcanic eruptions, explosions, etc.", "", ""];
	cloudsImages = ['/images/clouds-cloud.png', '/images/clouds-sphere.png', '/images/clouds-pyro.png'];
	
	raytracerDescriptions = ["<b>Ray Tracer</b> &#124; C++, Visual Studio, QT, OpenGL<br/><br/>Here, I implemented a full, recursive raytracer to handle more realistic rendering of a 3D room using the Blinn-Phong light model. The Ray Tracer takes a configuration file and renders the specified objects with their respective properties and materials (reflection, shading, lighting).", "", ""];
	raytracerImages = ['/images/ray-tracer-reg.png', '/images/ray-tracer-mirror.png', '/images/ray-tracer-scale.png'];
}

function addDisappear() {
	var i;
	for (i=1; i<10; i++) {
		$('#portfolio-square'+i).addClass('disappear');
	}
}

function removeDisappear() {
	var i;
	for (i=1; i<10; i++) {
		$('#portfolio-square'+i).removeClass('disappear');
	}
}

function openGallery(galleryPos){
	if (currPicSet=="art") {
		if (galleryPos=="topleft") {
			$.prettyPhoto.open(dancerImages,"",dancerDescriptions);
		} else if (galleryPos =="topcen") {
			$.prettyPhoto.open(tsoImages,"",tsoDescriptions);
		} else if (galleryPos =="topright") {
			$.prettyPhoto.open(bondaImages,"",bondaDescriptions);
		} else if (galleryPos =="cenleft") {
			$.prettyPhoto.open(sansomImages,"",sansomDescriptions);
		} else if (galleryPos =="cencen") {
			$.prettyPhoto.open(heydayImages,"",heydayDescriptions);
		} else if (galleryPos =="cenright") {
			$.prettyPhoto.open(umamiImages,"",umamiDescriptions);
		} else if (galleryPos =="botleft") {
			$.prettyPhoto.open(embeddedImages,"",embeddedDescriptions);
		} else if (galleryPos =="botcen") {
			$.prettyPhoto.open(swissImages,"",swissDescriptions);
		} else if (galleryPos =="botright") {
			$.prettyPhoto.open(grotesqueImages,"",grotesqueDescriptions);
		}
	} else if (currPicSet=="code") {
		if (galleryPos == "topleft") {
			$.prettyPhoto.open(ecraftingImages,"",ecraftingDescriptions);
		} else if (galleryPos =="topcen") {
			$.prettyPhoto.open(vinklImages,"",vinklDescriptions);
		} else if (galleryPos =="topright") {
			$.prettyPhoto.open(mosquitoImages,"",mosquitoDescriptions);
		} else if (galleryPos =="cenleft") {
			$.prettyPhoto.open(redblueImages,"",redblueDescriptions);
		} else if (galleryPos =="cencen") {
			$.prettyPhoto.open(sudokuImages,"",sudokuDescriptions);
		} else if (galleryPos =="cenright") {
			$.prettyPhoto.open(hamburgefonsImages,"",hamburgefonsDescriptions);
		} else if (galleryPos =="botleft") {
			$.prettyPhoto.open(cloudsImages,"",cloudsDescriptions);
		} else if (galleryPos =="botcen") {
			$.prettyPhoto.open(raytracerImages,"",raytracerDescriptions);
		} else if (galleryPos =="botright") {
		}
	}
}

function showPic(element) {
	if (activateButtons) {
		$(element).slideUp(200);
	}
}

function hidePic(element) {
	if (activateButtons) {
		$(element).slideDown(200);
	}
	
}

function showPicSet(pictureSet) {
	var i;
	for (i=1; i<10; i++) {
		$("#"+pictureSet+"-thumb"+i).show();
	}
}

function hidePicSet(pictureSet) {
	for (i=1; i<10; i++) {
		$( "#"+pictureSet+"-thumb"+i).hide();
	}
}

function hidePicLabels(pictureSet) {
	for (i=1; i<10; i++) {
		$( "#"+pictureSet+"-label"+i).hide();
	}
	
}

function showPicLabels(pictureSet) {
	for (i=1; i<10; i++) {
		$( "#"+pictureSet+"-label"+i).show();
	}
}

function switchPicSet(pictureSet) {
	if( pictureSet != currPicSet) {
		hidePicLabels(currPicSet);
		hidePicSet(currPicSet);
		showPicLabels(pictureSet);
		showPicSet(pictureSet);
		
		$('#'+pictureSet+"-link").removeClass('fade');
		$('#'+pictureSet+"-link").addClass(currPage+'-color');
		
		$('#'+currPicSet+"-link").removeClass(currPage+'-color');
		$('#'+currPicSet+"-link").addClass('fade');
		
		currPicSet = pictureSet;
	}
}

function transitionPage(page) {
	if (currPage != page && activateButtons) {
		changeNavColor(page);
		activateButtons = false;
		if (currPage=='home') {
			hideHome();
		} else if (currPage=='portfolio') {
			hidePortfolio();
		} else if (currPage=='about') {
			hideAbout();
		} else if (currPage=='contact') {
			hideContact();
		}
		
		if (page=='home') {
			showGrid();
			showHome();
			animateHome();
		} else if (page=='portfolio') {
			showPortfolio();
			animatePortfolio();
		} else if (page=='about') {
			showAbout();
			animateAbout();
		} else if (page=='contact') {
			showContact();
			animateContact();
		}
	}
}

function changeNavColor(page) {
	$( "#"+currPage+"-active-img" ).hide();
	$( "#"+currPage+"-img" ).show();
	$('#'+currPage+"-label").removeClass(currPage+'-color');
	$('#'+currPage+"-label").addClass('sidelink');
	$('#icon-'+currPage).addClass("fade");
	
	$( "#"+page+"-active-img" ).show();
	$( "#"+page+"-img" ).hide();
	$('#'+page+"-label").removeClass('sidelink');
	$('#'+page+"-label").addClass(page+'-color');
	$('#icon-'+page).removeClass("fade");
}

function fadeInNav(page) {
	
		$("#icon-"+page).animate({opacity: 1.0}, 100);
	
}

function fadeOutNav(page) {
	
		$("#icon-"+page).animate({opacity: 0.5}, 100);
	
}

function showGrid() {
	var i;
	for (i=1; i<82; i++) {
		$( "#pixel-"+i ).css('background', '#dddddd');
		$( "#pixel-"+i ).show();
	}
}

function animateHome() {
	
	$( "#pixel-71" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-67" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-68" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-69" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-57" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-64" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-65" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-66" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-73" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-35" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-36" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-43" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-44" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-45" ).delay(800).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-52" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-53" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-31" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-32" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-33" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-40" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-41" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-42" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-49" ).delay(800).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-50" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-51" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-28" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-29" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-30" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-37" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-38" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-39" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-46" ).delay(800).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-47" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-48" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-7" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-8" ).delay(800).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-9" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-16" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-17" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750, function(){ activateButtons = true; });
	$( "#pixel-18" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-25" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-26" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-27" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-4" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-5" ).delay(800).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-6" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-13" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-14" ).delay(1000).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-15" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-22" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-23" ).delay(900).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-24" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	
	$( "#pixel-2" ).delay(500).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-3" ).delay(700).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-10" ).delay(400).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-12" ).delay(200).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-19" ).delay(600).animate({backgroundColor: "#B30A58"}, 750);
	$( "#pixel-20" ).delay(300).animate({backgroundColor: "#B30A58"}, 750);
	
	currPage = 'home';
}

function animatePortfolio() {
	var i;
	for (i=1; i< 10; i++) {
		if (i != 9) {
			$('#portfolio-square'+i).delay(300+(i*100)).fadeIn(700);
		} else {
			$('#portfolio-square'+i).delay(300+(i*100)).fadeIn(700, function() {
				activateButtons = true; 
				showPicSet(currPicSet); 
				addDisappear();
			});
		}
		$('#portfolio-square'+i).animate({ height: "60px" }, 800 );
	}
	/*for (i=1; i<10; i++) {
		$('#portfolio-square'+i).delay(300+(i*100)).animate({ height: "80px" }, 100 )
	}*/
	
	currPage = 'portfolio';
}

function animateAbout() {
	$('#about-rect1').delay(300).slideDown(400);
	$('#about-text2').delay(300).slideDown(400);
	$('#about-text1').delay(300).slideDown(400);
	$('#about-rect3').delay(700).slideDown(400);
	$('#about-rect2').delay(700).slideDown(400, function() {
		activateButtons = true;
	});
	
	currPage = 'about';
}

function animateContact() {
	$('#contact-bar1').delay(300).fadeIn(400, function() {
			$('#contact-bar2').fadeIn(400);
			$('#contact-text3').fadeIn(400);
			$('#contact-text4').fadeIn(400, function() {
				$('#contact-bar3').fadeIn(400, function() {
					activateButtons = true; 
				});
			});
			
	});
	$('#contact-text1').delay(300).fadeIn(700);
	$('#contact-text2').delay(300).fadeIn(700);
	currPage = 'contact'
	
}

function showHome() {
	$('#home-title').fadeIn(1000);
	$('#home-side-text').fadeIn(1000);
}

function showPortfolio() {
	$('#portfolio-title').fadeIn(1000);
	$('#portfolio-side-text').fadeIn(1000);
}

function showAbout() {
	$('#about-title').fadeIn(1000);
	$('#about-side-text').fadeIn(1000);
}

function showContact() {
	$('#contact-title').fadeIn(1000);
	$('#contact-side-text').fadeIn(1000);
}

function hideHome() {
	var i;
	for (i=1; i<82; i++) {
		$('#pixel-'+i).fadeOut(200);
	}
	$('#home-title').fadeOut(100);
	$('#home-side-text').fadeOut(100);
}

function hidePortfolio() {
	var i;
	for (i=1; i<10; i++) {
		$('#portfolio-square'+i).fadeOut(200);
		$('#portfolio-square'+i).animate({ height: "130px" }, 200 );
	}
	$('#portfolio-title').fadeOut(100);
	$('#portfolio-side-text').fadeOut(100);
	hidePicSet(currPicSet);
	removeDisappear();
}

function hideAbout() {
	$('#about-rect1').fadeOut(200);
	$('#about-rect2').fadeOut(200);
	$('#about-rect3').fadeOut(200);
	$('#about-title').fadeOut(100);
	$('#about-side-text').fadeOut(100);
	$('#about-text1').fadeOut(100);
	$('#about-text2').fadeOut(100);
}

function hideContact() {
		
	$('#contact-bar1').fadeOut(200);
	$('#contact-bar2').fadeOut(200);
	$('#contact-bar3').fadeOut(200);
	
	$('#contact-text1').fadeOut(200);
	$('#contact-text2').fadeOut(200);
	$('#contact-text3').fadeOut(200);
	$('#contact-text4').fadeOut(200);

	$('#contact-title').fadeOut(100);
	$('#contact-side-text').fadeOut(100);
}