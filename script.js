const projects = [
  {
    title: 'Codever',
    description: 'A project focused on coding practice and learning.',
    image: 'images/codever.png',
    link: '#'
  },
  {
    title: 'Play Off',
    description: 'A game project built for fun and experimentation.',
    image: 'images/play_off.png',
    link: '#'
  },
  {
    title: 'Fodamy',
    description: 'A food-focused project where you can check it out.',
    image: 'images/fodamy.png',
    link: '#'
  }
];

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

renderProjects();
initSwipeHintOnScroll();




function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}


function renderProjects() {
  const slider = document.querySelector('.post-slider');

  // Clear any existing slides
  slider.innerHTML = '';

  // Loop through the projects data and create a slide for each project
  projects.forEach(project => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const post = document.createElement('div');
    post.classList.add('post');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.setAttribute('src', project.image);
    post.appendChild(thumbnail);

    const postPreview = document.createElement('div');
    postPreview.classList.add('post-preview');

    const postTitle = document.createElement('h6');
    postTitle.classList.add('post-title');
    postTitle.textContent = project.title;
    postPreview.appendChild(postTitle);

    const postIntro = document.createElement('p');
    postIntro.classList.add('post-intro');
    postIntro.textContent = project.description;
    postPreview.appendChild(postIntro);

    const playNowLink = document.createElement('a');
	playNowLink.setAttribute('target', '_blank')
    playNowLink.setAttribute('href', project.link);
    if(project.title == "Fodamy"){
      playNowLink.textContent = 'Check Out';
    }else{
      playNowLink.textContent = 'Play Now';
    }
    postPreview.appendChild(playNowLink);

    post.appendChild(postPreview);
    slide.appendChild(post);
    slider.appendChild(slide);
  });
}

function initSwipeHintOnScroll() {
  const slider = document.querySelector('.post-slider');
  if (!slider || !window.IntersectionObserver) {
    return;
  }

  const isMobile = window.matchMedia('(max-width: 800px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isMobile.matches && !reduceMotion.matches) {
        slider.classList.add('animate-hint');
        obs.disconnect();
      }
    });
  }, { threshold: 0.35 });

  observer.observe(slider);
}

(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "u3t8v6eoz5");
