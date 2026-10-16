import sys, time
from pathlib import Path
from playwright.sync_api import sync_playwright

SHELL = "/home/hatch/.cache/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell"
og_dir = Path("/home/hatch/workspace/flux-studio/public/og")
svgs = sorted(og_dir.glob("*.svg"))

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=SHELL, args=["--no-sandbox"])
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    for svg in svgs:
        page.goto(svg.as_uri(), wait_until="load")
        page.wait_for_timeout(400)
        out = og_dir / (svg.stem + ".png")
        page.screenshot(path=str(out))
        print("wrote", out.name)
    browser.close()
