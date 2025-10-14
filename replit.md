# Overview

NebulaPlay is a browser-based games portal that provides users with access to a curated collection of HTML5, Unity WebGL, and Flash-based games. The platform offers a simple, ad-supported gaming experience with an integrated search functionality allowing users to quickly find and play games directly in their browser.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static HTML/CSS/JavaScript Design**
- Single-page application using vanilla JavaScript
- No frontend framework dependencies (React, Vue, etc.)
- Direct DOM manipulation for search functionality
- Responsive design using CSS for cross-device compatibility

**Layout Structure**
- Fixed navigation bar with backdrop blur effects
- Grid-based game display system
- Search input for filtering games by title
- Social media integration via fixed icon positions

**Styling Approach**
- Google Fonts (Montserrat) for typography
- Background images with fixed attachment
- CSS animations for hover effects and visual feedback
- Gradient text effects for branding elements

### Game Storage and Delivery

**CDN-Based Game Hosting**
- Games stored as individual HTML files in `/storage` directory
- External assets loaded from jsdelivr.net CDN
- Each game is self-contained with embedded base URLs
- Mix of game engines: Unity WebGL, Phaser, custom JavaScript engines

**Game Types Supported**
1. Unity WebGL games (various versions 2019-2020)
2. Flash games via Ruffle emulator
3. HTML5 canvas-based games
4. Godot engine games

**Loading Strategy**
- Progressive loading with visual feedback
- Split file merging for large Unity builds
- Custom loading screens per game
- Download/extraction progress indicators for compressed assets

### Search Functionality

**Client-Side Filtering**
- Real-time search via input event listeners
- Case-insensitive substring matching against alt text
- Toggle visibility (display: block/none) based on search results
- No server-side processing required

### Advertising Integration

**Google AdSense Implementation**
- Publisher ID: pub-2366308143645027
- ads.txt file for programmatic advertising verification
- Ad container placement in main layout
- Strategic ad positioning for monetization

**Third-Party Ad Networks**
- GameMonetize SDK integration in some games
- GameDistribution SDK for in-game advertising
- YouTube Playables SDK for select titles
- Poki SDK integration for sponsored games

### Performance Optimizations

**Asset Loading**
- Large files split into parts (.part1, .part2, etc.)
- Client-side file merging using Blob API
- Async fetch with progress tracking
- Object URLs for merged content delivery

**Compression and Caching**
- Unity compressed builds (.unityweb files)
- Service worker registration for PWA capabilities
- Browser caching via standard HTTP headers

## External Dependencies

### CDN Services
- **jsdelivr.net** - Primary CDN for game assets, libraries, and resources
- **rawcdn.githack.com** - Alternative CDN for GitHub-hosted content
- **unpkg.com** - NPM package CDN (Ruffle emulator)
- **cdnjs.cloudflare.com** - JSZip library for archive extraction

### Third-Party Libraries

**Game Engines**
- Phaser 3.x - HTML5 game framework
- Three.js - 3D graphics library
- Unity WebGL - Official Unity web player

**Utility Libraries**
- Ruffle (@ruffle-rs/ruffle) - Flash emulator
- JSZip - ZIP file manipulation
- Google APIs - Payment and services integration

### Analytics and Tracking
- **Google Analytics** - Traffic and user behavior tracking (G-WX5VS54ZDW)
- **Google Tag Manager** - Event tracking and conversion monitoring

### Game-Specific Services

**Firebase Integration**
- Firebase App, Auth, Firestore (for 1v1.LoL and similar games)
- User authentication and data persistence
- Cloud-based save game functionality

**Payment Processing**
- Google Payments API integration
- In-game purchase support for select titles

### Social Media Integration
- Twitter, Discord, Tumblr, Patreon embed support
- Fixed social media icon links in navigation
- Share functionality for game scores/achievements

### Font Services
- **Google Fonts API** - Montserrat font family
- Custom embedded fonts for specific games

### Development Tools
- FontAwesome 6.2.0 - Icon library for UI elements
- Various game-specific asset pipelines