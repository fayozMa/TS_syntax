"use strict";
// async/await
//exercise 1
const urlsAsync = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];
async function fetchSequentially() {
    for (const url of urlsAsync) {
        try {
            console.log(`Fetching from URL: ${url}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            console.log("Result:", data);
        }
        catch (error) {
            console.error("Failed:", error);
        }
    }
}
fetchSequentially();
// exercise 2
const url1Async = "https://jsonplaceholder.typicode.com/users";
const url2Async = "https://jsonplaceholder.typicode.com/posts";
async function fetchData() {
    try {
        const usersResponse = await fetch(url1Async);
        const postsResponse = await fetch(url2Async);
        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error("Failed");
        }
        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        console.log("Fetched data:", [users, posts]);
    }
    catch (error) {
        console.error(error);
    }
}
fetchData();
// exercise 3
const url1Async2 = "https://jsonplaceholder.typicode.com/photos";
const url2Async2 = "https://jsonplaceholder.typicode.com/todos";
const url3Async2 = "https://jsonplaceholder.typicode.com/comments";
const urlsAsync2 = [url1Async2, url2Async2, url3Async2];
async function fetchFirstSuccessful() {
    for (const url of urlsAsync2) {
        try {
            console.log(`Fetching from URL: ${url}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            console.log("First successful request result:", data);
            return;
        }
        catch (err) {
            console.log(`Failed: ${err}`);
        }
    }
    console.log("Barcha so‘rovlar xato bilan tugadi.");
}
fetchFirstSuccessful();
