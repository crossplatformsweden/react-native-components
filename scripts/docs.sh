#!/bin/bash
echo "**** scripts/docs.sh START *******"
echo "**** Formating Code *******"
typedoc --out docs source
echo "**** go to docs folder *******"
cd docs
echo "**** create .nojekyll in docs *******"
touch .nojekyll
echo "**** exit docs folder *******"
cd ..

echo "**** scripts/docs.sh END *******"