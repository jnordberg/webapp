
# webapp

An web application skeleton ready to start developing with coffeescript and require.js

## Usage

Using coffeescript's build system cake, se Cakefile to add own tasks.

`cake build` - creates a copy of the application in build/ with all coffeescript converted into js, glued and compressed.

For development it uses [require-cs] to load and compile coffescript on the fly.

----

I suggest archiving a copy of this repository to start your new webapp

`git archive master | tar -x -C /somewhere/mywebapp`

this will leave you free to create a new git repo of the skeleton


[require-cs]: https://github.com/jrburke/require-cs/

