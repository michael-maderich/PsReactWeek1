npm install --save-dev typescript
pause
npm install --save-dev nodemon concurrently
pause
mkdir src dist
npm run dev
echo Now add this to package.json:
echo "scripts": {
echo  "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
echo },