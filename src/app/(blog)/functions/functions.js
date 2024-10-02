import axios from "axios"


const endpoint = 'https://data.usepie.ng/api/content'
const api_key = process.env.API_KEY


export async function getAllPosts () {
  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json)

  let array = []

  posts.forEach(async (item) => {
    const image = await fetch(`https://data.usepie.ng/api/assets/image/${item._id}?h=${item.featured_image.height}&w=${item.featured_image.width}`, {headers: {"api-key": api_key}})

    item.featured_image['link'] = image
    array.push(item)
  }
  
)

  // console.log(array)
  return posts
}

export async function getImageUrl (id, h, w) {
  const hostname = `https://data.usepie.ng/api/assets/image/${id}?h=${h}&w=${w}`
  const image = await axios.get(hostname, {headers: {"api-key": api_key}}).then(res => res.data)

  return image
}


export async function getFirstSixPosts () {
  const posts = await fetch("https://data.usepie.ng/api/content/items/articles?limit=6&filter=%7B%22featured%22%3A%22true%22%7D", {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json())
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

  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json())

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

  const posts = await fetch(`${endpoint}/items/articles`, {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json())

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
export async function getRecommededPosts () {

  const posts = await fetch("https://data.usepie.ng/api/content/items/articles?limit=6&filter=%7B%22recommended%22%3A%22true%22%7D", {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json())
  let data = []
  
  for  (let i = 0; i <= posts.length - 1; i++) {
    const item = posts[i]
    const link = await getImageUrl(item.featured_image._id, item.featured_image.height, item.featured_image.width)
    item["image_link"] = link
    data.push(item)
  }

  return data
}

export async function getSinglePost (slug) {

  // const params = new URLSearchParams({slug: slug})

  const post = await fetch(`${endpoint}/item/articles?filter=%7B%22slug%22%3A%22${slug}%22%7D`, {cache: 'no-cache', headers: {"api-key": api_key}}).then(res => res.json()) 
  
  const link = await getImageUrl(post.featured_image._id, post.featured_image.height, post.featured_image.width)
  post['image_link'] = link
 
  return post
}