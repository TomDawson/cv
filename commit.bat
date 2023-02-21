::Prompt user for commit comment
set /p "comment=Your commit comment: "

::Delete previous combined files
del .\combined.js
del .\combined.css

::Concatenate JS files into combined.js
::Specify files in correct order for intentional sequencing
type .\scripts\*.js >> .\combined.js

::Concatenate CSS files into combined.css
type .\styles\*css >> .\combined.css

::Add, commit with previous comment, then push to repo
git add .
git commit -m "%comment%"
git push