#!/usr/bin/env node


// // fs.mkdirSync('framework/src')
// // fs.mkdirSync('framework/src/pages')

// fs.writeFileSync('repo/pages', 'page one in repo/pages')

// fs.symlinkSync('../../../repo/pages', 'framework/src/pages')


// const fsPromises = require("fs").promises;

// const target = "./files/file.txt";
// const path = "./files/symlink";

// (async () => {
    //     try {
        //         await fsPromises.symlink(target, path, "dir");
        //         console.log("Symbolic link creation complete!");
        //     } catch (error) {
            //         console.error(error);
            //     }
            // })();
// fs.mkdirSync("./src")
            
//! Relative targets are relative to the link’s parent directory.
            
var fs = require('fs')
const fsPromises = require("fs").promises;

//*

// const target = "./mew";
// const path = './example/mewtwo';

/*
$ tree example /
 example /
├── mew
└── mewtwo -> ./ mew
*/

//*


const target = "../repo";
const path = './src';

/*
$ tree gatbsy-framework-symlink /
 gatsby-framework-symlink /
├── repo
|     └── pages
└── framework
      └── src -> ./ repo/pages
*/


    (async () => {
        try {
            await fsPromises.symlink(target, path, "dir");
            console.log("Symbolic link creation complete!");
        } catch (error) {
            console.error(error);
        }
    })();

/*
$ tree example /
 example /
├── mew
└── mewtwo -> ./ mew
*/