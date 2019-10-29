# project4-group7
Team members: Weiyu Feng, Rebecca Parker, Mahmoud Thabit

## Documents
Overview Document:
[https://github.com/computationalmystic/project4-group7/blob/production/Overview.md](https://github.com/computationalmystic/project4-group7/blob/production/Overview.md)

Weiyu Feng todo list:
[https://github.com/computationalmystic/project4-group7/blob/production/feng-7.md](https://github.com/computationalmystic/project4-group7/blob/production/feng-7.md)

Rebecca Parker todo list:
[https://github.com/computationalmystic/project4-group7/blob/production/parker-7.md](https://github.com/computationalmystic/project4-group7/blob/production/parker-7.md)

Mahmoud Thabit todo list:
[https://github.com/computationalmystic/project4-group7/blob/production/thabit-7.md](https://github.com/computationalmystic/project4-group7/blob/production/thabit-7.md)


## Website
### Note
**Note: I recommend you run our code in Chrome, and click the "load unsecure javascript" in the address bar to see our visualization of data**
### Description
The first visualization is the top committers per group id, each button will get the top committers using ajax request then will display only the top 6 committers for that group. example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/23/top-committers to get the top committers to Netflix group.
Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

The second visualization is for Pull request acceptance rate, the same as the first visualization each button is pre mapped to each group. To get data we use ajax request to get that data from server the server will return the pull request acceptance rate per group with dates. example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/22/pull-request-acceptance-rate to get the pull request for group GraphQL.
Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

The third visualization we did was the number of forks per group per repository. Same as the first two visualization each button is per mapped to each group. To get data you have to get all repository per group and map them to a select form so we can get all the repository of a group from a server using ajax request example of link http://augur.osshealth.io:5000/api/unstable/repo-groups/24/fork-count to get all the repository that belong to Apache group, we do clear the select form from one group to other. after that the user can select a repository and click select to show the number of forks that repository have.
Note: the buttons are per mapped to each group, and we commented out the groups that return nothing.

