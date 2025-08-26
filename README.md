# HubSpot Developer Extension

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/PLACEHOLDER.svg?label=Chrome%20Web%20Store)
![License](https://img.shields.io/github/license/Blue-Frog-DM/Hubspot-Developer-Extension-by-Avidly-Development.svg)

> An open‑source Chrome extension that super‑charges HubSpot development — maintained by Avidly Development.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)

  * [URL Tools](#url-tools)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

## Features

| Category                    | Highlights                                                                                                        |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Developer Tools**         | • Clear Cache<br>• Enable Developer Mode<br>• Debug Mode<br>• Language Switching<br>• AMP Version Preview         |
| **Documentation**          | • CRM API Reference<br>• CMS Developer Docs<br>• HubL Documentation<br>• Webhooks & OAuth Guides                  |
| **Community & Support**    | • Status Page<br>• Developer Announcements<br>• CMS Development Tips<br>• APIs & Integrations Forum<br>• HubSpot Developer Ideas |

## Installation

### From Chrome Web Store (coming soon)

*Not yet published. We'll update this section when the extension is live on the Chrome Web Store.*

### Development Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Blue-Frog-DM/Hubspot-Developer-Extension-by-Avidly-Development.git
   cd Hubspot-Developer-Extension-by-Avidly-Development
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```
   This will create a `dist` folder with the built extension.

4. Load in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked" in the top-left
   - Select the `dist` folder from your project directory

The extension icon will appear in your toolbar once loading completes.

### Development Workflow

1. **Making Changes**:
   - All development work should be done in the `src` folder
   - Never modify files in the `dist` folder (they get overwritten)

2. **Building**:
   - After making changes, run `npm run build`
   - This will:
     - Clean the existing `dist` folder
     - Copy updated files from `src` to `dist`

3. **Testing Changes**:
   - After building, go to `chrome://extensions/`
   - Find your extension card
   - Click the refresh icon (🔄)
   - Test your changes in Chrome

4. **Project Structure**:
   ```
   src/               # Source files (development)
   ├── manifest.json  # Extension manifest
   ├── popup.html    # Main interface
   ├── css/         
   ├── js/          
   └── images/       # Icons & assets
   
   dist/              # Built files (generated)
   └── [...]         # Copy of src/ (do not edit)

## Usage

1. Click the HubSpot Developer Extension icon.
2. Navigate between **Docs**, **URL Tools**, and **Community** tabs.
3. Actions that alter the current tab's URL will automatically reload the page for you.

### Language Switching

The extension provides built-in support for multi-language HubSpot sites:

1. **Automatic Detection**: The extension automatically detects:
   - Available languages from alternate `hreflang` links
   - Current language from HubSpot variables
   - Portal ID for proper context

2. **Easy Switching**: 
   - Select your target language from the dropdown
   - Click "Switch Language" to preview the page in the selected language
   - The language selector is automatically enabled when multiple languages are available

### Developer Tools

| Tool                  | What it does                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| **Clear Cache**       | Clears browser cache for the current HubSpot page                          |
| **Developer Mode**    | Enables HubSpot developer mode for advanced functionality                   |
| **Debug Mode**        | Shows debug information in the browser console                             |
| **Only Debug Info**   | Filters console output to show only debug-related information              |
| **AMP Version**       | Previews the AMP (Accelerated Mobile Pages) version of the current page    |
| **Design Manager**    | Opens the HubSpot Design Manager for the current portal                    |
| **Language Switch**   | Allows switching between available languages on multi-language pages        |

> **Note:** The extension automatically detects the portal ID and available languages from the current HubSpot page.

## Project Structure

```
├── src/                      # Source files (development)
│   ├── manifest.json         # Extension manifest
│   ├── popup.html           # Main extension interface
│   ├── css/
│   │   └── popup.css       # Styles for the popup interface
│   ├── js/
│   │   ├── popup.js        # Popup interface functionality
│   │   └── content.js      # Content script for page interaction
│   └── images/             # Extension icons & assets
│       ├── icon-16.png     # Browser toolbar icon (16x16)
│       ├── icon-38.png     # Browser toolbar icon (38x38)
│       ├── icon-48.png     # Extension management icon
│       ├── icon-128.png    # Chrome Web Store icon
│       ├── logo-full.png   # Full extension logo
│       └── ...            # Additional assets
│
└── dist/                    # Built files (generated, do not edit)
    └── [...]              # Copy of src/ after build
```

## Contributing

We ❤️ contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for the full workflow, coding standards, and branch/commit guidelines.

Quick start:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-awesome-feature`.
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/).
4. Push to the branch and open a pull request.

### Assets

Replace the placeholder icons in `src/images` with your own before publishing to the Chrome Web Store.

## Code of Conduct

We are committed to fostering a welcoming community. Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

###### Disclaimer

*HubSpot® is a registered trademark of HubSpot, Inc. This project is not affiliated with or endorsed by HubSpot.*