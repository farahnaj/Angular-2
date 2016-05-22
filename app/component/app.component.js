(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/template/app.component.html',
      providers: [app.StudentService],
      pipes: [app.LowercasePipe1, app.TitleCasePipe]
    })
    .Class({
      constructor: [app.StudentService, function(studentService) {
      	this.test = "Hello Friends!!!"
      	this.pageHeading = "behold the majesty of your page title"
        this.rowCount = 3
      	this.students = studentService.getStudents()
      }]      
    });
})(window.app || (window.app = {}));