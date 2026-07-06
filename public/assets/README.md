# Assets — drop your files here

Reference any file from `src/data/content.js` using a path that starts at `/assets/...`
(the `public/` folder is served at the site root).

| Folder                      | What goes here                                  | Referenced by (in content.js) |
|-----------------------------|-------------------------------------------------|-------------------------------|
| `hero/`                     | Your portrait photo                             | `profile.photo`               |
| `education/`                | University / institution logos                  | `education[].logo`            |
| `software/`                 | Tool logos (GROMACS, PyMOL, …)                   | `software[].logo`             |
| `publications/`             | Journal covers or paper figures                 | `publications[].image`        |
| `github/`                   | Repo screenshots / GIFs                          | `github.repos[].image`        |
| `thesis/`                   | Thesis & project diagrams/figures               | `thesis[].image`              |
| `simulations/`              | MD trajectory videos (`.mp4` / `.webm`) + posters | `simulations[].video/.poster` |

You can also drop your CV PDF anywhere in here (e.g. `public/assets/CV.pdf`) and set
`profile.resumeUrl = '/assets/CV.pdf'`.

## Tips
- Images: use `.jpg`/`.png`/`.webp`. Aim for ~1600px wide max to keep the site fast.
- Videos: `.mp4` (H.264) plays everywhere. Keep clips short (a few seconds, looped).
- Logos look best on transparent `.png` or `.svg`.
