const endpoint = 'https://dummyjson.com/posts'


export async function getFirstSixPosts () {
  const posts = await fetch(`${endpoint}/?limit=6`).then(res => res.json())

  return posts.posts
}

export async function getLimitedPosts () {

  const posts = await fetch(`${endpoint}`).then(res => res.json())
  
  return posts.posts
}

export async function getCategoryPosts (category) {

  const posts = await fetch(`${endpoint}`).then(res => res.json()).then(posts => posts.posts)

  const categoryPosts = posts.filter((post) => post.tags.includes(category))
  
  return categoryPosts
}

export async function getSinglePost (id) {

  const post = await fetch(`${endpoint}/${id}`).then(res => res.json())
 
  return post
}