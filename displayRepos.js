function displayRepos(repos) {
  const repoList = document.getElementById('repo-list');
  repoList.innerHTML = ''; // Clear previous results

  repos.forEach(repo => {
    const repoItem = document.createElement('div');
    repoItem.innerHTML = `
      <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
      <p>${repo.description || 'No description available'}</p>
      <p>Stars: ${repo.stargazers_count}</p>
      <p>Forks: ${repo.forks_count}</p>
      <p>Language: ${repo.language || 'Not specified'}</p>
    `;
    repoList.appendChild(repoItem);
  });
}