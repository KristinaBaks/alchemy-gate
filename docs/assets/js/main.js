
var tarotReadingModal = document.querySelector('.tarot-reading');
var runeReadingModal = document.querySelector('.rune-reading');
var potionsModal = document.querySelector('.potions');
var hexesModal = document.querySelector('.hexes');
var palmReadingModal = document.querySelector('.palm-reading');
var horoscopesModal = document.querySelector('.horoscopes');
var ghostBustingModal = document.querySelector('.ghost-busting');
// ------------------------
var tarotReadingLink = document.querySelector('#tarot-reading');
var runeReadingLink = document.querySelector('#rune-reading');
var potionsLink = document.querySelector('#potions');
var hexesLink = document.querySelector('#hexes');
var palmReadingLink = document.querySelector('#palm-reading');
var horoscopesLink = document.querySelector('#horoscopes');
var ghostBustingLink = document.querySelector('#ghost-busting');

// ------------ FUNCTIONS ------------

tarotReadingLink.addEventListener('click', function(){

    if(tarotReadingModal.className = 'section tarot-reading fadeOut') {
        tarotReadingModal.classList.remove('fadeOut');
        tarotReadingModal.style.display = 'block';
    }

    tarotReadingModal.addEventListener('click', function(){

        tarotReadingModal.classList.add('fadeOut');
            
        setTimeout(function(){
            tarotReadingModal.style.display = 'none';
            }, 400); 
    });
});
runeReadingLink.addEventListener('click', function(){

    if(runeReadingModal.className = 'section rune-reading fadeOut') {
        runeReadingModal.classList.remove('fadeOut');
        runeReadingModal.style.display = 'block';
    }

    runeReadingModal.addEventListener('click', function(){

        runeReadingModal.classList.add('fadeOut');
            
        setTimeout(function(){
            runeReadingModal.style.display = 'none';
            }, 400); 
    });
});
potionsLink.addEventListener('click', function(){

    if(potionsModal.className = 'section potions fadeOut') {
        potionsModal.classList.remove('fadeOut');
        potionsModal.style.display = 'block';
    }
    potionsModal.addEventListener('click', function(){

        potionsModal.classList.add('fadeOut');
            
        setTimeout(function(){
            potionsModal.style.display = 'none';
            }, 400); 
    });
});
hexesLink.addEventListener('click', function(){
    if(hexesModal.className = 'section hexes fadeOut') {
        hexesModal.classList.remove('fadeOut');
        hexesModal.style.display = 'block';
    }

    hexesModal.addEventListener('click', function(){

        hexesModal.classList.add('fadeOut');
            
        setTimeout(function(){
            hexesModal.style.display = 'none';
            }, 400); 
    });
});
palmReadingLink.addEventListener('click', function(){
    
    if(palmReadingModal.className = 'section palm-reading fadeOut') {
        palmReadingModal.classList.remove('fadeOut');
        palmReadingModal.style.display = 'block';
    }

    palmReadingModal.addEventListener('click', function(){

        palmReadingModal.classList.add('fadeOut');
            
        setTimeout(function(){
            palmReadingModal.style.display = 'none';
            }, 400); 
    });
});
horoscopesLink.addEventListener('click', function(){
    
    if(horoscopesModal.className = 'section horoscopes fadeOut') {
        horoscopesModal.classList.remove('fadeOut');
        horoscopesModal.style.display = 'block';
    }

    horoscopesModal.addEventListener('click', function(){

        horoscopesModal.classList.add('fadeOut');
            
        setTimeout(function(){
            horoscopesModal.style.display = 'none';
            }, 400); 
    });
});
ghostBustingLink.addEventListener('click', function(){
    
    if(ghostBustingModal.className = 'section ghost-busting fadeOut') {
        ghostBustingModal.classList.remove('fadeOut');
        ghostBustingModal.style.display = 'block';
    }

    ghostBustingModal.addEventListener('click', function(){

        ghostBustingModal.classList.add('fadeOut');
            
        setTimeout(function(){
            ghostBustingModal.style.display = 'none';
            }, 400); 
    });
});
