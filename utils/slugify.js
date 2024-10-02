import slugify from "slugify";

const slugifyText = (text) => {

  const text = slugify(text)

  console.log(text)
  return text

}
