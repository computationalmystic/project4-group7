**Todo List**
- Class
	1. Create Class "Student"
	2. Create Class "Instructor" 
	3. Create Class "TA"
	4. Create Class "Course"
		-- SubClass
			1. Sections
			2. Assignments
- Method
	- For "Student" Class
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
	- For "Instructor" Class
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
	 - For "TA" class
		 - Collect Assignments
			1. User interface
     			2. Be able to download submitted files 
			3. Check the status of downloading
			4. Display message says either "Complete" or "Error"
		- Grade Assignments
			1. User interface
			2. Be able to enter a grade and comment for an assignment of a student
			3. Check if the grade is an integer/float
