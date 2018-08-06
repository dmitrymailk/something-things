let images = document.getElementsByClassName('img'),
		arrowLeft = document.getElementsByClassName('arrow-left')[0],
		arrowRight = document.getElementsByClassName('arrow-right')[0];

const slider = {
	currentSlide: 0,
	maxSlides: images.length - 1,

	slideRight: () => {
		if(slider.currentSlide < slider.maxSlides){
			slider.hideSlides();
			slider.currentSlide++;
			slider.showSlides();
		}
		else if(slider.currentSlide === slider.maxSlides){
			slider.hideSlides();
			slider.currentSlide = 0;
			slider.showSlides();
		}


	},

	slideLeft: () => {
		if(slider.currentSlide > 0){
			slider.hideSlides();
			slider.currentSlide--;
			slider.showSlides();
		}
		else if(slider.currentSlide === 0){
			slider.hideSlides();
			slider.currentSlide = slider.maxSlides;
			slider.showSlides();
		}
	},

	preparingSlides: () => {
		for(let i=1; i < slider.maxSlides + 1; i++ ){
			images[i].style.display = 'none';
		}
	},

	showSlides: () => {
		images[slider.currentSlide].style.display = 'block';
	},

	hideSlides: () => {
		images[slider.currentSlide].style.display = 'none';
	}

};

slider.preparingSlides();

arrowRight.addEventListener('click',  () => {
	slider.slideRight();
});

arrowLeft.addEventListener('click', () => {
	slider.slideLeft();
});
