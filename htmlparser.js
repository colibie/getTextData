/** Parse the following string
<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>
expected output:
html:{head:{title:{My Title}}body:{h1:{Heading}p:{This is a paragraph}}} */

var text = `<html><head><title>My Title</title></head><body><h1>Heading</h1><p>This is a paragraph</p></body></html>`

function htmlparser(text){
    var objectified = ``;
    var pattern = /<(\w+)>/g;
    var endPattern = /<\/\w+>/g
    objectified = text.replace(pattern, `$1:{`);
    objectified = objectified.replace(endPattern, `}`)
    return objectified;
}
console.log(htmlparser(text));
