var mainsvg = d3.select("body").append("svg").attr("width", 1400 ).attr("height",600);

mainsvg.append("rect")
       .attr("width", 1000)
       .attr("height",550)
       .attr("rx", 5)
       .attr("ry", 5)
       .attr("x", 150)
       .attr("y", 29)
       .attr("stroke", "gray")
       .attr("stroke-width", "2")
       .attr("opacity","0.2")
       .attr("fill", "#fad9d9")


mainsvg.append("rect")
       .attr("width", 250)
       .attr("height",500)
       .attr("rx", 15)
       .attr("ry", 15)
       .attr("x", 90)
       .attr("y", 50)
//        .attr("opacity","0.5")
       .attr("fill", "#b5d0f7")
// photo
  var image_path = "./data/photo.jpg"
  var myimage = mainsvg.append('image')
    .attr('xlink:href', image_path)
    .attr("transform","translate("+ (180) + ", "+ (170) +")")
    .attr('width', 80)
    .attr('height', 80)

mainsvg.append("text")
        .attr("x", 170)
        .attr("y", 300)
        .attr("font-size", "20px")
        .attr("fill", "white")
        .text("Fumin He");

mainsvg.append("text")
        .attr("x", 110)
        .attr("y", 320)
        .attr("font-size", "14px")
        .attr("fill", "white")
        .text("Data Analyst & Visual Storyteller");

mainsvg.append("text")
        .attr("x", 150)
        .attr("y", 340)
        .attr("font-size", "10px")
        .attr("fill", "white")
        .text("Master of computer science");

mainsvg.append("text")
        .attr("x", 155)
        .attr("y", 353)
        .attr("font-size", "10px")
        .attr("fill", "white")
        .text("Arizona State University");   

//.attr("xlink:href", "http://en.wikipedia.org/wiki/"+word)
mainsvg.append("a")
        .attr("xlink:href", "https://github.com/FuminHe")
        .append("text")
        .attr("x", 150)
        .attr("y", 400)
        .attr("font-size", "15px")
        .attr("fill", "white")
        .text("GitHub");
mainsvg.append("a")
        .attr("xlink:href", "https://linkedin.com/in/fumin-he-5850a0171")
        .append("text")
        .attr("x", 220)
        .attr("y", 400)
        .attr("font-size", "15px")
        .attr("fill", "white")
        .text("LinkedIn");
draw_skills();

mainsvg.append("rect")
        .attr("class","eduRect")
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("x", 470)
        .attr("y", 60)
        .attr("width", 170)
        .attr("height",70)
        .attr("fill", "#b5d0f7")
        .on("mouseover", function(){
            d3.select("body").select(".eduRect").style("fill", "#88b6f7");
        })
	   .on("mouseout", function(){
            d3.select("body").select(".eduRect").style("fill", "#b5d0f7");
        })
	   .on("click",function(){
	       mainsvg.selectAll(".skill").remove();
	       mainsvg.selectAll(".projects").remove();
	       draw_edu();
	   });
mainsvg.append("text")
        .attr("x", 500)
        .attr("y", 100)
        .attr("font-size", "20px")
        .style("font-weight", "700")
        .attr("fill", "black")
        .text("EDUCATION");
function draw_edu(){
    mainsvg.append("line").attr("class","edu_page")
            .style("stroke", "gray")
            .attr("stroke-width", "2")
            .attr("x1", 500) 
            .attr("y1", 340)      
            .attr("x2", 1000)     
            .attr("y2", 340);
    mainsvg.append("line").attr("class","edu_page")
            .style("stroke", "gray")
            .attr("stroke-width", "2")
            .attr("x1", 560) 
            .attr("y1", 300)      
            .attr("x2", 560)     
            .attr("y2", 340);
    mainsvg.append("line").attr("class","edu_page")
            .style("stroke", "gray")
            .attr("stroke-width", "2")
            .attr("x1", 930) 
            .attr("y1", 340)      
            .attr("x2", 930)     
            .attr("y2", 380);
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 500)
            .attr("y", 360)
            .style("font-family", "sans-serif")
            .attr("font-size", "13px")
            .attr("fill", "black")
            .text("Sep. 2013 - July. 2017");//Sep. 2013 - July. 2017
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 850)
            .attr("y", 325)
            .style("font-family", "sans-serif")
            .attr("font-size", "13px")
            .attr("fill", "black")
            .text("Aug. 2018 - Expected May. 2020");
    
    // SWUFE
    mainsvg.append("rect").attr("class","edu_page")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("x", 420)
            .attr("y", 200)
            .attr("width", 300)
            .attr("height",100)
            .attr("fill", "gray")
            .attr("opacity",0.2);
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 445)
            .attr("y", 240)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .style("font-weight", "700")
            .text("B.S. in Computer Science and Technology");//Southwestern University of Finance and Economics
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 425)
            .attr("y", 260)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("Southwestern University of Finance and Economics");
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 530)
            .attr("y", 280)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("3.5/5 GPA");
    // ASU
    mainsvg.append("rect").attr("class","edu_page")
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("x", 780)
            .attr("y", 380)
            .attr("width", 300)
            .attr("height",100)
            .attr("fill", "gray")
            .attr("opacity",0.2);
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 845)
            .attr("y", 410)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .style("font-weight", "700")
            .text("Master of Computer Science ");//Southwestern University of Finance and Economics
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 860)
            .attr("y", 430)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("Arizona State University");
    mainsvg.append("text").attr("class","edu_page")
            .attr("x", 890)
            .attr("y", 450)
            .style("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("3.58/4 GPA");
}


mainsvg.append("rect").attr("class","proRect")
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("x", 785)
        .attr("y", 60)
        .attr("width", 250)
        .attr("height",70)
        .attr("fill", "#b5d0f7")
        .on("mouseover", function(){
            d3.select("body").select(".proRect").style("fill", "#88b6f7");
        })
	   .on("mouseout", function(){
            d3.select("body").select(".proRect").style("fill", "#b5d0f7");
        })
	   .on("click",function(){
	       mainsvg.selectAll(".skill").remove();
	       mainsvg.selectAll(".edu_page").remove();
	       draw_pro();
	   });
mainsvg.append("text")
        .attr("x", 800)
        .attr("y", 100)
        .attr("font-size", "20px")
        .style("font-weight", "700")
        .attr("fill", "black")
        .text("ACADEMIC PROJECTS");
function draw_pro(){
    var tooltip = d3.select("body").append("div")
	                .style("position", "absolute")
	                .style("z-index", "10")
	                .style("visibility", "hidden")
	                .style("background-color","black")
	                .style("opacity","0.8")
                    .style("padding", "10px")
                    .style("color", "white")
                    .style("font-size", "10px")
//                     .style("text-align", "center");

    // 2018 fall
    mainsvg.append("circle").attr("class","projects")
            .attr("transform", "translate(550" + ", 300" + ")")
            .attr("fill","gray")
            .attr("opacity",0.2)
            .attr("r",100)
            .on("mouseover", function(){
                tooltip.html("Artificial Intelligence: The Pac-Man Projects" + "<br/>"
                + "<ul>" + "<li>" + "Used Depth First search , Breadth First search, Uniform Cost Search" +"<br/>" 
                                  + "and A* search algorithm to formulating a plan for Pacman to find a fixed food dot." + "</li>"
                         + "<li>" + "Written a reflex agent, a minimax agent, an agent that use alpha-beta" + "<br/>"
                                  + "pruning and an Expectimax agent to win the Pac-Man game." + "</li>" 
                         + "<li>" + "Written a value iteration agent, a Q-learning agent and an approximate Q-learning agent" + "<br/>"
                                  + "to win the Pac-Man game. And complete my Q-learning agent by implementing epsilon-greedy." + "</li>" 
                         + "<li>" + "Written Ghostbusters using exact inference and approximate Inference." + "</li>"
                         + "<li>" + "Collaborated in a team of two to implement the policy gradient method with approximate" + "<br/>"
                                  + "Q-learning preferences with exponential softmax policies in Richard S. Sutton and Andrew G. Barto’s book." + "</li>"
                + "</ul>"
                + "Principles of Programming Language" + "<br/>"
                + "<ul>" + "<li>" + "Used C++ to write a program for lexical analysis." + "</li>"
                         + "<li>" + "Written a program to eliminate useless symbols, calculate FIRST and FOLLOW" + "<br/>"
                                  + "sets and determine the predictive parser." + "</li>" 
                         + "<li>" + "Written a predictive parser and a type checker for a small language." +  "</li>" 
                         + "<li>" + "Written a small compiler that will read an input program and represent it in an internal data structure." + "<br/>"
                                  + "The data structure consists of two parts:" + "<br/>"
                                  + "(1) a representation of instructions to be executed and " + "<br/>"
                                  + "(2) a representation of the memory of the program (locations for variables)." + "</li>"
                + "</ul>")
                .style("visibility", "visible");})
	        .on("mousemove", function(d){return tooltip.style("top", (event.pageY-80)+"px").style("left",(event.pageX+10)+"px");})
	        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
    
    mainsvg.append("text").attr("class","projects")
            .attr("transform", "translate(520" + ", 305" + ")")
            .style("font-family", "sans-serif")
            .text("Fall 2018")


    // 2019 spring
    mainsvg.append("circle").attr("class","projects")
            .attr("transform", "translate(690" + ", 300" + ")")
            .attr("fill","gray")
            .attr("opacity",0.2)
            .attr("r",50)
            .on("mouseover", function(){
                tooltip.html("Data Mining & Machine Learning" + "<br/>"
                + "<ul>" + "<li>" + "Implementation of Data Cleaning and Dataset creation, Spectral Clustering, " +"<br/>" 
                                  + "Linear Regression, Decision Tree Classification, Naïve-Bayes Classification and SVM." + "</li>"
                         + "<li>" + "Implementation of Gaussian Logistic Regression, KNN and k-means clustering." + "</li>"
                + "</ul>")
                .style("visibility", "visible");})
	        .on("mousemove", function(d){return tooltip.style("top", (event.pageY-80)+"px").style("left",(event.pageX+10)+"px");})
	        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

    mainsvg.append("text").attr("class","projects")
            .attr("transform", "translate(645" + ", 305" + ")")
            .style("font-family", "sans-serif")
            .text("Spring 2019");
    // 2019 fall
    mainsvg.append("circle").attr("class","projects")
            .attr("transform", "translate(880" + ", 300" + ")")
            .attr("fill","gray")
            .attr("opacity",0.2)
            .attr("r",150)
            .on("mouseover", function(){
                tooltip.html("Mobile Computing" + "<br/>"
                + "<ul>" + "<li>" + "Objective Detection" + "</li>"
                + "</ul>"
                + "Patter Recognization" +"<br/>"
                + "<ul>" + "<li>" + "Entropy Minimization" + "</li>"
                         + "<li>" + "CutMix" + "</li>"
                + "</ul>"
                +  "Data Visualization"
                + "<ul>" + "<li>" + "Linking, map, charts" + "</li>"
                         + "<li>" + "Visualization for targeted poisoning attack" + "</li>"
                + "</ul>")
                .style("visibility", "visible");})
	        .on("mousemove", function(d){return tooltip.style("top", (event.pageY-80)+"px").style("left",(event.pageX+10)+"px");})
	        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
    mainsvg.append("text").attr("class","projects")
            .attr("transform", "translate(850" + ", 305" + ")")
            .style("font-family", "sans-serif")
            .text("Fall 2019");
}



function draw_skills(){
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 420)
            .attr("y", 230)
            .attr("font-size", "15px")
            .style("font-weight", "700")
            .attr("fill", "black")
            .text("Technique Skills: ");//.append("circle")
    mainsvg.append("circle").attr("class","skill")        
            .attr("transform", "translate(490" + ", 260" + ")")
            .attr("r", 5)
            .attr("fill", "black");
    mainsvg.append("circle").attr("class","skill")        
            .attr("transform", "translate(490" + ", 290" + ")")
            .attr("r", 5)
            .attr("fill", "black");
    mainsvg.append("circle").attr("class","skill")        
            .attr("transform", "translate(490" + ", 320" + ")")
            .attr("r", 5)
            .attr("fill", "black");

    // Design and Applications
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 500)
            .attr("y", 265)
            .attr("font-size", "12px")
            .style("font-weight", "700")
            .attr("fill", "black")
            .text("Design and Applications: ");    
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 660)
            .attr("y", 265)
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("MATLAB, PyCharm, Visual Studio Code, Eclipse"); 

    // Programming
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 500)
            .attr("y", 295)
            .attr("font-size", "12px")
            .style("font-weight", "700")
            .attr("fill", "black")
            .text("Programming: "); 
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 595)
            .attr("y", 295)
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("Python, C++, D3, HTML, JS/CSS "); 
                
    // Other
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 500)
            .attr("y", 325)
            .attr("font-size", "12px")
            .style("font-weight", "700")
            .attr("fill", "black")
            .text("Other: "); 
    mainsvg.append("text").attr("class","skill")        
            .attr("x", 545)
            .attr("y", 325)
            .attr("font-size", "12px")
            .attr("fill", "black")
            .text("Microsoft Excel, PowerPoint, Word"); 
}
