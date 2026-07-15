# FSU Mathematics Graduate Student Council Website

Static HTML/CSS/JavaScript website prepared for GitHub Pages.

## Project structure

```text
fsu_math_gsc_github/
├── index.html
├── about.html
├── events.html
├── constitution.html
├── resources.html
├── faq.html
├── 404.html
├── styles.css
├── script.js
├── .nojekyll
└── assets/
    ├── gsc-logo.png
    └── love-building.png
```

## Preview locally

You can double-click `index.html`.

For a simple local server on macOS:

```bash
cd fsu_math_gsc_github
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Publish with GitHub Pages

### 1. Create a GitHub repository

Suggested repository name:

```text
fsu-math-gsc
```

### 2. Upload the contents of this folder

`index.html` must remain at the root of the publishing folder.

Using Git:

```bash
git init
git add .
git commit -m "Initial FSU Mathematics GSC website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fsu-math-gsc.git
git push -u origin main
```

### 3. Enable GitHub Pages

In the repository:

1. Open **Settings**
2. Open **Pages**
3. Under **Build and deployment**, choose **Deploy from a branch**
4. Select the `main` branch
5. Select `/ (root)`
6. Save

The site should appear at a project URL similar to:

```text
https://YOUR-USERNAME.github.io/fsu-math-gsc/
```

## Images

The project currently uses:

- `assets/gsc-logo.png`
- `assets/love-building.png`

To replace a photo while keeping the existing layout, use the same filename or update the `src` path in HTML.

## Immediate edits

In `index.html`, search for:

```text
EDIT HERE
```

These mark:

- Upcoming event content
- Official Instagram link

The secondary pages are visual placeholders so the navigation has no dead pages. They can be built one at a time.
