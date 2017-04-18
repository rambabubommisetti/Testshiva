(function(){
        angular.module("travelApplication")
        .factory("dataService",DataService);
        function DataService(){
			var dataObj={
                  passengersData:passengersData,    
                  vehicleData:vehicleData				
                };
		    return dataObj;	
            
        }		
        var passengersData= [
        {   sno:'1',
            name:'Rambabu',
            email: 'ramjee45@gmail.com',
            mobile:'9000034445',
            journeyDate: '22-10-2016',
            from: 'Hyderabad',
            to:'Banglore',
            vehicletype:'Bus'
        },
          {
              sno: '2',
              name: 'sonu',
              email: 'sonusingh@gmail.com',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              vehicletype: 'car'
          },
            {
                sno: '3',
                name: 'Raghu',
                email: 'ramraghuu5@gmail.com',
                mobile: '9000036665',
                journeyDate: '29-10-2015',
                from: 'delhi',
                to: 'Hyderabad',
                vehicletype: 'Bike'
            },
            {
                sno: '4',
                name: 'Rambabu',
                email: 'ramjee45@gmail.com',
                mobile: '9000034445',
                journeyDate: '2017-03-07',
                from: 'Hyderabad',
                to: 'Banglore',
                vehicletype: 'Bus'
            },
          {
              sno: '5',
              name: 'sonu',
              email: 'sonusingh@gmail.com',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              vehicletype: 'car'
          },
            {
                sno: '6',
                name: 'Raghu',
                email: 'ramraghuu5@gmail.com',
                mobile: '9000036665',
                journeyDate: '29-10-2015',
                from: 'delhi',
                to: 'Hyderabad',
                vehicletype: 'Bike'
            },
            {
                sno: '7',
                name: 'Rambabu',
                email: 'ramjee45@gmail.com',
                mobile: '9000034445',
                journeyDate: '22-10-2016',
                from: 'Hyderabad',
                to: 'Banglore',
                vehicletype: 'Bus'
            },
          {
              sno: '8',
              name: 'sonu',
              email: 'sonusingh@gmail.com',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              vehicletype: 'car'
          },
            {
                sno: '9',
                name: 'Raghu',
                email: 'ramraghuu5@gmail.com',
                mobile: '9000036665',
                journeyDate: '29-10-2015',
                from: 'delhi',
                to: 'Hyderabad',
                vehicletype: 'Bike'
            }

		];
		
		var vehicleData = [
        {
            sno: '1',
            name: 'Rambabu',
            number: 'ap24aq9315',
            mobile: '9000034445',
            journeyDate: '22-10-2016',
            from: 'Hyderabad',
            to: 'Banglore',
            seats: '3'
        },
          {
              sno: '2',
              name: 'sonu',
              number: 'ap24aq9315',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              seats: '1'
          },
            {
                sno: '3',
                name: 'Raghu',
                number: 'ap24aq9315',
                mobile: '9000036665',
                journeyDate: '2017-03-07',
                from: 'delhi',
                to: 'Hyderabad',
                seats: '2'
            },
            {
                sno: '4',
                name: 'Rambabu',
                number: 'ap24aq9315',
                mobile: '9000034445',
                journeyDate: '22-10-2016',
                from: 'Hyderabad',
                to: 'Banglore',
                seats: '4'
            },
          {
              sno: '5',
              name: 'sonu',
              number: 'ap24aq9315',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              seats: '3'
          },
            {
                sno: '6',
                name: 'Raghu',
                number: 'ap24aq9315',
                mobile: '9000036665',
                journeyDate: '29-10-2015',
                from: 'delhi',
                to: 'Hyderabad',
                seats: '2'
            },
            {
                sno: '7',
                name: 'Rambabu',
                number: 'ap24aq9315',
                mobile: '9000034445',
                journeyDate: '22-10-2016',
                from: 'Hyderabad',
                to: 'Banglore',
                seats: '1'
            },
          {
              sno: '8',
              name: 'sonu',
              number: 'ap24aq9315',
              mobile: '9949395445',
              journeyDate: '21-10-2015',
              from: 'mumbai',
              to: 'Banglore',
              seats: '2'
          },
            {
                sno: '9',
                name: 'Raghu',
                number:'ap24aq9315',
                mobile: '9000036665',
                journeyDate: '29-10-2015',
                from: 'delhi',
                to: 'Hyderabad',
                seats:'1'
            }

    ];

        
})();