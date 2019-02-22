



var app = angular.module('app', []);





	

	

var editor = ace.edit("editor");

editor.session.setMode("ace/mode/java");


    

app.controller('myCtrl', function($http,$scope) {
	 $scope.result="";
	$scope.clear=function(){
	
		 editor.setValue("")

	 $scope.result="";

	}
	
	$scope.show=function(){
		document.getElementById("load").style="display:inline-block"
		var data=editor.getValue().split("\n")
		var first=-1
	
		for (var a=0;a<data.length&&first==-1;++a){
			if(data[a].indexOf("class")!=-1)
			first=a
	
		}
			
			var line=data[first].split(" ")
		
		var reg=/[a-z,A-Z]/g;
			first=-1
			
			for (var a=0;a<line.length&&first==-1;++a){
				
		        
				if(reg.test(line[a])&&line[a]!="public"&&line[a]!="private"&&line[a]!="protect"&&line[a]!="class")
					
					
					first=a
				
			}
		
	
			var name=line[first]
			

		    $http({  

			    method:'post',  

			   url:'java.php',  

			    data:{
			    	"code":editor.getValue()  ,
			    	"name":name
			    }
			  

			}).success(function(req){  

				 $scope.result=req.trim();
				 	document.getElementById("load").style="display:none"
		        		
		        	}
			)
			
	}
	
	
	
	
	
	
	
	
});


  










