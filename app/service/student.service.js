(function (app) {
    app.StudentService = ng.core
       .Class({
               constructor: function() {},
               getStudents: function() {
               	var students = [
                	{
                    	name: "Samy", dateOfBirth: new Date("November 23, 1980"),
                    	gender: "Male", scholorship: 55000
                	},
                	{
                    	name: "Sara", dateOfBirth: new Date("May 05, 1970"),
                    	gender: "Female", scholorship: 68000
                	},
                	{
                    	name: "John", dateOfBirth: new Date("August 15, 1974"),
                    	gender: "Male", scholorship: 57000
                	},
                	{
                    	name: "Sansa", dateOfBirth: new Date("October 27, 1979"),
                    	gender: "Female", scholorship: 53000
                	},
                	{
                    	name: "Rob", dateOfBirth: new Date("December 30, 1983"),
                    	gender: "Male", scholorship: 60000
                	}
            		];
                return students;
               }
        });
})(window.app || (window.app = {}));