let url0 = window.location.toString();
  const getName0 = (url0) => {
    let urlIn = url0.split('=');
    let name0 = urlIn[1];
    if (name0 == undefined) {name0 = 'StrigunovOleg';
  }
return name0;
}

const name = `${getName0(url0)}`;
const url = 'https://api.github.com/users/';
const log = console.log;

const getName = new Promise((resolve, reject) => {
  setTimeout(() => name?resolve(name):reject('Не найдено имя'), 3000);
})

const getUrl = new Promise((resolve, reject) => {
  setTimeout(() => url?resolve(url):reject('Не найдено ссылка'), 2000);
})

Promise.all([getName, getUrl])
  .then(([name, url]) => fetch(`${url}${name}`))
  .then(res => res.json())
  .then(json => {
    const img = document.createElement('img');
    img.src = json.avatar_url;
    img.alt = 'Avatar';
    document.body.append(img);

    const name = document.createElement('p');
    name.innerHTML = '<b>Login: </b>' + json.login;
    document.body.append(name);

    const txt = document.createElement('p');
    txt.innerHTML = json.bio;
    document.body.append(txt);

    const url = document.createElement('a');
    url.href = json.html_url;
    url.innerHTML = 'Открыть профиль';
    document.body.append(url);

    const d = document.createElement('p');
    d.innerHTML = Date();
    document.body.append(d);
  })
  .catch(err => log(err));
