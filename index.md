<html>
<head>
    <title>Bezoui Software</title>
    <link rel="stylesheet" type="text/css" href="index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>
<script>
window.addEventListener("onresize",console.log("resized"));
</script>
<body>
<header>
<h1 id="title">Bezoui Software</h1>
<div id="links">
<a href="#">Home</a>
<button onclick="ScrollTo('#other-projects','start');">Other projects</button>
<button onclick="ScrollTo('.skills','start');">Our skills</button>
<button onclick="ScrollTo('#about');">About</button>
</div>
<div id="show-navbar" onclick="autoDisplay('#links');">
<img src="images\arrow.png">
</div>
</header>
<div id="main">
    <div class="fullscreen-colored">
        <div id="texts">
            <h1 class="styled-title">Welcome</h1>  
        </div>
        <div id="imgs">
            <img src="images\developer.png">
        </div>
    </div>
    <div class="fullscreen-light" id="about">
        <div id="texts">
            <h2 class="sub-title">About us</h2>
            <p class="content">Hi, we are Bezoui Software we are a creative devloppers with a lot of coding skills, and so much more...</p>
        </div>
        <div id="imgs">
            <img src="images\developer2.png">
        </div>
    </div>
    <div class="skills">
        <div id="skills-title"><h1>My Skills</h1></div>
        <div class="skill"><div class="value" id="html-skill">HTML</div></div>
        <div class="skill"><div class="value" id="css-skill" class="value">CSS</div></div>
        <div class="skill"><div class="value" id="python-skill" class="value">PYTHON</div></div>
        <div class="skill"><div class="value" id="cpp-skill" class="value">C++</div></div>
        <div class="skill"><div class="value" id="js-skill" class="value">JavaScript</div></div>
        <div class="skill"><div class="value" id="java-skill" class="value">Java</div></div>
        <div class="skill"><div class="value" id="ds-skill" class="value">Data Structers</div></div>
        <div class="skill"><div class="value" id="alghoritms-skill" class="value">Alghoritms</div></div>
        <div class="skill"><div class="value" id="ps-skill" class="value">Problem solving</div></div>
        <div class="skill"><div class="value" id="comunication-skill" class="value">Comunication</div></div>
    </div>
    <div class="fullscreen-light" id="other-projects">
        <div id="texts">
            <h2 class="sub-title">Other projects</h2>
            <div class="content">
                <ul>
                    <li>Programmation language (HERO)</li>
                    <li>Games</li>
                    <li>A.I.</li>
                </ul>
            </div>
        </div>
        <div id="imgs">
            <img src="images\developer3.png">
        </div>
    </div>
</div>

<footer>
<h1>Website powred by Bezoui Software</h1>
</footer>
<footer>
<h1>Devlopped and created by Walid Bezoui</h1>
</footer>
<footer>
<h1>&copy Bezoui Software - 2020</h1>
</footer>
</body>
<script src="main.js"></script>
<script src="scrollingControl.js"></script>
</html>
