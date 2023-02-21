set /p "comment=Enter comment > " & ::Prompt user for commit comment
@echo off & ::Remove CMD output until @echo on

::Delete previous combined files in root directory
del .\combined.js
del .\combined.css

::Specify files in correct order for intentional sequencing
type .\scripts\*.js >> .\combined.js & ::Concatenate JS files into combined.js

type .\styles\*css >> .\combined.css & ::Concatenate CSS files into combined.css

@echo on & ::Add, commit with previous comment, then push to repo with cmd feedback
git add .
git commit -m "%comment%"
git push