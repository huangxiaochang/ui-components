#! /bin/sh

# used to release
mkdir release_dir
# config github
git config user.name "huangxiaochang"
git config user.email "xiaochang_huang@163.com"

if [ "$ui_component_token" = "" ]; then
  echo " not found the token"
  exit 0
fi

# release
echo "start release to github"

cd release_dir
git clone "https://$ui_component_token@${GH_REF}" && cd ui-components
rm -rf `find * ! -name README.md`
# copy the build
cp -rf ../../lib .
cp -rf ../../packages .
cp -rf ../../package.json .
git add .
git commit -m "chore(deploy)"
git push origin release
cd ../..

# # release lib build
# cd release_dir
# git clone https://$ui_component_token@${GH_REF}/lib.git && cd lib
# rm -rf `find * ! -name README.md`
# # copy the lib build
# cp -rf ../../lib/** .
# git add .
# git commit -m "chore(deploy)"
# git push origin lib
# cd ../..

# # release esm build
# cd release_dir
# git clone https://$ui_component_token@${GH_REF}/es.git && cd es
# rm -rf `find * ! -name README.md`
# # copy the lib build
# cp -rf ../../es/** .
# git add .
# git commit -m "chore(deploy)"
# git push origin es
# cd ../..

echo "release to github done!"
