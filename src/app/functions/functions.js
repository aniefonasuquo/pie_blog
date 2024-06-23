import axios from "axios"


const endpoint = 'https://data.usepie.ng/api/content'


export async function getAllPosts () {
  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.json)

  let array = []

  posts.forEach(async (item) => {
    const image = await fetch(`https://data.usepie.ng/api/assets/image/${item._id}?h=${item.featured_image.height}&w=${item.featured_image.width}`, {headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}})

    item.featured_image['link'] = image
    array.push(item)
  }
  
)

  // console.log(array)
  return posts
}

export async function getImageUrl (id, h, w) {
  const hostname = `https://data.usepie.ng/api/assets/image/${id}?h=${h}&w=${w}`
  const image = await axios.get(hostname, {headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.data)

  return image
}


export async function getFirstSixPosts () {
  const posts = await fetch("https://data.usepie.ng/api/content/items/articles?limit=6&filter=%7B%22featured%22%3A%22true%22%7D", {cache: 'no-cache', headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.json())
  let data = []
  
  for  (let i = 0; i <= posts.length - 1; i++) {
    const item = posts[i]
    const link = await getImageUrl(item.featured_image._id, item.featured_image.height, item.featured_image.width)
    item["image_link"] = link
    data.push(item)
  }

  return data
}

export async function getLimitedPosts () {

  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.json())

  let data = []
  
  for  (let i = 0; i <= posts.length - 1; i++) {
    const item = posts[i]
    const link = await getImageUrl(item.featured_image._id, item.featured_image.height, item.featured_image.width)
    item["image_link"] = link
    data.push(item)
  }

  return data
}

export async function getCategoryPosts (category) {

  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.json())

  const categoryPosts = posts.filter((post) => post.tags.includes(category))
  let data = []
  
  for  (let i = 0; i <= categoryPosts.length - 1; i++) {
    const item = categoryPosts[i]
    const link = await getImageUrl(item.featured_image._id, item.featured_image.height, item.featured_image.width)
    item["image_link"] = link
    data.push(item)
  }

  return data
}

export async function getSinglePost (id) {

  const post = await fetch(`${endpoint}/item/articles/${id}`, {cache: 'no-cache', headers: {"api-key": "USR-7e23ab2ad21072fd09644b3cc3a0ca90d2ce6cd1"}}).then(res => res.json())

  
  const link = await getImageUrl(post.featured_image._id, post.featured_image.height, post.featured_image.width)
  post['image_link'] = link
 
  return post
}