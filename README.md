# TactileReflex project page

Static project website for the IROS 2026 paper. No build step is required.

## Preview locally

```powershell
python -m http.server 8000 --directory project-page
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages

Create a repository named `<username>.github.io` (personal site) or any repository (project site), copy the contents of this folder to its root, then enable **Settings → Pages → Deploy from a branch** and select the `main` branch at `/ (root)`.

Before publishing, replace the disabled Code and Video buttons in `index.html` once public URLs are available.
