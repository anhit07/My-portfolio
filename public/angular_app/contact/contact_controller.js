angular.module('myPortfolioApp').controller('ContactController', ContactController);

function ContactController($http, $timeout) {
	var vm = this;

	vm.sendMessage = function() {
		var messageContent = {
			senderName: vm.name,
			senderEmail: vm.email,
			subject: vm.subject,
			message: vm.messageContent
		};

		$http.post('/api/sendmail', messageContent).then(function(result){
			vm.message = 'Sent';
			vm.error = '';
		}).catch(function(error){
			vm.error = 'Error'
			vm.message = '';
			console.log(error);
		});

		$timeout(function() {
    		vm.message = "";
    		vm.error = ""
	    }, 2500);
    };
}


