# Contributing to **HubSpot Developer Extension** 
## by Avidly Development

Thank you for considering a contribution! We welcome pull requests, bug reports, and feature ideas that make life easier for HubSpot developers.

---

## Table of Contents

* [Getting Started](#getting-started)
* [Workflow](#workflow)
  * [Branch Naming](#branch-naming)
  * [Commit Messages](#commit-messages)
* [Coding Standards](#coding-standards)
* [Testing](#testing)
* [Documentation](#documentation)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Blue-Frog-DM/Hubspot-Developer-Extension-by-Avidly-Development.git
   cd Hubspot-Developer-Extension-by-Avidly-Development
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run the extension in development mode**

   ```bash
   npm run build
   ```
   This builds the extension to the `/dist` folder.
4. **Load the development build** in Chrome:

   * Navigate to **chrome://extensions** and enable **Developer mode**.
   * Click **Load unpacked** and select the `/dist` folder.

---

## Workflow

### Branch Naming

Use the full‑term *prefix/description* pattern:

| Purpose       | Prefix example | Branch example               |
| ------------- | -------------- | ---------------------------- |
| New feature   | `feature/`     | `feature/url-tools-hotkeys`  |
| Fix           | `fix/`         | `fix/popup-scroll-bug`       |
| Documentation | `docs/`        | `docs/update-readme-install` |
| Refactor      | `refactor/`    | `refactor/options-storage`   |

> We prefer the explicit `feature/` over the shorthand `feat/`.

### Commit Messages

We follow **[Conventional Commits](https://www.conventionalcommits.org)**. Use this structure:

```
type(scope): short description

[optional body]
[optional footer]
```

Common `type` values:

| type       | When to use                                             |
| ---------- | ------------------------------------------------------- |
| `feature`  | Introducing a new capability                            |
| `fix`      | Bug fix                                                 |
| `docs`     | Documentation only changes                              |
| `style`    | Formatting, missing semi‑colons, etc.                   |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test`     | Adding or updating tests                                |
| `chore`    | Build process or auxiliary tooling                      |

Example:

```bash
feature(url-tools): add toggle for hsDebug parameter
```

---

## Coding Standards

* **Manifest V3**: All code must comply with Chrome Extension Manifest V3.
* **ESLint & Prettier**: Run `npm run lint` to check; `npm run lint --fix` to auto‑fix style issues.
* **Async/Await**: Use async/await for Chrome API calls.
* **UI**: Keep the popup interface lightweight, accessible, and consistent with the existing design.

---

## Testing

* Ensure all features work as expected in the Chrome browser.
* Test the extension on HubSpot domains to verify URL tools and language switching functionality.
* Report any issues or bugs in the repository's issue tracker.

---

## Documentation

If your change adds or modifies functionality, update:

* **README.md** (high‑level overview)
* **User manual / screenshots** (if applicable)

---

## Code of Conduct

We strive for a welcoming and inclusive community. All participants are expected to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## License

By submitting a contribution, you agree that your work will be released under the terms of the MIT License included in this repository.

---

## Need Help?

Open an issue or start a discussion—maintainers and the community are happy to assist.

Thanks for helping make this extension better for HubSpot developers!
