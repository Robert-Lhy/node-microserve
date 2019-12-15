rm -rf bin && 
tsc && 
cp src/db/*.yaml bin/db/ && 
cp -R src/template bin/template && 
cp src/auth/*.yaml bin/auth/