import re
import os

file_path = r'c:\Users\user\OneDrive\Desktop\trav\index.css'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

fixed_lines = []
pattern = re.compile(r'([a-zA-Z0-9\-\.\*\/:\(\)] ){4,}') 
# Look for sequence of 4+ chars separated by single space.
# Expanded char set to include punctuation common int CSS

for line in lines:
    # Check if line looks corrupted (spaced out)
    # Exclude lines that are just indented normally
    if pattern.search(line):
        # Apply fix
        # 1. Replace 2+ spaces with placeholder
        s = re.sub(r' {2,}', '§', line)
        # 2. Remove single spaces (which are the corruption)
        s = s.replace(' ', '')
        # 3. Restore placeholder to single space (or whatever separation was there)
        # Most separators in CSS are single space (e.g. "1px solid") which would have been became "1 p x   s o l i d" (3 spaces?)
        # In our observation: "p a d d i n g :    1 8 0 p x" -> 4 spaces.
        # "solid" -> "s o l i d". " " -> "   ".
        # So yes, 2+ spaces -> 1 real space.
        s = s.replace('§', ' ')
        # 4. Handle cases like " : " becoming ":"
        # "p a d d i n g : " -> "padding:" (correct)
        fixed_lines.append(s)
    else:
        fixed_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(fixed_lines)

print("Fixed CSS file.")
