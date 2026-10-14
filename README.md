# Arcanix

A single-page interactive prototype for the Experimental Learning Program project. It presents Arcanix as a professional discovery and collaboration network for esports, linked to SDG 17: Partnerships for the Goals.

## Open the site

Open `index.html` in a modern browser. No installation or build step is required.

## Included interactions

- Player and team sign-up/login interface
- Profile onboarding for game, role, rank, region, opportunity goal, and headline
- Public player profile preview that uses the onboarding answers
- Professional community dashboard with posts, likes, connection requests, and recruiting teams
- Scouting filters for game, role, and region
- Connection request state
- Tryout application prompts
- Responsive desktop and mobile layout

This is a front-end prototype. A production deployment should connect the sign-up form to an approved authentication provider and secure backend instead of storing or handling credentials in the browser.

## Publish with GitHub Pages

1. Create a new, public GitHub repository, for example `arcanix-esports`.
2. Upload every file inside this `arcanix-site` folder to the repository root. `index.html` must remain at the root.
3. In the GitHub repository, open **Settings**, then **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and the `/(root)` folder, then save.
6. GitHub will show the public URL after it deploys. It normally has the form `https://YOUR-USERNAME.github.io/arcanix-esports/`.

GitHub Pages hosts static HTML, CSS and JavaScript. The visual prototype will work there, but real accounts, posts, messages and recruitment data need a separate secure backend before a public launch.
