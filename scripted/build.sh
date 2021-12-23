#!/bin/zsh

# setopt globstarshort
# pandoc -o dist/index.html pages/**/*.html

# setopt globstarshort

# for page in pages/*; do
#   echo $page
#   pandoc -o dist/$file.html pages$file/**/*.html
# done

# echo ./pages/animals/index.html

# setopt globstarshort
# cat pages/**/*.html | tidy

# find pages/ -type f -exec cat {} +


rm dist/*

cat header.html footer.html > dist/index.html

for page in $(ls pages); do
  cat header.html pages/$page/index.html pages/$page/**/*.html footer.html > dist/"$page.html"
done

open dist/index.html


# browser-sync start -s    


