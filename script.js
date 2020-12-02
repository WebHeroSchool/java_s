

fetch('https://api.github.com/users/StrigunovOleg')
  .then(res => res.json())
  .then(json => document.getElementById("p1").innerHTML = json.login)
  .then(json => {
    const img = document.createElement('img');
    img.src = json.avatar_url;
    img.alt = 'Avatar';
    document.body.append(img);
  })

  .then(json => console.log(json.avatar_url.reverse().join('')))

  .catch(err => console.log(err))
