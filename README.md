
# Bootstrap plugin for Web Schema Forms

This plugin enhanced Web Schema Forms with the classes required for Bootstrap.

## Usage

    var wsf = require("web-schema-forms")
    ,   bootstrap = require("web-schema-forms-bootstrap")
    ;

    var form = wsf.form({
                            extensions: [bootstrap.horizontal]
                        ,   schema: { ... } // web schema
                        ,   hints:  { ... } // rendering hints
                        }
                    ,   function (err, form) {
                            if (err) return console.log("ERROR", err);
                            // ...
                        }
    );

There are three types of Bootstrap 3 forms supported by this module: ```basic```, ```inline```, or
```horizontal```. Each is an extension of its own, available as an attribute on the module. Pass
one to the ```extensions``` field for Web Schema Forms' ```form()``` method and enjoy the result.
