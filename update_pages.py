import os
import re
from pathlib import Path

template_path = Path("_/1/index.html")
with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

folders = [d for d in Path("_").iterdir() if d.is_dir() and d.name != "1"]

updated_count = 0
skipped_count = 0

for folder in sorted(folders, key=lambda x: int(x.name) if x.name.isdigit() else float('inf')):
    index_file = folder / "index.html"
    
    if not index_file.exists():
        skipped_count += 1
        continue
    
    with open(index_file, 'r', encoding='utf-8') as f:
        current_content = f.read()
    
    title_match = re.search(r'<h3>(.*?)</h3>', current_content)
    game_title = title_match.group(1) if title_match else "Game"
    
    iframe_match = re.search(r'data-delayed-src="([^"]+)"', current_content)
    game_src = iframe_match.group(1) if iframe_match else "/storage/game.html"
    
    new_content = template.replace(
        '<h3>Drive Mad</h3>', 
        f'<h3>{game_title}</h3>'
    ).replace(
        'data-delayed-src="/storage/Drive Mad.html"',
        f'data-delayed-src="{game_src}"'
    )
    
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    updated_count += 1
    if updated_count % 20 == 0:
        print(f"Updated {updated_count} pages...")

print(f"\nComplete! Updated {updated_count} pages, skipped {skipped_count} pages.")
