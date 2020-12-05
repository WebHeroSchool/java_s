let url = window.location.toString();
  const getName = (url) => {
    let urlIn = url.split('=');
    let name = urlIn[1];
    if (name == undefined) {name = 'StrigunovOleg';
  }
return name;
}


fetch(`https://api.github.com/users/${getName(url)}`)
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
  })

  .then(json => console.log(json.avatar_url.reverse().join('')))

  .catch(err => console.log(err))
