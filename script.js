// Weapon data with descriptions and image paths
const weaponData = {
	'ballistic-shield': {
		name: 'Ballistic Shield',
		description:
			'Heavy-duty protective shield designed to stop high-velocity rounds. Essential for point entry and protecting team members.',
		image:
			'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
	},
	mcx: {
		name: 'MCX',
		description:
			'Modular assault rifle with excellent accuracy and reliability. Versatile weapon suitable for various tactical situations.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	mpx: {
		name: 'MPX',
		description:
			'Compact submachine gun with low recoil and high rate of fire. Ideal for close-quarters combat and confined spaces.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	b92x: {
		name: 'B92X',
		description:
			'Reliable sidearm with excellent stopping power. Standard issue pistol for all SWAT team members.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	'remington-870': {
		name: 'Remington 870 CQB',
		description:
			'Pump-action shotgun designed for close-quarters battle. Devastating stopping power at short range.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	b1301: {
		name: 'B1301 Shotgun',
		description:
			'Semi-automatic shotgun with rapid fire capability. Excellent for breaching operations and close combat.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	mp7: {
		name: 'MP7',
		description:
			'Compact personal defense weapon with armor-piercing capabilities. High rate of fire with manageable recoil.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	mp5a3: {
		name: 'MP5A3',
		description:
			'Classic submachine gun known for its reliability and accuracy. Time-tested weapon for tactical operations.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	'se-58-osw': {
		name: 'SE 58 OSW',
		description:
			'Battle rifle with excellent range and stopping power. Designed for medium to long-range engagements.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	'sa-58-osw': {
		name: 'SA 58 OSW',
		description:
			'Heavy battle rifle with superior penetration capabilities. Ideal for engaging armored targets.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	m320: {
		name: 'M320',
		description:
			'Grenade launcher attachment for launching flashbangs, CS gas, and other tactical munitions.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	'arn-180': {
		name: 'ARN-180',
		description:
			'Suppressed assault rifle designed for stealth operations. Minimal sound signature for quiet missions.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	mp5sd6: {
		name: 'MP5SD6',
		description:
			'Integrally suppressed submachine gun. Virtually silent operation for covert tactical missions.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	'sr-16': {
		name: 'SR-16',
		description:
			'Precision rifle designed for long-range engagements. Excellent accuracy and range for open area operations.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
	ump45: {
		name: 'UMP45',
		description:
			'Heavy submachine gun chambered in .45 ACP. Superior stopping power for close to medium range combat.',
		image:
			'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
	},
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
	initializeTooltips();
	addRoleCardAnimations();
	addScrollEffects();
});

// Initialize weapon tooltips
function initializeTooltips() {
	const weaponElements = document.querySelectorAll('.weapon-name');
	const tooltip = document.getElementById('weapon-tooltip');
	const weaponImage = document.getElementById('weapon-image');
	const weaponName = document.getElementById('weapon-name');
	const weaponDescription = document.getElementById('weapon-description');

	weaponElements.forEach(element => {
		element.addEventListener('mouseenter', function (e) {
			const weaponKey = this.getAttribute('data-weapon');
			if (weaponData[weaponKey]) {
				const weapon = weaponData[weaponKey];

				// Update tooltip content
				weaponImage.src = weapon.image;
				weaponImage.alt = weapon.name;
				weaponName.textContent = weapon.name;
				weaponDescription.textContent = weapon.description;

				// Position tooltip
				positionTooltip(e, tooltip);

				// Show tooltip
				tooltip.classList.add('show');
			}
		});

		element.addEventListener('mouseleave', function () {
			tooltip.classList.remove('show');
		});

		element.addEventListener('mousemove', function (e) {
			if (tooltip.classList.contains('show')) {
				positionTooltip(e, tooltip);
			}
		});
	});
}

// Position tooltip relative to mouse cursor
function positionTooltip(e, tooltip) {
	const x = e.clientX;
	const y = e.clientY;
	const tooltipRect = tooltip.getBoundingClientRect();
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	let left = x + 15;
	let top = y - tooltipRect.height - 15;

	// Adjust if tooltip goes off screen
	if (left + tooltipRect.width > viewportWidth) {
		left = x - tooltipRect.width - 15;
	}

	if (top < 0) {
		top = y + 15;
	}

	tooltip.style.left = left + 'px';
	tooltip.style.top = top + 'px';
}

// Add animations to role cards
function addRoleCardAnimations() {
	const roleCards = document.querySelectorAll('.role-card');

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.animationPlayState = 'running';
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	roleCards.forEach(card => {
		card.style.animationPlayState = 'paused';
		observer.observe(card);
	});
}

// Add scroll effects
function addScrollEffects() {
	let lastScrollTop = 0;
	const header = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollTop > lastScrollTop && scrollTop > 100) {
			// Scrolling down
			header.style.transform = 'translateY(-100%)';
		} else {
			// Scrolling up
			header.style.transform = 'translateY(0)';
		}

		lastScrollTop = scrollTop;
	});
}

// Add click effects to weapon names
document.addEventListener('DOMContentLoaded', function () {
	const weaponNames = document.querySelectorAll('.weapon-name');

	weaponNames.forEach(weapon => {
		weapon.addEventListener('click', function () {
			// Add click animation
			this.style.transform = 'scale(0.95)';
			setTimeout(() => {
				this.style.transform = 'scale(1.05)';
				setTimeout(() => {
					this.style.transform = 'scale(1)';
				}, 150);
			}, 100);
		});
	});
});

// Add keyboard navigation support
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		const tooltip = document.getElementById('weapon-tooltip');
		tooltip.classList.remove('show');
	}
});

// Add touch support for mobile devices
document.addEventListener('DOMContentLoaded', function () {
	const weaponNames = document.querySelectorAll('.weapon-name');
	const tooltip = document.getElementById('weapon-tooltip');

	weaponNames.forEach(weapon => {
		weapon.addEventListener('touchstart', function (e) {
			e.preventDefault();
			const weaponKey = this.getAttribute('data-weapon');
			if (weaponData[weaponKey]) {
				const weapon = weaponData[weaponKey];

				// Update tooltip content
				document.getElementById('weapon-image').src = weapon.image;
				document.getElementById('weapon-image').alt = weapon.name;
				document.getElementById('weapon-name').textContent = weapon.name;
				document.getElementById('weapon-description').textContent =
					weapon.description;

				// Position tooltip for touch
				const rect = this.getBoundingClientRect();
				tooltip.style.left = rect.left + rect.width / 2 - 150 + 'px';
				tooltip.style.top = rect.top - 200 + 'px';

				// Show tooltip
				tooltip.classList.add('show');

				// Hide after 3 seconds
				setTimeout(() => {
					tooltip.classList.remove('show');
				}, 3000);
			}
		});
	});
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('img');

	images.forEach(img => {
		img.addEventListener('load', function () {
			this.style.opacity = '1';
		});

		img.addEventListener('error', function () {
			// Fallback to a placeholder if image fails to load
			this.src =
				'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBWOTBIODBWNjBaIiBmaWxsPSIjNjY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjEyIj5XZWFwb24gSW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
		});

		// Set initial opacity to 0 for loading effect
		img.style.opacity = '0';
		img.style.transition = 'opacity 0.3s ease';
	});
});

