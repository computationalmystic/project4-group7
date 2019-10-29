Group 7 
Rebecca Parker, Mahmoud Thabit, and Weiyu Feng. 

Assignment 7

The first visualization is the top committers per group id, each button will get the top committers using ajax request then will display only the top 6 committers for that group. example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/23/top-committers to get the top committers to Netflix group. Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

The second visualization is for Pull request acceptance rate, the same as the first visualization each button is pre mapped to each group. To get data we use ajax request to get that data from server the server will return the pull request acceptance rate per group with dates. example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/22/pull-request-acceptance-rate to get the pull request for group GraphQL. Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

The third visualization we did was the number of forks per group per repository. Same as the first two visualization each button is per mapped to each group. To get data you have to get all repository per group and map them to a select form so we can get all the repository of a group from a server using ajax request example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/24/fork-count to get all the repository that belong to Apache group, we do clear the select form from one group to other. after that the user can select a repository and click select to show the number of forks that repository have. Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

Functions: 

1. loadRepoGroupTopCommitters(num): get number that is correlates to the group id, the function will send an ajax request to get data from server and will call functions and create the visualization for the Top 6 committers.

getRepoGroupTopCommitters(txt): will get the raw data then parse it to a json object then organize the data so that the visualization will work.

2. loadRepoGroupPull(num): get number that is correlates to the group id, the function will send an ajax request to get data from server will user getRepoGroupPull(txt) to organize the date and then display the visualization of the pull request acceptance rate. 

getRepoGroupPull (txt): will get raw data received from the server and parse it and load it to a datapoint var then return that var.

3. loadRepoGroupForkCount(num): get number that is correlates to the group id, the function will send an ajax request to get data from server. Then loads the names of each repository so the user can select which repository needs the data to be displayed.

getRepoGroupForkCount(txt): will get raw data received from the server and parse it and load into select form using addSelect(txt) function so the user can see all the repo names.

addSelect(txt): will get text and add that text as an element to the select form so the user car chose. 

emptyList(): will clear select form all the elements in it..

displayForks(): this function will get the index of the element of select that was selected and load the number of forks in to a datapoint var, then the data will be displayed for the number of forks that a repository has with the name of the repository.


We divided the work mainly on what was each of us good at and the passion they wanted to procure, with compromises to get the project done (example: we could not all do front end visualizations) each member of our group finished web development course, so we all knew to we get data using AJAX and how to use CSS, and JS:.

Rebecca Parker: Front end focused (CSS and JS visualizations).
Mahmoud Thabit: Backend focused (AJAX request and JS).
Weiyu Feng: Backend and server focused (server deployment, AJAX and JS).
