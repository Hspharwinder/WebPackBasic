1. create index.js
2. cmd -- npm i webpack@2 -g
3. cmd -- webpack entryfile.js bundelfile.js
    e.g.  app\index.js dist\bundle.js
4. create index.html file, add script(bundle.js) path
5. run index.html in browser
6. create new test.js file, require in index.js
7. cmd -- webpack -w or use step: 2
8. see changes in bundle.js file
9. use step: 5
10. auto save changes of webpack(in bundle file) use cmd --  webpack -w app\index.js dist\bundle.js

create webpack config file
---------------------------
1. cmd -- touch webpack.config.js (touch fileName) or create webpack.config.js
2. cmd -- webpack
3. use step: 10 
4. now set 'start': 'webpack -w' in scripts of package.json file 
5. run --> npm start
6. now set 'watch': 'webpack' in scripts of package.json file 
7. run --> npm watch ( you will able to see the working of npm run start cmd )


react js webpack
--------------------
https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637