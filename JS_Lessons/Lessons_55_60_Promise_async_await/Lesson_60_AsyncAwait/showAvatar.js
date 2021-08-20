async function showAvatar() {
    let response = await fetch('user.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 5000));

    img.remove();

    return githubUser;
}

showAvatar();

