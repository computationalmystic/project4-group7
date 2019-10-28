repoGroups = [25152, 25151, 25150]; //update these so we are using the data on drive, or doing real-time api calls and checking if null
repositories = [1, 2, 3];
var repoGroupNumber = null;
repositoryID = null;
if (repoGroups.includes(repoNumber)) {
    repoGroupNumber = repoNumber;
}
if (repositories.includes(repoID)) {
    repositoryID = repoID;
}
if(repoGroupNumber != null && repositoryID != null) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://augur.osshealth.io:5000/api/unstable/repo-groups/${repoGroupNumber}/repos/${repositoryID}/top-committers', true);
    request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    }
}


request.send();
