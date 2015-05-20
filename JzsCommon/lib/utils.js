console.log("jzs utils loaded");

//exports.Timestamp = function()
//{
//    return (new Date).getTime();
//};

exports.Timestamp = function()
{
    return new Date().toISOString().replace('T', ' ').substr(0, 19);
};

exports.SafeRequire = function(module)
{
    try {
        var module = require(module);
        console.log("safe loaded module: " + module.toString());
        return module;
    } catch(e) {
        console.error("did not safe load module: " + module);
        return false;
    }
};

//http://stackoverflow.com/questions/14458508/node-js-shell-command-execution
exports.cmd = function(cmd, args, cb_stdout, cb_end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        //child = spawn(cmd),
        me = this;
    me.exit = 0;  // Send a cb to set 1 when cmd exits
    if (typeof cb_stdout != 'undefined')
        child.stdout.on('data', function (data) { cb_stdout(me, data) });

    if (typeof cb_end != 'undefined')
        child.stdout.on('end', function () { cb_end(me) });
};

//foo = new cmd('netstat', ['-rn'],
//    function (me, data) {me.stdout += data.toString();},
//    function (me) {me.exit = 1;}
//);
//function log_console() {
//    console.log(foo.stdout);
//}
//setTimeout(
//    // wait 0.25 seconds and print the output
//    log_console,
//    250);