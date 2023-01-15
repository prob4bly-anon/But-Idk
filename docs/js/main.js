            function openTab(event, tabId) {
             var tabContent = document.getElementsByClassName("tabcontent");
             for (var i = 0; i < tabContent.length; i++) {
               tabContent[i].style.display = "none";
             }
             var tabLinks = document.getElementsByClassName("tablinks");
             for (var i = 0; i < tabLinks.length; i++) {
               tabLinks[i].className = tabLinks[i].className.replace(" active", "");
             }
             document.getElementById(tabId).style.display = "block";
             event.currentTarget.className += " active";
            }
            document.getElementById("about-me").style.display = "block";
            document.getElementById("about-me").className += " active";
            document.getElementsByClassName("tablinks")[0].className += " active";
