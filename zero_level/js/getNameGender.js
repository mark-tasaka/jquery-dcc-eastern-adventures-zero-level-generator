     /*randomly generate the character's gender*/
      function getGender()
      {
          var gender = "Male";
          var random = Math.floor((Math.random() * 2) + 1);
          
          if(random === 1)
              {
                  gender = "Female";
              }
          
        return gender;
          
      }
      
      /*randomly generate name based on gender*/
      function getName(gender)
      {
          var name = "";
          
          if(gender === "Male")
              {
                  name = maleFirstNames().name;
              }
          else if(gender === "Female")
              {
                  name = femaleFirstNames().name;
              }
          
          return name;
      }
	  

