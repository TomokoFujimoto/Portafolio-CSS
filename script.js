const repositorio = document.getElementById("repositorio")
const ul = document.createElement('ul')

async function obtenerRepositorios(){
  const repos = await fetch('https://api.github.com/users/TomokoFujimoto/repos')
  .then(response => response.json())

  repos.forEach(function(repo) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.innerText= repo.name;
    link.href=repo.html_url;
    link.target="_blank"
    //const div = document.createElement("div");
    //div.appendChild(li)

    li.appendChild(link)

    ul.appendChild(li)
    repositorio.appendChild(ul)
  })




  
}
obtenerRepositorios()

