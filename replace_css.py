import os
import re

css_files = [
    'src/components/Footer.css',
    'src/components/Header.css',
    'src/pages/AboutContact.css',
    'src/pages/Home.css',
    'src/pages/ServicesPricing.css'
]

# Note: We must be careful about .btn-primary replacements
def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Manual overrides for .btn-primary and related
    content = re.sub(r'(\.btn-primary\s*\{[^}]*?background:\s*)#fff(;)', r'\1var(--btn-primary-bg)\2', content)
    content = re.sub(r'(\.btn-primary\s*\{[^}]*?color:\s*)#000(;)', r'\1var(--btn-primary-text)\2', content)
    
    # Header CTA button
    content = re.sub(r'(\.cta-button\s*\{[^}]*?background:\s*)#fff(;)', r'\1var(--btn-primary-bg)\2', content)
    content = re.sub(r'(\.cta-button\s*\{[^}]*?color:\s*)#000(;)', r'\1var(--btn-primary-text)\2', content)
    
    # Generic background and text colors
    content = re.sub(r'background:\s*#000(?:000)?;', 'background: var(--bg);', content)
    content = re.sub(r'background-color:\s*#000(?:000)?;', 'background-color: var(--bg);', content)
    content = re.sub(r'color:\s*#fff(?:fff)?;', 'color: var(--text);', content)
    
    # Border colors
    content = re.sub(r'border-color:\s*#fff(?:fff)?;', 'border-color: var(--text);', content)
    
    # Replace rgba(255, 255, 255, X) with --overlay-X
    # For example, rgba(255, 255, 255, 0.5) -> var(--overlay-50)
    # We will find all rgba(255, 255, 255, X)
    def rgba_replacer(match):
        opacity_str = match.group(1)
        # Handle opacity values like 0.15, 0.5, etc.
        val = float(opacity_str)
        val_int = int(val * 100)
        # Format it exactly to match the variable names
        if val_int == 8: val_str = "08"
        else: val_str = str(val_int)
        return f"var(--overlay-{val_str})"
        
    content = re.sub(r'rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)', rgba_replacer, content)

    # Some missed `#fff` for border or background
    content = re.sub(r':\s*#fff(?:fff)?(;)', r': var(--text)\1', content)
    # Wait, if there are some #000 missed (like in hover states)
    content = re.sub(r':\s*#000(?:000)?(;)', r': var(--bg)\1', content)

    with open(filepath, 'w') as f:
        f.write(content)

for f in css_files:
    process_file(f)

print("Done")
