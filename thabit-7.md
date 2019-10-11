# Classes needed:
TA, Teacher, Admin, Student, and Assignment  

Note: 
The database will be built using SQL
The webserver will be implemented with apache 

General to all users: 
Login: 
- Database to manage users and credentials 
    1. Web interface to make it easier to log in 
    2. Web server to host database and web interface

# TA:
- view uploaded document for assignment: 
    1. Web interface to view the files uploaded
    2. Database to store assignment and files that were uploaded by the student
    3. Web server to host the web interface and store files
- Grade assignment:     
    1. Web interface to submit a grade and provide feedback
    2. Server to host the web interface
    3. Database to store grade 
    4. Logic to update grade in the database 
- add/edit assignment: 
    1. Web interface to view assignment documents 
    2. Web server to host web interface that is connected to the database
    3. Database to store files for assignment requirement
    4. Logic to manipulate attributes of an assignment 
- Download submitted files: 
    1. Web interface connecter to database 
    2. Web server to host the web interface 
    3. Database to retrieve the submitted document by student
    4. Storage space to download files submitted by students 

# Teacher:
- view uploaded document for assignment: 
    1. Web interface to view the files uploaded
    2. Database to store assignment and files that were uploaded by the student
    3. Web server to host the web interface and files
- Grade assignment: 
    1. Web interface to submit a grade and provide feedback
    2. Server to host the web interface
    3. Database to store grade 
    4. Logic to make sure that grade given is within bounds 
- Edit assignment: 
    1. Web interface to view assignment documents 
    2. Web server to host web interface and connect to database
    3. Database to store files for assignment requirement 
- Download submitted files: 
    1. Web interface connecter to database 
    2. Web server to host the web interface 
    3. Database to retrieve the submitted document by student
- add/remove TAs and students:
    1. Web interface to access the database
    2. Web server to host the web interface 
    3. Logic to make sure TA exists or is allowed to be added 

# Student:
- upload / submit assignment:
    1. Database to store the files uploaded 
    2. Web interface to access the database 
    3. Server to host web interface 
    4. File checker to make sure the type of file uploaded is allowed 
- View/download assignment:
    1. Web interface to access files uploaded by the instructor to the assignment  
    2. Database to store the files uploaded by the instructor 
    3. Server to host web interface 
    4. Space on local storage to store files 
- Grade:
    1. Access to the database to calculate the grade based on assignment 
    2. Web interface to view the grade 
    3. A server needed to host web interface 

# Admin:
- Add/remove Instructors and students:
    1. Database to keep track of students and instructors 
    2. Web interface to make it easier to use
    3. Web server to host web interface
- Login setup:
    1. Web interface to make everything easier for the end-user
    2. Database to store user’s login credentials
    3. Server to host web interface and database 
    4. Getters and setters to access credentials 

[design document](https://github.com/mahmoudthabit/mlt446/tree/master/Assignment%204)

