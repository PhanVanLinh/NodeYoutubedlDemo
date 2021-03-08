'use strict';

const child_process = require('child_process')

let url = "https://www.reddit.com/r/nextfuckinglevel/comments/lzccnw/harder_than_it_looks/?utm_source=share&utm_medium=web2x&context=3"

// url = "https://www.youtube.com/watch?v=668nUCeBHyY"

let child = child_process.spawnSync("youtube-dl", ["-j", url], { encoding: 'utf8' });

try {
    if (child.stderr) {
        console.log("Error: " + child.stderr)
        return
    }
    const data = JSON.parse(child.stdout)
    if (data.extractor == 'youtube' && data.is_live == true) {
        console.log('Do not supported live video!')
        return
    }
    console.log("SUCCESS "+ JSON.stringify(data))
} catch (e) {
    console.log("'Error can not fetch data " + e)
}