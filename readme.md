Node.js application Development

1. Creating Node.js Server Apps
   1. Use Standard Node.js Modules
      1. https://www.nodejs.org
   2. Load the module in the current server-side JS file
      1. Using 'require()' object
         1. E.g. var obj = require('module-name')
            1. The require() will load and cache the moduel for the current application
            2. The 'obj' will be an instance of the module and have access to all its methods and properties
   3. Default Node.js modules
      1. https://nodejs.org/dist/latest-v12.x/docs/api/
      2. http, http2, fs, util, dns, ect.
   4. External Node.js modules
      1. Developoed by Node.js community and must be installed explicitely using
         1. npm install command
         2. E.g.
            1. npm install -g <module-name>, module will be installed gloably for current user scope
            2. npm install --save <module-name>, module will be imnstalled for current application
         3. We need 'package.json' file to define modules
            1. the package.json will be created using
               1. npm init -y
                  1. The command will be used to create package.json with defaults
               2. npm init
                  1. The command to provide command line wizard to create package.json
            2. Development only modules
               1. packages will be declared in 'devDependencies' section of package.json
                  1. npm install --save-dev <module-name or package-name>
            3. Runtime modules
               1. packages will be declared inside the 'dependencies' section of package.json
                  1. npm install --save <module-name or package-name>
            4. scripts section in package.json will contains list of commands for
               1. run package
               2. test package
               3. build package
               4. language quality check aka 'linting'
2. Using 'fs' module
   1. The File System Module
   2. Performs R/W operations for Files and Directories
   3. Sync and Async Methods
      1. readFile() --> Async method and readFileSync()
      2. writeFile() --> Async method and writeFileSync()
