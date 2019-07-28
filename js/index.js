function clickbutton(){
    var btn = document.getElementsByClassName('menu-button')[0]
}

(function(){
    'use strict';
  
    class Menu {
      constructor(settings) {
        this.nodeMenu = settings.nodeMenu;
        settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
      }
  
      toggle() {
        return this.nodeMenu.classList.toggle('js-menu_activated');
      }
    }
  
    let nodeMenu = document.querySelector('body');
    
    new Menu({
      nodeMenu: nodeMenu,
      nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
    });
})();

function char1(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char1_face.jpg";
  }
}

function char2(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char2_face.jpg";
  }

  alert("출시되지 않은 캐릭터입니다.");
}

function char3(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char3_face.jpg";
  }

  alert("출시되지 않은 캐릭터입니다.");
}