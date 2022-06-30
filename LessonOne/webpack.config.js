const path = require("path");

module.exports = {
    entry:'/Users/boss/Developer/course/LessonOne/src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}