
# webapp

A web application skeleton ready to start developing with [coffee-script] and [jacker]

## Usage

Using coffeescript's build system cake, se Cakefile to add own tasks.

`cake setup` - loads submodules and sets up development environment
`cake build` - creates a copy of the application in build/ with all scripts processed and minified by jacker.

For development it uses [jacker]'s (synchrounous!) browser loader to load and compile java/coffe-script on the fly.

----

I suggest archiving a copy of this repository to start your new webapp

`git archive master | tar -x -C /somewhere/mywebapp`

this will leave you free to create a new git repo of the skeleton


[jacker]: https://github.com/jnordberg/jacker
[coffee-script]: https://github.com/jashkenas/coffee-script/
