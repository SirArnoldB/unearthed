// header container
const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');

// header left 
const headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');

const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';

// header title
const headerTitlte = document.createElement('h1');
headerTitlte.innerText = 'UnEarthed';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitlte);

// header right
const headerRight = document.createElement('div');
headerRight.classList.add('header-right');

const headerRightButton = document.createElement('button');
headerRightButton.innerText = 'Home';

headerRightButton.addEventListener('click', () => {
    window.location = '/';
})

headerRight.appendChild(headerRightButton);

// append left and right to header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// append header container to header
header.appendChild(headerContainer);
