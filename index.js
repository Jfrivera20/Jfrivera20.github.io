var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

// Resume Image
  var pdfImage = document.getElementById("pdf-image");
  var pdfViewer = document.getElementById("pdf-viewer");
  
  pdfImage.addEventListener("click", function() {
    pdfViewer.style.display = "block";
  });
  
  pdfViewer.addEventListener("click", function() {
    pdfViewer.style.display = "none";
  });

// Pagination for projects
var projectsContainer = document.getElementById("projects-container");
var paginationContainer = document.getElementById("pagination-container");

var perPage = 6;
var currentPage = 1;

function displayProjects() {
projectsContainer.innerHTML = "";
var startIndex = (currentPage - 1) * perPage;
var endIndex = startIndex + perPage;
var projects = [
    { name: "repo1", description: "Project 1 description goes here." },
    { name: "repo2", description: "Project 2 description goes here." },
    { name: "repo3", description: "Project 3 description goes here." },
    { name: "repo4", description: "Project 4 description goes here." },
    { name: "repo5", description: "Project 5 description goes here." },
    { name: "repo6", description: "Project 6 description goes here." },
    { name: "repo7", description: "Project 7 description goes here." },
    { name: "repo8", description: "Project 8 description goes here." },
    { name: "repo9", description: "Project 9 description goes here." }
];
var projectsToDisplay = projects.slice(startIndex, endIndex);
for (var i = 0; i < projectsToDisplay.length; i++) {
    var project = projectsToDisplay[i];
    var projectHtml = "<div class='project'>";
    projectHtml += "<h2>" + project.name + "</h2>";
    projectHtml += "<p>" + project.description + "</p>";
    projectHtml += "<div><script src='https://github.com/username/" + project.name + ".js'></script></div>";
    projectHtml += "</div>";
    projectsContainer.innerHTML += projectHtml;
}
}
function displayPagination() {
paginationContainer.innerHTML = "";
var projects = [
    { name: "repo1", description: "Project 1 description goes here." },
    { name: "repo2", description: "Project 2 description goes here." },
    { name: "repo3", description: "Project 3 description goes here." },
    { name: "repo4", description: "Project 4 description goes here." },
    { name: "repo5", description: "Project 5 description goes here." },
    { name: "repo6", description: "Project 6 description goes here." },
    { name: "repo7", description: "Project 7 description goes here." },
    { name: "repo8", description: "Project 8 description goes here." },
    { name: "repo9", description: "Project 9 description goes here." }
];
var totalPages = Math.ceil(projects.length / perPage);
for (var i = 1; i <= totalPages; i++) {
  var pageHtml = "<a href='#' class='page'";
  if (i === currentPage) {
    pageHtml += " class='active'";
  }
  pageHtml += ">" + i + "</a>";
  paginationContainer.innerHTML += pageHtml;
}
var pages = document.getElementsByClassName("page");
for (var i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", function() {
    currentPage = parseInt(this.innerHTML);
    displayProjects();
    displayPagination();
  });
}
}

displayProjects();
displayPagination();
  