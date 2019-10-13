## Overview
Team members: Weiyu Feng, Rebecca Parker, Mahmoud Thabit
### Core Object
- System Need
	- DataBase (will be built using SQL)
	- WebServer (will be implemented with apache)
	- Authorization level 
- Class
	1. Create Class "Student"
	2. Create Class "Instructor" 
	3. Create Class "TA"
	4. Create Class "Course"
		-- SubClass
			1. Sections
			2. Assignments
- Method
	- **For "Student" Class**
		- Login/Logout
			1. Set up database used to store user info
			2. Set up web server
			3. Implement user interface
		- File upload
			1. Set up file storage
			2. Implement user interface
			3. Check if the type of file is allowed 
			4. Check file uploading status 
			5. Display messages either says "complete" or "error"
	- **For "Instructor" Class**
		- Add/Remove TA
			1. User interface
			2. Set up database storing all TA's information
			3. Search specific TA by name or id
			4. Add TA to a specific class by setting value for attributes in Class "TA" and "Course"
			5. Remove TA from a specific class by setting value for attributes in Class ""TA" and "Course"
		- Create Assignment
			1. User interface
			2. Update the assignment on the web page
			3. Send a notification to students in this class
	- **For "TA" class**
		- View uploaded document for assignment: 
			1. Web interface to view the files uploaded
			2. Database to store assignment and files that were uploaded by the student
			3. Web server to host the web interface and store files
		- Add/edit assignment: 
			1. Web interface to view assignment documents 
			2. Web server to host web interface that is connected to the database
			3. Database to store files for assignment requirement
			4. Logic to manipulate attributes of an assignment 
		- Collect Assignments
			1. User interface
	     	2. Be able to download submitted files 
			2. Check the status of downloading
			3. Display message says either "Complete" or "Error"
		- Create Courses and Sections	
		    1. storage of course information
		    2. connecting people to courses
		    3. security to grant control only to professors
		    4. Web User Interface to view courses
		    5. connection to assignment file database
		- Grade Assignments
			1. User interface
			2. Be able to enter a grade and comment for an assignment of a student
			3. Check if the grade is an integer/float

### Next Step
- Distribute work to each person
- Set up needed environment such as the database and web server
- Figure out the relationship between each class and method
- Create classes
- Implement methods
- Let team members review implementation
- Let team members test the applications
- Fix bugs


