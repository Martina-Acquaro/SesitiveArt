// A simple script to create a cute animated heart using HTML and CSS

// Create the heart element dynamically
const heart = document.createElement('div');
heart.className = 'heart';
document.body.appendChild(heart);

// Add some styles for the heart
const style = document.createElement('style');
style.textContent = `
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		background: #fce4ec;
		overflow: hidden;
	}

	.heart {
		position: relative;
		width: 100px;
		height: 100px;
		background-color: #e91e63;
		transform: rotate(-45deg);
		animation: pulse 1.5s infinite;
	}

	.heart::before,
	.heart::after {
		content: '';
		position: absolute;
		width: 100px;
		height: 100px;
		background-color: #e91e63;
		border-radius: 50%;
	}

	.heart::before {
		top: -50px;
		left: 0;
	}

	.heart::after {
		left: 50px;
		top: 0;
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1) rotate(-45deg);
		}
		50% {
			transform: scale(1.1) rotate(-45deg);
		}
	}
`;
document.head.appendChild(style);