// Stateless pipe
(function (app) {
    app.TitleCasePipe = ng.core
        .Pipe({
            name: 'titleCase',
            pure: true
        })
        .Class({
            constructor: function () {},
            transform: function(input) {
                var words = input.split(' ');
                for (var i = 0; i < words.length; i++) {
                     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
                return words.join(' ');
            }
        });
})(window.app || (window.app = {}));