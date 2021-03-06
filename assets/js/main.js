;(function () {
    'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			event.preventDefault();
			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	};

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
            event.preventDefault();
            $('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			return false;
		});
	};

	// Page Nav
	var clickMenu = function() {
        // Read the cookie and if it's defined scroll to id
        var scroll = Cookies.get('scroll');
        if(scroll){
            var section = scroll,
                navbar = $('#navbar');
				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }
		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }
            Cookies.remove('scroll');
        }

		$('#navbar a:not([class="external"])').click(function(event){
            if (location.pathname != '/'){
                Cookies.set('scroll', $(this).data('nav-section'));
                window.location.href = location.protocol + '//' + location.host;
            }
			var section = $(this).data('nav-section'),
                navbar = $('#navbar');
				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top
			    	}, 500);
			   }
		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }
		    event.preventDefault();
		    return false;
		});
	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
        var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});
	};

	var navigationSection = function() {
		var $section = $('section[data-section]');
		$section.waypoint(function(direction) {
            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });
		$section.waypoint(function(direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function() { return -$(this.element).height() + 155; }
        });
	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
            var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();
			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}
		});
	};

	// Animations
	// Home
	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {
			$('#fh5co-home').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);

					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var introAnimate = function() {
		if ( $('#fh5co-intro').length > 0 ) {
			$('#fh5co-intro').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						$('#fh5co-intro .to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 1000);

					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var workAnimate = function() {
		if ( $('#fh5co-work').length > 0 ) {
			$('#fh5co-work').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						$('#fh5co-work .to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var sponsorsAnimate = function() {
		var sponsors = $('#fh5co-sponsors');
		if ( sponsors.length > 0 ) {
			sponsors.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					var sec = sponsors.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);
					setTimeout(function() {
						sponsors.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					setTimeout(function() {
						sponsors.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, sec);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

    var scheduleAnimate = function() {
		var schedule = $('#fh5co-schedule');
		if ( schedule.length > 0 ) {
			schedule.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					var sec = schedule.find('.to-animate').length,
						sec = parseInt((sec * 200) - 400);
					setTimeout(function() {
						schedule.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					setTimeout(function() {
						schedule.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, sec);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

    var workshopsAnimate = function() {
        var workshops = $('#fh5co-workshops');
        if ( workshops.length > 0 ) {
            workshops.waypoint( function( direction ) {
                if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                    var sec = workshops.find('.to-animate').length,
                        sec = parseInt((sec * 200) - 400);
                    setTimeout(function() {
                        workshops.find('.to-animate').each(function( k ) {
                            var el = $(this);
                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );
                        });
                    }, 200);
                    setTimeout(function() {
                        workshops.find('.to-animate-2').each(function( k ) {
                            var el = $(this);
                            setTimeout ( function () {
                                el.addClass('fadeInDown animated');
                            },  k * 200, 'easeInOutExpo' );
                        });
                    }, sec);
                    $(this.element).addClass('animated');
                }
            } , { offset: '80%' } );
        }
    };

	var schoolsAnimate = function() {
		var schools = $('#fh5co-schools');
		if ( schools.length > 0 ) {
			schools.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					var sec = schools.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
					setTimeout(function() {
						schools.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					setTimeout(function() {
						schools.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, sec);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

    var codeConductAnimate = function() {
		var codeConduct = $('#fh5co-code');
		if ( codeConduct.length > 0 ) {
			codeConduct.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					var sec = codeConduct.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
					setTimeout(function() {
						codeConduct.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					setTimeout(function() {
						codeConduct.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInDown animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, sec);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var aboutAnimate = function() {
		var about = $('#fh5co-about');
		if ( about.length > 0 ) {
			about.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

    var speakersAnimate = function() {
        var speakers = $('#fh5co-speakers');
        if ( speakers.length > 0 ) {
            speakers.waypoint( function( direction ) {
                if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                    setTimeout(function() {
                        speakers.find('.to-animate').each(function( k ) {
                            var el = $(this);
                            setTimeout ( function () {
                                el.addClass('fadeInUp animated');
                            },  k * 200, 'easeInOutExpo' );
                        });
                    }, 200);
                    $(this.element).addClass('animated');
                }
            } , { offset: '80%' } );
        }
    };

    var venueAnimate = function() {
		var about = $('#fh5co-venue');
		if ( about.length > 0 ) {
			about.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						about.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var countersAnimate = function() {
		var counters = $('#fh5co-counters');
		if ( counters.length > 0 ) {
			counters.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
					setTimeout(function() {
						counters.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					setTimeout(function() {
                        counters.find('.js-counter').countTo({
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            },
                        });
                    }, 400);
					setTimeout(function() {
						counters.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, sec);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	var contactAnimate = function() {
		var contact = $('#fh5co-contact');
		if ( contact.length > 0 ) {
			contact.waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout(function() {
						contact.find('.to-animate').each(function( k ) {
							var el = $(this);
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
						});
					}, 200);
					$(this.element).addClass('animated');
				}
			} , { offset: '80%' } );
		}
	};

	// Document on load.
	$(function(){
		parallax();
		burgerMenu();
		clickMenu();
		windowScroll();
		navigationSection();
		goToTop();

		// Animations
		homeAnimate();
		introAnimate();
        venueAnimate();
        aboutAnimate();
        codeConductAnimate();
        schoolsAnimate();
        sponsorsAnimate();
        scheduleAnimate();
        workshopsAnimate();
        speakersAnimate();
		workAnimate();
		countersAnimate();
		contactAnimate();
	});
}());
