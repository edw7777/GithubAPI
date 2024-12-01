async function fetchRepos() {
  const username = document.getElementById('username').value;
  //const username = "edw7777"
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  //console.log(response)
  //console.log(response.json)
  if (response.ok) {
    const repos = await response.json();
    //console.log(repos)
    displayRepos(repos);
  } else {
    console.log("USER NOT FOUND");
  }
}


//fetchRepos()
//  .then(data => {
//    console.log(data);
//  })
//  .catch(error => {
//    console.log("USER NOT FOUND")
//  })