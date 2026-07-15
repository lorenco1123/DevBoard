document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById('pattern-trigger');
  const overlay = document.getElementById('pattern-overlay');

  if (!trigger || !overlay) return;

  const config = {
    color: '#5810ff',         
    backgroundColor: '#000000', 
    duration: 150, 
    blurIntensity: '1em',     
    density: 1 
  };

  const generateBackgroundImage = (color) => {
    const rowOffsets = [235, 235, 117.5, 252, 252, 126, 150, 150, 75, 253, 253, 126.5, 204, 204, 102, 134, 134, 67, 179, 179, 89.5, 299, 299, 149.5, 215, 215, 107.5, 281, 281, 140.5, 158, 158, 79, 210, 210, 105];
    return rowOffsets.map((offset, index) => {
      if (index % 3 === 2) {
        return `radial-gradient(1.5px 1.5px at 150px ${offset}px, ${color} 100%, transparent 150%)`;
      } else {
        const xPos = index % 3 === 0 ? 0 : 300;
        return `radial-gradient(4px 100px at ${xPos}px ${offset}px, ${color}, transparent)`;
      }
    }).join(', ');
  };

  const backgroundSizes = Array(12).fill('300px 235px, 300px 252px, 300px 150px').join(', ');

  trigger.style.backgroundColor = config.backgroundColor;
  trigger.style.backgroundImage = generateBackgroundImage(config.color);
  trigger.style.backgroundSize = backgroundSizes;
  trigger.style.animationDuration = `${config.duration}s`;
  overlay.style.backdropFilter = `blur(${config.blurIntensity})`;
  overlay.style.webkitBackdropFilter = `blur(${config.blurIntensity})`;
  overlay.style.backgroundImage = `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${config.backgroundColor} 2px)`;
  overlay.style.backgroundSize = `${8 * config.density}px ${8 * config.density}px`;
});

