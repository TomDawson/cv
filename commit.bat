@echo off & ::Remove CMD output
set /p "comment=Enter comment > " & ::Prompt user for commit comment
del .\combined.js & ::Delete previous combined files in root directory
del .\combined.css
type .\scripts\*.js >> .\combined.js & ::Concatenate .js and .css files
type .\styles\*css >> .\combined.css & ::Specify files in specific load order
git add . & ::Add, commit with previous comment, then push to repo with cmd feedback
git commit -m "%comment%"
git push