const fs = require('node:fs');
const path = require('path');

const routerConfig = {
  routesDirectory: './apps/react-hooks/src/routes',
  generatedRouteTree: './apps/react-hooks/src/routeTree.gen.ts',
  routeFileIgnorePrefix: '-',
  quoteStyle: 'single',
};

fs.writeFile('tsr.config.json', JSON.stringify(routerConfig), (err) => {
  if (err) console.log(err);
  else {
    fs.readFileSync('tsr.config.json', 'utf8');
    console.log('[INFO] Router config has been generated successfully\n');
    console.log(
      '[INFO] Welcome to the Learning React, this is a guide about React Hooks!',
    );
  }
});
