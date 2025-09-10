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

// 更酷的筛选动画：scale+opacity
var filterButtons = document.querySelectorAll('.filters button');
var workItems = document.querySelectorAll('.work-items .item');
filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        filterButtons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var group = btn.getAttribute('data-group');
        workItems.forEach(function(item) {
            var groups = item.getAttribute('data-groups');
            var show = (group === 'all') || (groups && groups.toLowerCase().includes(group.toLowerCase()));
            if (show) {
                item.classList.remove('hide');
                item.classList.add('show');
                item.style.display = '';
                setTimeout(function() {
                    item.classList.remove('show');
                }, 350);
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
                setTimeout(function() {
                    item.style.display = 'none';
                }, 350);
            }
        });
    });
});

var workModal = new bootstrap.Modal(document.getElementById('workModal'));
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener('click', function () {
        const videos = JSON.parse(item.getAttribute('data-video') || '[]');
        const images = JSON.parse(item.getAttribute('data-image') || '[]');
        const media = JSON.parse(item.getAttribute('data-media') || '[]');
        const mediaContainer = document.getElementById('mediaContainer');

        mediaContainer.innerHTML = '';

        // Function to determine media type and create appropriate element
        function createMediaElement(mediaItem) {
            const mediaType = getMediaType(mediaItem);
            // 获取 workModal 内容区域宽高
            const modalBody = document.querySelector('#workModal .modal-body');
            let modalHeight = modalBody ? modalBody.offsetHeight : window.innerHeight * 0.8;
            // 如果内容区域高度太小，使用窗口高度的 80%
            if (!modalBody || modalHeight < 400) {
                modalHeight = window.innerHeight * 0.8;
            }
            if (mediaType === 'video-youtube' || mediaType === 'video-external') {
                const iframeElement = document.createElement('iframe');
                iframeElement.src = mediaItem;
                iframeElement.style.width = '100%';
                iframeElement.style.height = modalHeight + 'px';
                iframeElement.frameBorder = '0';
                iframeElement.allowFullscreen = true;
                iframeElement.classList.add('mb-3');
                return iframeElement;
            } else if (mediaType === 'video-local') {
                const videoElement = document.createElement('video');
                videoElement.src = mediaItem;
                videoElement.style.width = '100%';
                videoElement.style.height = modalHeight + 'px';
                videoElement.controls = true;
                videoElement.autoplay = false;
                videoElement.muted = true;
                videoElement.preload = 'metadata';
                videoElement.playsInline = true;
                videoElement.classList.add('mb-3');
                
                videoElement.addEventListener('error', function(e) {
                    console.error('Video loading error:', e);
                    const errorMsg = document.createElement('div');
                    errorMsg.innerHTML = `<p style="color: red; padding: 20px; text-align: center;">Video cannot be loaded. Please check the file format or try a different browser.</p>`;
                    videoElement.parentNode.replaceChild(errorMsg, videoElement);
                });
                
                videoElement.addEventListener('loadedmetadata', function() {
                    console.log('Video metadata loaded successfully');
                });
                
                return videoElement;
            } else if (mediaType === 'image') {
                const imgElement = document.createElement('img');
                imgElement.src = mediaItem;
                imgElement.classList.add('d-block', 'mb-3');
                
                // Check if it's a GIF file - display at original size
                if (mediaItem.toLowerCase().includes('.gif')) {
                    imgElement.classList.add('gif-original-size');
                } else {
                    // For regular images, use full width
                    imgElement.classList.add('w-100');
                    imgElement.style.height = 'auto';
                }
                
                return imgElement;
            }
        }

        // Function to determine media type based on URL/path
        function getMediaType(mediaItem) {
            if (mediaItem.includes('youtube') || mediaItem.includes('youtu.be')) {
                return 'video-youtube';
            } else if (mediaItem.includes('http') && (mediaItem.includes('.webm') || mediaItem.includes('.mp4') || mediaItem.includes('video'))) {
                return 'video-external';
            } else if (mediaItem.includes('.mp4') || mediaItem.includes('.webm') || mediaItem.includes('.ogg')) {
                return 'video-local';
            } else if (mediaItem.includes('.jpg') || mediaItem.includes('.jpeg') || mediaItem.includes('.png') || mediaItem.includes('.gif') || mediaItem.includes('.webp')) {
                return 'image';
            }
            // Default to image if uncertain
            return 'image';
        }

        // If using new data-media attribute (mixed media)
        if (media.length > 0) {
            media.forEach((mediaItem) => {
                const element = createMediaElement(mediaItem);
                if (element) {
                    mediaContainer.appendChild(element);
                }
            });
        } else {
            // Fallback to old system for backwards compatibility
            videos.forEach((video) => {
                const element = createMediaElement(video);
                if (element) {
                    mediaContainer.appendChild(element);
                }
            });

            images.forEach((image) => {
                const element = createMediaElement(image);
                if (element) {
                    mediaContainer.appendChild(element);
                }
            });
        }

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