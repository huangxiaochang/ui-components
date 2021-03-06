#! /bin/bash

# 更新packages，scripts/gc.sh, 根目录packages.json中Vue的版本
# ${BASH_SOURCE[0]} 当前文件的path
export FILE_PATH="$(cd $(dirname "${BASH_SOURCE[0]}")/../packages/  && pwd)"
SED_REX="s/\"vue\": \"\^[0-9]\.[0-9]\.[0-9].*\"/\"vue\": \"$1\"/"

for FILE_NAME in "$(find ${FILE_PATH} -type f -name 'package.json' | cut -d' ' -f1-)"
do
  sed -i '' "${SED_REX}" $FILE_NAME
done

sed -i '' "${SED_REX}" "$(dirname ${BASH_SOURCE[0]})/gc.sh"
sed -i '' "${SED_REX}" "$(dirname ${BASH_SOURCE[0]})/../package.json"
