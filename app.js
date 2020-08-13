const getRepos = async (username) =>{
    let repos = await fetch(`https://api.github.com/users/${username}/repos?type=ownre&sort=updated`)
    .then((res)=>res.json())
    .catch((error)=> console.error(error));

    let list = repos.map((el) =>{
        return `
                <li> <a href=${el.html_url} target="_blank">${el.name}</a> </li> 
        `
    }).join(" ");

    let content = document.getElementById("content");

    content.innerHTML = `<ul>${list}</ul>`;
}



getRepos("adeelsgithub");