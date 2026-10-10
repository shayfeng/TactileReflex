# TactileReflex project page

Static project website for the IROS 2026 paper. No build step is required.

## Preview locally

```powershell
python -m http.server 8000 --directory project-page
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages

Create a repository named `<username>.github.io` (personal site) or any repository (project site), copy the contents of this folder to its root, then enable **Settings → Pages → Deploy from a branch** and select the `main` branch at `/ (root)`.

The paper and video are linked from the project page. The Code button and dedicated Code Release section point to the public [TactileReflex research-code repository](https://github.com/shayfeng/tactile-reflex-open-source), including the original and optimized MC-TAC controllers, calibration script, and optional DM-TAC / Xense backends.
