function activeazaSezonul(sezonNum) {
    // Construim array-ul cu sezoanele în ordinea în care sunt afișate pe site:
    const sezoaneContinut = [
      document.querySelector('#sezonul5'),
      document.querySelector('#sezonul4'),
      document.querySelector('#sezonul3'),
      document.querySelector('#sezonul2'),
      document.querySelector('#sezonul1')
    ];
  
    // Obținem butoanele din containerul cu id-ul 'sezoane'
    const butoane = document.querySelector('#sezoane').children;
  
    // Calculăm indicele elementului de activat:
    // Dacă se dorește activarea sezonului 5, indicele va fi 0; pentru sezonul 4, indicele va fi 1, etc.
    const indexToActivate = 5 - sezonNum;
  
    // Parcurgem toate sezoanele pentru a actualiza vizibilitatea și stilul butoanelor
    sezoaneContinut.forEach((sezon, index) => {
      if (index === indexToActivate) {
        sezon.classList.remove('hidden');
        sezon.classList.add('visible');
        butoane[index].id = 'sezonactiv';
      } else {
        sezon.classList.remove('visible');
        sezon.classList.add('hidden');
        butoane[index].removeAttribute('id');
      }
    });
  }
  
  // Funcții individuale pentru fiecare buton
  function activatesez5() { activeazaSezonul(5); }
  function activatesez4() { activeazaSezonul(4); }
  function activatesez3() { activeazaSezonul(3); }
  function activatesez2() { activeazaSezonul(2); }
  function activatesez1() { activeazaSezonul(1); }
  