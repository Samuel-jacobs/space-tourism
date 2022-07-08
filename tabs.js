function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
}

function changeImage() {
  let tabImage1 = document.getElementById("tab-image1");
  let tabImage2 = document.getElementById("tab-image2");
  let tabImage3 = document.getElementById("tab-image3");
  let tabImage4 = document.getElementById("tab-image4");
  let tablink1 = document.getElementById("tablink1");
  let tablink2 = document.getElementById("tablink2");
  let tablink3 = document.getElementById("tablink3");
  let tablink4 = document.getElementById("tablink4");

  tablink1.addEventListener('click', function () {
    tabImage1.style.display = "block";
    tabImage2.style.display = "none";
    tabImage3.style.display = "none";
    tabImage4.style.display = "none";
    
  });
  tablink2.addEventListener('click', function () {
    tabImage1.style.display = "none";
    tabImage2.style.display = "block";
    tabImage3.style.display = "none";
    tabImage4.style.display = "none";
    
  });
  tablink3.addEventListener('click', function () {
    tabImage1.style.display = "none";
    tabImage2.style.display = "none";
    tabImage3.style.display = "block";
    tabImage4.style.display = "none";
    
  });
  tablink4.addEventListener('click', function () {
    tabImage1.style.display = "none";
    tabImage2.style.display = "none";
    tabImage3.style.display = "none";
    tabImage4.style.display = "block";
    
  });


}
changeImage();