document.getElementById("header").innerHTML = `
<header>
<a href="#" class="logo-content" id="logo-div">
            <img src="../Assets/discoveryLogo.jpg" alt="logo" class="img-tag">
        </a>
        
 <ul class="nav-items" id ="nav-items" >
            <li class="nav-link">
                <a href="#">About DLC</a>
            </li>
            <li class="nav-link">
                <a href="#">Our Worlds</a>
            </li>
            <li class="nav-link">
                <a href="#">Experiences</a>
            </li>
            <li class="nav-link">
                <a href="#">Gallery</a>
            </li>
            <li class="nav-link">
                <a href="#">Press</a>
            </li>
        </ul>

    <div class="dropdown">
    <a href="javascript:void(0);" onclick="myFunction()" class="drpdwn-btn"><i class="fa fa-bars"></i>
        </a>
    </div>
</header>

        <div id="menu" class="menu-content">
        <div class = "logo-btn">
                   <a href="#" class="logo-content">
            <img src="../Assets/discoveryLogo.jpg" alt="logo">
            </a>
            <div class="dropdown">
        <a href="javascript:void(0);" onclick="myFunction()" class="drpdwn-btn"><i class="fa fa-bars"></i>
        </a>
         </div>
         </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/magazine.html">Magazine</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/company.html">Company</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/foundation.html">Foundation</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/careers.html">Careers</a>
                    </div>
                    <div class="a-div">
                        <a class="drpdwn-a" href="../pages/contact.html">Contact</a>
                    </div>
                </div>`;