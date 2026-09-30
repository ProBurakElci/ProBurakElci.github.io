# proburakelci.github.io

The page behind the link in my bio: everything I have built, in one place.

### → [proburakelci.github.io](https://proburakelci.github.io/)

It is one HTML file, one stylesheet and twenty lines of JavaScript. No
analytics, no cookies, no tracking, no build step, nothing to install.

## The short links

A fifteen-second video has no room for a full address, so the bio link carries
a tag and this page does the routing:

| Link | Goes to |
|---|---|
| `proburakelci.github.io/?go=code` | the code editor |
| `proburakelci.github.io/?go=life` | your life in weeks |
| `proburakelci.github.io/?go=reflex` | the reaction test |
| `proburakelci.github.io/?go=name` | your name as a pattern |
| `proburakelci.github.io/?go=algo` | the algorithm visualizer |
| `proburakelci.github.io/?go=commitguard` | the pre-commit hook |
| `proburakelci.github.io/?go=reclaim` | the disk cleaner |
| `proburakelci.github.io/?go=gitwrapped` | the git stats tool |

`life`, `weeks` and `lifecard` all reach the same page, so a caption typed from
memory still works. Anything unrecognised just shows the hub instead of failing.

The redirect uses `location.replace`, not `assign`, so the back button returns
people to wherever they came from rather than bouncing them forward again.

## What is listed

**In the browser** — [lifecard](https://github.com/ProBurakElci/lifecard),
[reflex](https://github.com/ProBurakElci/reflex),
[namestamp](https://github.com/ProBurakElci/namestamp),
[algovizor](https://github.com/ProBurakElci/algovizor)

**In the terminal** — [commitguard](https://github.com/ProBurakElci/commitguard),
[reclaim](https://github.com/ProBurakElci/reclaim),
[gitwrapped](https://github.com/ProBurakElci/gitwrapped)

All MIT licensed, all zero dependencies, all tested in CI.

## License

MIT — see [LICENSE](LICENSE).
