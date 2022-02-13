
const section = document.querySelector('ul');

let requestURL = 'json/github.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const popularRepositories = request.response;
  showRepositories(popularRepositories);
}

function showRepositories(obj) {
  const items = obj['items'];

  for (let i = 0; i < items.length; i++) {
      const
        // ボックス
        repository = document.createElement('li'),
        repository__image = document.createElement('div'),
        repository__star = document.createElement('div'),
        repository__stargazers = document.createElement('div'),
        repository__block = document.createElement('div'),
        repository__title = document.createElement('div'),
        repository__link = document.createElement('a'),
        repository__starBlock = document.createElement('div'),
      
        // コンテンツ
        repositoryTitle = document.createElement('h2'),
        stargazers_count = document.createElement('p'),
        repositoryImg = document.createElement('img'),
        iconStar = document.createElement('img');
    
        // クラス名
        repository.className = "repository";
        repository__image.className = "repository__image";
        repository__stargazers.className = "repository__stargazers";
        repository__star.className = "repository__star";
        repository__link.className = "repository__link";
        repository__block.className = "repository__block";
        repository__title.className = "repository__title";
        repository__starBlock.className = "repository__starBlock";
        
        // アイテム
        repositoryTitle.textContent = items[i].name;
        iconStar.src = "./image/star.png";
        stargazers_count.textContent = items[i].stargazers_count;
        repository__link.href = items[i].owner.html_url;
        repositoryImg.src =  items[i].owner.avatar_url;

        repository.appendChild(repository__link);
        repository__link.appendChild(repository__block);
        repository__block.appendChild(repository__image);
        repository__image.appendChild(repositoryImg);
        repository__block.appendChild(repository__title);
        repository__title.appendChild(repositoryTitle);
        repository__block.appendChild(repository__starBlock);
        repository__starBlock.appendChild(repository__star);
        repository__starBlock.appendChild(repository__stargazers);
        repository__stargazers.appendChild(stargazers_count);
        repository__star.appendChild(iconStar);
        repository__stargazers.appendChild(stargazers_count);

        section.appendChild(repository);
    }
}
