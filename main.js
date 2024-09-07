document.addEventListener('DOMContentLoaded', function() {
    const avatarElement = document.querySelector('.profile-avatar');
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const reposElement = document.querySelector('.numbers-item:nth-child(1)');
    const followersElement = document.querySelector('.numbers-item:nth-child(2)');
    const followingElement = document.querySelector('.numbers-item:nth-child(3)');
    const linkElement = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/LeandroCamposDEV')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = '@' + json.login;
            reposElement.innerHTML = `<h4>Repositórios</h4>${json.public_repos}`;
            followersElement.innerHTML = `<h4>Seguidores</h4>${json.followers}`;
            followingElement.innerHTML = `<h4>Seguindo</h4>${json.following}`;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Erro ao buscar dados do GitHub:', error);
        });
});