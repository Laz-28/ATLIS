import os
import re

css_files = [
    'src/components/Footer.css',
    'src/components/Header.css',
    'src/pages/AboutContact.css',
    'src/pages/Home.css',
    'src/pages/ServicesPricing.css'
]

replacements = [
    # Explicit text/bg colors
    (r'color:\s*#fff(?:fff)?;', 'color: var(--text-color);'),
    (r'color:\s*#000(?:000)?;', 'color: var(--btn-primary-text);'), # Wait, #000 in color usually means text on light bg or text on white button. Let's inspect where color: #000 is used.
]

# Let's just view them first.
