// Stateless pipe
(function (app) {
    app.LowercasePipe1 = ng.core
        .Pipe({
            name: 'lowercase1',
            pure: true
        })
        .Class({
            constructor: function () {},
            transform: function(value) {
                if (!value) return value;
                if (typeof value === 'string') {
                    return value.toLowerCase();    
                }
                else {
                    throw new Error('Invalid pipe value', value);
                }
            }
        });
})(window.app || (window.app = {}));