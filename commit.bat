#Delete previous combined files
del .\scripts\combined.js
del .\styles\combined.css

#Concatenate JS files into combined.js
type .\scripts\*.js >> .\scripts\combined.js

#Concatenate CSS files into combined.css
type .\styles\*css >> .\styles\combined.css

#Git add, commit and prompt for comment, then push to repo
git add .
git commit -m %1
git push