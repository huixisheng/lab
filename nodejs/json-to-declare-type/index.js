quicktype \
  --src package.json \
  --src-lang json \
  --lang ts \
  --top-level Person \
  --out ts/Person.ts
  
  quicktype package.json -o ts/package.ts --just-types  
  
  quicktype Pokedex.json -o ts/Pokedex.ts --just-types  