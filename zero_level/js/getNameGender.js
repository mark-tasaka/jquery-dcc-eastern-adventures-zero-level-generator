     /*randomly generate the character's gender*/
      function getGender()
      {
          let gender = "Male";
          let random = Math.floor((Math.random() * 2) + 1);
          
          if(random === 1)
              {
                  gender = "Female";
              }
          
        return gender;
          
      }
      
      /*randomly generate name based on gender*/
      function getName(gender)
      {
          let name = "";
          
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
	  

