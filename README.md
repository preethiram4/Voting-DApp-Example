

# Voting DApp Example



As initial step, needs to install all dependencies specified on package.json file. So run the below command to install all dependencies

	npm install

How to run this application :
  1. First run ganacehe-cli on command prompt
  
  
     ![enter image description here](https://lh3.googleusercontent.com/qGUDGpwi-2HnFWnVh-rJEpa1bvmslSkZKv75-MidhP2bYEZsoI5emQv0qqgZWJRxEa1S0b1sCUrz)
  2. Open new command prompt and do the following:
  3. Run the command  

	truffle compile
    

This will create CastYourVote.json file on your build directory
    
  4. Once compiled successfully, run the migrate command
	  
		  truffle migrate
  
  ![enter image description here](https://lh3.googleusercontent.com/g_YZloD1ZKc_fD6_c50DxHGt55n0-oqPe-QcgZoEgrBbMFq1xHiQfyR4c7e9XtcTfDIWdVEtEd32)
  
    


      
   5. Now run the application
		 
			 npm run dev 
        
 This will run the application on host:port 
  In mycase, it is running on localhost:8080
![enter image description here](https://lh3.googleusercontent.com/0aL8R7d1QrowOrP_jp3tYN2YO3SW08zXAnQQK_yQn8jpGDgHc3PfsQpaKEt_9FxX94Y2RM5HFQuG)
     
Now go to specified address and application will be loaded
     
  Now the file will be initially looks like below:


![enter image description here](https://lh3.googleusercontent.com/Uxp9ruklxKD5slHq2cs14RY2ICL6_eRMNBb246cwei45_foo2bnmsPcTtsjSFk9tD3J0huoYaACO)
  

Here we have 2 buttons:
**Add candidate** - adds candidate to table as well as smart contract
**Vote** -  once candidate is vote, no.of votes will be displayed in Votes column in table

Now, provide a candidate name and click on add candidate button

![enter image description here](https://lh3.googleusercontent.com/fY3AxmlD_Z46c2sdxZfJ1iTlDx9QYelTsyrj71EiS7FnYGUYKfJZ3EdZ4qfPTiQdLwCDfOsJnNDO)


Now New candidate is added to table

Lets cast the vote:
Provide candidate name and click on vote button

![enter image description here](https://lh3.googleusercontent.com/g5LsmKKCA89Sg2UdWF-HOHkmycb6K2aZaVWreXyf9LC_6FfvOEq6rrijOMwEq8Z8-piFpmnns3gZ)


Now the votes are updated on the table

Video link is provided below to explain in detail about each and every line in the code:

Part-1 : https://www.youtube.com/watch?v=GXrM1MXiyTY
Part-2 : https://www.youtube.com/watch?v=KhpvoGFDcbw
Part-3 : https://www.youtube.com/watch?v=nIdB3k41eOY
