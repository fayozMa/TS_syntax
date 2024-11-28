//Promise
// exercise 1

const urls: string[] = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

const promise1 = new Promise<void>((resolve, reject) => {
  urls.forEach((url) => {
    Promise.resolve()
      .then(() => {
        console.log(`Fetching from URL: ${url}`);
        return fetch(url);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch from ${url}: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(`Result:`, data);
      })
      .catch((error) => {
        console.error(`Error fetching from ${url}:`, error.message);
      });
  });

  Promise.resolve()
    .then(() => resolve())
    .catch(reject);
});

promise1.catch((error) => {
  console.error("An error occurred:", error.message);
});

// exercise 2

const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts";

Promise.all([fetch(url1), fetch(url2)])
  .then(async ([usersResponse, postsResponse]) => {
    if (!usersResponse.ok || !postsResponse.ok) {
      throw new Error("Failed");
    }
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const combinedData = {
      users,
      posts,
    };
    console.log(combinedData);
  })
  .catch((error) => {
    console.log("Failed:", error.message);
  });

// exercise 3

const url1_ex3 = "https://jsonplaceholder.typicode.com/photos";
const url2_ex3 = "https://jsonplaceholder.typicode.com/todos";
const url3_ex3 = "https://jsonplaceholder.typicode.com/comments";

const handleRequest = (url: string) =>
  fetch(url)
    .then((response) => response.ok ? response.json() : Promise.reject('Request failed'))
    .catch((error) => error);

Promise.race([
  handleRequest(url1_ex3),
  handleRequest(url2_ex3),
  handleRequest(url3_ex3)
])
  .then((result) => {
    console.log("First:", result);
  })
  .catch((error) => {
    console.error("Failed:", error);
  });

