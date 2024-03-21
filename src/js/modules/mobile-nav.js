function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const navBtnClose = document.querySelector('#close-mobile-nav')
    const mobileNavFade = document.querySelector('.mobile-nav-fade')

	navBtnOpen.onclick = openMobileNav;

	navBtnClose.onclick = closeMobileNav;

	mobileNavFade.onclick = closeMobileNav;

	function openMobileNav() {
        nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open');
		document.body.classList.add('no-scroll');
	}
	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.remove('no-scroll');
	}

	nav.addEventListener('click', function(e) {
		e.stopPropagation();

	})
}

export default mobileNav;