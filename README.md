### Webpack Zephir PoC

This is just a dumb sample to prove that webpack can compile zephir code incrementally.

Its not very smart or particularly efficient but it does work.

You can spin up webpack in watch mode and then develope the zephir files.

$`webpack -w`

Each save will trigger a compliation and install. So if you run `webpack` with `sudo` it will auto install on each save.

There is some opportunity for some extra configuration.
