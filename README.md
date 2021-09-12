# add a new component
```
yarn genComp component-name
```
# icons
```
add or replace a icon:
1.generate iconfont file(.ttf,.woff)
2.replace file theme-chalk/src/fonts/..
3.replace/update theme-chalk/src/icons.scss(if you use https://www.iconfont.cn/, reference iconfont.css generated by https://www.iconfont.cn/)

```

# husky
```
yarn husky install
```

## create a hook
```yarn husky add .husky/pre-commit "yarn lint-staged"
git add .husky/pre-commit
```

## commitizen committing msg
```yarn cz
or
npx cz
or
npm run cz
```

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


