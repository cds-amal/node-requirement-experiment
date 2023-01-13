## Sample output:

Demonstrates that Node's `require` [1] loads and evaluates a module once.

This project has a module that is loaded 10 times with both Node's require, and a simulated fs.readFileSync. It shows that the total disk reads are 11, 1x for Require, and 10x for uncached fs.readFileSync.

```console
loop: 10
total file reads: 11
require loads    : 1
non-require loads: 10x
```


Reference:

1: [Node require.cache](https://nodejs.org/api/modules.html#requirecache)
