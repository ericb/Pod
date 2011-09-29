/**
 *  Pod
 *  A web form upgrade object
 */
 
if(typeof Pod == 'undefined') {
    var Pod = Koi.define({
        
        dom: null,    // hold the form element
        def: null,    // hold form definitions
        ref: null,    // hold a reference to existing elements
        prefix: null, // holds the id prefix
        
        init: function( options ) {
            this.def = {};
            this.ref = { 
                'base':  [],
                'input': []
            };
            this.prefix = 'pod_element_';
            this.setDefinitions();
        },
        
        setDefinitions: function() {
            
            var _pod = this;
            
            /**
             *  Base Element Definition
             *  Implementation Class
             */
            var baseDefinition = Koi.define({
                
                type: null,     // holds the element type
                ref: null,      // holds the key of the element in the _pod.ref.type array
                
                init: function( options ) {
                    if(!this.type) { this.type = 'base'; }
                    if( typeof options == 'object' ) {
                        if( options.original ) {
                            this.original = $(options.original);
                        }
                    }
                    this.create();
                },
                
                create: function() {
                    // holds the creation functionality of the replacement element
                },
                
                getNextId: function() {
                    var type = this.type;
                    var ref  = _pod.ref[type];
                    if(typeof ref == 'object') {
                        var len = ref.length + 1;
                        ref.push(this);
                        return _pod.prefix + (len.toString());
                    } else {
                        throw "Pod Error | The following type does not exist: " + type;
                    }
                }
                
            });
            
            this.def.input = Koi.extend( baseDefinition, {
                
                
                original: null,     // the original dom element
                replacement: null,  // the replacement dom element 
                type: 'input',
                
                // Create the [ input ] form element
                create: function() {
                    var element = document.createElement('input');
                    element.id = this.getNextId();
                    this.replacement = element;
                }
            });
        }
    });
}

$(document).ready(function() {
   $('.pod-form').each(function() {
       
   });
});


