#!/bin/bash
echo "******** scripts/lint.sh START ********"

echo "**** Formating Code *******"
echo "****** Prettier - JSON ******"
prettier **/*.json --write
# enable if there's yml 
#echo "****** Prettier - YML ******"
#prettier **/*.yml --write
#echo "****** Prettier - MarkDown ******"
#prettier **/*.md --write
# enable if there's graphql 
#echo "****** Prettier - GraphQL ******"
#prettier **/*.graphql --write

echo "****** TSLINT ******"
tslint -p ./tsconfig.json --fix

echo "******** scripts/lint.sh DONE ********"