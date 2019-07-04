//let aboutNav = document.getElementById('about')

// aboutNav.addEventListener('click', () => {
//     console.log('Working')

//     document.getElementsById('aboutHere').scrollIntoView({behavior: "smooth"});

// });



//function about () {
   //console.log('Working')
   //let ab = document.getElementsById('aboutHere')
   //ab.scrollIntoView({behavior: "smooth"});
//};



// function about () {

//     let aboutHere = document.getElementById('#aboutHere')
//     aboutHere.scrollIntoView({
//     behavior: 'smooth'})

//     console.log('here2')


// }


// let element = document.getElementById('subheader');
// let [btn] = document.getElementsByTagName('button');
// btn.addEventListener('click', ()=>{
//     element.scrollIntoView({behavior: "smooth"});
// })

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}