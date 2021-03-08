'use strict';

const child_process = require('child_process')

let url = "https://www.reddit.com/r/nextfuckinglevel/comments/lzccnw/harder_than_it_looks/?utm_source=share&utm_medium=web2x&context=3"

// url = "https://www.youtube.com/watch?v=668nUCeBHyY"

let fileName = "abc.mp4"

let child = child_process.spawnSync("youtube-dl", ["-o", "storage/" + fileName, url], { encoding: 'utf8' });

try {
    if (child.stderr) {
        console.log("Error: " + child.stderr)
        return
    } else {
        console.log("SUCCESS "+ fileName)
    }
    
} catch (e) {
    console.log("'Error can not fetch data " + e)
}