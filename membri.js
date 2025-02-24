

function activatesez5(){

    const sezon5 = document.querySelector('#sezonul5');
    const sezon4 = document.querySelector('#sezonul4');
    const sezoane = document.querySelector('#sezoane');

    if(sezon5.classList.contains('hidden')) {
        sezon5.classList.remove('hidden');
        sezon5.classList.add('visible');
        sezon4.classList.remove('visible');
        sezon4.classList.add('hidden');

        sezoane.children[0].id = 'sezonactiv';
        sezoane.children[1].removeAttribute('id');
    }
}

function activatesez4(){

    const sezon5 = document.querySelector('#sezonul5');
    const sezon4 = document.querySelector('#sezonul4');
    const sezoane = document.querySelector('#sezoane');

    if(sezon4.classList.contains('hidden')) {
        sezon4.classList.remove('hidden');
        sezon4.classList.add('visible');
        sezon5.classList.remove('visible');
        sezon5.classList.add('hidden');

        sezoane.children[1].id = 'sezonactiv';
        sezoane.children[0].removeAttribute('id');

    }
}