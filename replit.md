# Overview

NebulaPlay is a browser-based game hosting platform that provides access to a collection of embedded web games. The platform features a simple search interface allowing users to discover and play games directly in their browser. Games are primarily hosted via external CDN services (jsdelivr, rawcdn.githack) and embedded as iframes or standalone HTML files.

The platform monetizes through Google AdSense advertisements and includes social media integration for user engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Static HTML/CSS/JavaScript Architecture**
- Single-page application with minimal JavaScript dependencies
- No build process or framework - uses vanilla JavaScript for interactivity
- Static file hosting suitable for platforms like Replit, GitHub Pages, or simple web servers

**Design Pattern: Direct DOM Manipulation**
- Uses native `querySelector` and `addEventListener` for search functionality
- Real-time filtering of game thumbnails based on search input
- Client-side only - no backend processing required

**Styling Approach**
- CSS imported from Google Fonts (Montserrat family)
- Custom gradient animations for text effects using CSS keyframes
- Responsive design with viewport meta tags
- Backdrop blur effects for navigation bar
- Fixed positioning for persistent UI elements

**Asset Management**
- Background images served from local `/images/` directory
- Game thumbnails referenced via `alt` attributes for search functionality
- Social media icons loaded as static images

## Game Delivery System

**CDN-Based Game Hosting**
- Games hosted on external CDN services (jsdelivr.net, rawcdn.githack.com)
- Each game exists as a standalone HTML file in `/storage/` directory
- Games utilize `<base>` tag to reference external CDN resources
- No local game assets - all content loaded from CDN

**Game Integration Patterns**
- Unity WebGL games with custom loaders
- Flash games using Ruffle emulator
- HTML5/Canvas-based games
- Third-party game frameworks (Phaser, custom engines)

**Technology Stack Per Game Type**
- Unity games: UnityLoader.js, WebGL builds
- Flash games: Ruffle (WASM-based Flash emulator)
- HTML5 games: Phaser, custom JavaScript engines
- Some games include SDK integrations (Poki, GameMonetize)

## Navigation & Discovery

**Search Functionality**
- Client-side search filtering based on `alt` text of game images
- Case-insensitive string matching
- Real-time results without page reload
- No search indexing or backend - purely DOM-based filtering

**User Interface Components**
- Fixed navigation bar with logo and search
- Social media icons (fixed top-right positioning)
- Game grid layout with hover effects
- Loading indicators for Unity games

## Monetization Integration

**Google AdSense**
- Publisher ID: pub-2366308143645027
- Ads.txt file present for verification
- Ad container divs strategically placed
- Asynchronous ad loading script

**Revenue Model**
- Display advertising through Google AdSense
- No subscription or premium features
- Free-to-play game access

## Performance Optimizations

**Loading Strategies**
- Progressive loading for large Unity games (split file merging)
- Download/extract progress indicators
- Lazy loading approach - games load only when accessed
- JSZip library for compressed asset extraction

**Caching Approach**
- CDN-hosted assets benefit from browser caching
- Static files served with standard HTTP caching headers
- No service worker or custom cache implementation detected

# External Dependencies

## Content Delivery Networks
- **jsdelivr.net** - Primary CDN for game files and libraries
- **rawcdn.githack.com** - Alternative CDN for game hosting
- **cdnjs.cloudflare.com** - Library hosting (JSZip)
- **unpkg.com** - Ruffle Flash emulator

## Third-Party Services
- **Google AdSense** - Advertisement platform
- **Google Analytics** - Tracking ID: G-WX5VS54ZDW (appears in multiple game files)
- **Google Fonts** - Montserrat font family, FontAwesome icons

## Game Engines & Frameworks
- **Unity WebGL** - For 3D/2D Unity games
- **Ruffle** - Flash emulator for legacy Flash games
- **Phaser** - HTML5 game framework
- **Custom game engines** - Various proprietary engines per game

## Game SDKs & Monetization
- **Poki SDK** - Game platform integration
- **GameMonetize SDK** - Alternative monetization platform
- **YouTube Playables SDK** - For YouTube gaming integration

## Libraries & Tools
- **JSZip 3.10.1** - Compressed file handling
- **Three.js** - 3D graphics library (for specific games)
- **Firebase** - Authentication and database (for 1v1.LoL game)

## Authentication Services (Game-Specific)
- **Firebase Auth** - Used by specific games for user accounts
- **Firestore** - Cloud database for game data persistence

## Media & Assets
- Background images served locally from `/images/` directory
- Social media platform icons for external linking
- Game-specific assets loaded from respective CDN locations