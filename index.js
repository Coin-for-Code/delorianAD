window.addEventListener("scroll", function() {
    var floatingElement1 = document.getElementById("transformId1");
    var floatingElement2 = document.getElementById("transformId2");
    var targetElement1 = document.getElementById("about_text");

    var floatingElement3 = document.getElementById("transformId3");
    var floatingElement4 = document.getElementById("transformId4");
    var targetElement2 = document.getElementById("open_id_2");

    var floatingElement5 = document.getElementById("transformId5");
    var floatingElement6 = document.getElementById("transformId6");
    var targetElement3 = document.getElementById("open_id_3");

    var floatingElement7 = document.getElementById("transformId7");
    var floatingElement8 = document.getElementById("transformId8");
    var targetElement4 = document.getElementById("open_id_4");

    var floatingElement9 = document.getElementById("transformId9");
    var floatingElement10 = document.getElementById("transformId10");
    var targetElement5 = document.getElementById("open_id_5");

    var floatingElement11 = document.getElementById("transformId11");
    var floatingElement12 = document.getElementById("transformId12");
    var targetElement6 = document.getElementById("open_id_6");
    
    //----------------------------------------------------------------------------------------------------------------------------------
    function aboba(targetElements, floatingElementOne, floatingElementTwo){

    function abiba(targetElement){
    var windowHeight = window.innerHeight;
    var elementPosition = targetElement.getBoundingClientRect().top;
    return elementOffset = elementPosition - windowHeight / 2;
    }
    
    if (abiba(targetElements) <= 0) {
      floatingElementOne.style.transform = "translateX(0%)";
      floatingElementTwo.style.transform = "translateX(0%)"; // Изменить положение элемента при прокрутке
    } else {
      floatingElementOne.style.transform = "translateX(-500%)"; // Скрыть элемент, если прокрутка не достигла определенной точки
      floatingElementTwo.style.transform = "translateX(500%)"; // Скрыть элемент, если прокрутка не достигла определенной точки
    }
    }
    //----------------------------------------------------------------------------------------------------------------------------------

    aboba(targetElement1, floatingElement1, floatingElement2)
    aboba(targetElement2, floatingElement3, floatingElement4)
    aboba(targetElement3, floatingElement5,floatingElement6)
    aboba(targetElement4, floatingElement7, floatingElement8)
    aboba(targetElement5, floatingElement9, floatingElement10)
    aboba(targetElement6, floatingElement11, floatingElement12)
    
  })
