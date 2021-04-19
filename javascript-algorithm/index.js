fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })