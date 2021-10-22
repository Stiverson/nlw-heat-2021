const LinksSocialMedia = {
  github: 'stiverson',
  youtube: 'channel/UCuXVUyENJ9S6G8cJQdVN_EA',
  facebook: 'profile.php?id=100006389086961',
  instagram: 'stiverson_machado',
  twitter: 'tives_away'
}

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

chanceSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.textContent = data.login
    })
}

getGitHubProfileInfo()
