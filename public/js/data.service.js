(function(){

  angular.module('njcEfvApp')
    .service('DataSource', DataSource);

  function DataSource(){
    var data = [
      {id: "fvio-125", date: "03 Dec 2015", type: "FVIO", name: "Applicant nine", allocated_to: "jerram", status: "Lodged", review: "Review", risk: "High risk"},
      {id: "fvio-124", date: "03 Dec 2015", type: "FVIO", name: "Applicant nine", allocated_to: "jerram", status: "Lodged", risk: "High risk"},
      {id: "fvio-123", date: "02 Dec 2015", type: "FVIO", name: "Applicant nine", allocated_to: "jerram", status: "Lodged", risk: "Urgent"},
      {id: "fvio-122", date: "01 Dec 2015", type: "FVIO", name: "Applicant nine", allocated_to: "jerram", status: "Lodged", review: "Review", risk: "Urgent"},
      {id: "fvio-121", date: "03 Dec 2015", type: "FVIO", name: "Applicant nine", allocated_to: "jerram", status: "Lodged", review: "Review", risk: "High risk"},
    ];

    return {
      get: function(){
        return data;
      },

      find: function(id){
        return _.findWhere(data, {id: id});
      }
    };
  }

})();
