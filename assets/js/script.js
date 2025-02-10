let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((item) => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        document.querySelector('nav ul li a.active').classList.remove('active');
        item.classList.add('active');
        document.querySelector('main > section.active').classList.remove('active');
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
        console.log(`main > section${item.getAttribute('href')}`);

        // Update the URL hash without jumping
        history.pushState(null, null, item.getAttribute('href'));
    });
});

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open');
});

// Function to handle hash change
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    if (hash) {
        const targetSection = document.getElementById(hash);
        if (targetSection) {
            document.querySelector('main > section.active').classList.remove('active');
            targetSection.classList.add('active');
            document.querySelector('nav ul li a.active').classList.remove('active');
            document.querySelector(`nav ul li a[href="#${hash}"]`).classList.add('active');
        }
    }
}

// Listen for hash change events
window.addEventListener('hashchange', handleHashChange);

// Call handleHashChange on page load to handle the initial hash
window.addEventListener('load', handleHashChange);

var options = {
    strings: ['Doing what I love'],
    loop: true,
    typeSpeed: 30,
    backSpeed: 20
  };
  
new Typed('.field h2', options);

for(let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.classList = 'meteor'
    document.querySelector('#home .meteor-shower').append(meteor);
}


const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {
    itemSelector: '.item'
});

const filterButtons = document.querySelectorAll('#my_work .filters button')

filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
})


function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");

    shuffleInstance.filter(clickedButtonGroup);
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'));
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener('click', function () {
        const videos = JSON.parse(item.getAttribute('data-video'));
        const images = JSON.parse(item.getAttribute('data-image'));
        const mediaContainer = document.getElementById('mediaContainer');

        mediaContainer.innerHTML = '';

        videos.forEach((video) => {
            const iframeElement = document.createElement('iframe');
            iframeElement.src = video;
            iframeElement.style.width = '100%';
            iframeElement.style.height = "480px";
            iframeElement.frameBorder = '0';
            iframeElement.allowFullscreen = true;
            iframeElement.classList.add('mb-3');
            mediaContainer.appendChild(iframeElement);
        });

        images.forEach((image) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.classList.add('d-block', 'w-100', 'mb-3');
            imgElement.style.height = 'auto';
            mediaContainer.appendChild(imgElement);
        });

        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title');
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description');
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client');
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed');
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills');
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'));
        const projectLinkElement = document.querySelector('#workModal .modal-body .project-link a');
        projectLinkElement.setAttribute('href', item.getAttribute('data-project-link'));
        projectLinkElement.setAttribute('target', '_blank');
      
        workModal.show();
    });
});

var workModalElement = document.getElementById('workModal');
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
});

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
    document.getElementById('mediaContainer').innerHTML = '';
});

let contactFromItems = document.querySelectorAll('#contact_me .form input, #contact_me .form textarea');

contactFromItems.forEach((item) => {
    item.addEventListener('focus', function () {
        item.parentElement.classList.add('focus')
    })

    item.addEventListener('blur', function () {
        if (!item.value) {
            item.parentElement.classList.remove('focus')
        }
    })
})

function toggleMode() {
    let theme = document.querySelector('html').getAttribute('theme');

    if(theme == "dark") {
        theme = "light";
        // new Audio('./assets/audio/light.wav').play()
    } else {
        theme = "dark";
        // new Audio('./assets/audio/dark.wav').play()
    }

    document.querySelector('html').setAttribute("theme", theme)
}