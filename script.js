(function() {
  // Game data structure
  const gamesList = [];

  // Extract game data from the page
  function extractGameData() {
    const gameLinks = document.querySelectorAll('#games a');
    gameLinks.forEach(link => {
      const img = link.querySelector('img');
      if (img) {
        const href = link.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || '';
        gamesList.push({
          name: img.alt,
          image: img.src,
          url: href
        });
      }
    });
  }

  // Get recently played games from localStorage
  function getRecentlyPlayed() {
    const recent = localStorage.getItem('recentlyPlayed');
    return recent ? JSON.parse(recent) : [];
  }

  // Add game to recently played
  function addToRecentlyPlayed(gameUrl, gameName, gameImage) {
    let recent = getRecentlyPlayed();
    
    // Remove if already exists
    recent = recent.filter(g => g.url !== gameUrl);
    
    // Add to beginning
    recent.unshift({ url: gameUrl, name: gameName, image: gameImage });
    
    // Keep only last 5
    recent = recent.slice(0, 5);
    
    localStorage.setItem('recentlyPlayed', JSON.stringify(recent));
  }

  // Get random games
  function getRandomGames(count) {
    const shuffled = [...gamesList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Display recently played games
  function displayRecentlyPlayed() {
    const container = document.getElementById('recently-played');
    if (!container) return;
    
    const recent = getRecentlyPlayed();
    
    if (recent.length === 0) {
      container.innerHTML = '<p style="color: rgba(255,255,255,0.6); font-size: 16px;">No recently played games yet!</p>';
      return;
    }
    
    container.innerHTML = '';
    recent.forEach(game => {
      const link = document.createElement('a');
      link.onclick = () => {
        window.location.href = game.url;
      };
      link.style.cursor = 'pointer';
      
      const img = document.createElement('img');
      img.src = game.image;
      img.alt = game.name;
      
      link.appendChild(img);
      container.appendChild(link);
    });
  }

  // Display random games
  function displayRandomGames() {
    const container = document.getElementById('random-games');
    if (!container) return;
    
    const randomGames = getRandomGames(5);
    
    container.innerHTML = '';
    randomGames.forEach(game => {
      const link = document.createElement('a');
      link.onclick = () => {
        addToRecentlyPlayed(game.url, game.name, game.image);
        window.location.href = game.url;
      };
      link.style.cursor = 'pointer';
      
      const img = document.createElement('img');
      img.src = game.image;
      img.alt = game.name;
      
      link.appendChild(img);
      container.appendChild(link);
    });
  }

  // Track game clicks in the main games section
  function setupGameTracking() {
    const gameLinks = document.querySelectorAll('#games a');
    gameLinks.forEach(link => {
      const originalOnclick = link.getAttribute('onclick');
      link.addEventListener('click', (e) => {
        const img = link.querySelector('img');
        if (img && originalOnclick) {
          const url = originalOnclick.match(/'([^']+)'/)?.[1];
          if (url) {
            addToRecentlyPlayed(url, img.alt, img.src);
          }
        }
      });
    });
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    extractGameData();
    displayRecentlyPlayed();
    displayRandomGames();
    setupGameTracking();
  });
})();