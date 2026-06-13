# Chang Birthday

A polished, romantic, mobile-first birthday website for Chang. It opens with an animated lily bouquet, reveals a soft envelope, opens into a birthday letter, and continues into warm birthday wishes.

Built with React, Vite, Tailwind CSS, and Framer Motion. The project is static only and ready for GitHub Pages.

## Requirements

- Node.js
- npm
- A GitHub account

## Local setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:5173/
```

Local development uses `/` for convenience. Production builds still use `/changiu/` for GitHub Pages.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `changiu`.
2. Push this code to GitHub.
3. Run:

   ```bash
   npm run deploy
   ```

4. Go to your GitHub repository.
5. Open **Settings > Pages**.
6. Select the `gh-pages` branch as the source.
7. Save.

Your website will be available at:

```text
https://locxn.github.io/changiu/
```

## How to change the repo name

If you deploy under a different repository name:

1. Update `base` in `vite.config.js`:

   ```js
   base: "/your-repo-name/"
   ```

2. Update `homepage` in `package.json` if you use it:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/your-repo-name/"
   ```

3. Rebuild and redeploy.

## How to customize the birthday message

Edit the message in:

```text
src/components/LetterDialog.jsx
```

You can also edit the final wish in:

```text
src/components/BirthdayWishSection.jsx
```

## How to add the background song

Place your mp3 file at:

```text
public/audio/birthday-song.mp3
```

Keep the filename exactly the same unless you also update `src/components/MusicPlayer.jsx`.

In code, the player resolves the file using Vite’s base path, so it works both locally and when deployed under `/changiu/` on GitHub Pages.

The song starts only after the envelope is clicked. It does not autoplay before user interaction. If the file is missing, the site still works and shows the music control as optional.

Do not commit copyrighted music publicly unless you have the rights to use and share it.

After adding or replacing the song, rebuild and redeploy:

```bash
npm run build
npm run deploy
```
