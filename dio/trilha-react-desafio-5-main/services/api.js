import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://wctlrhjwdnizaalguskh.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdGxyaGp3ZG5pemFhbGd1c2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMDYwMjMsImV4cCI6MjAzNjY4MjAyM30.trP8EmOOpgoF7h1x-xbvFJfqIr4VKfK9K_-RZKvzkfY",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdGxyaGp3ZG5pemFhbGd1c2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMDYwMjMsImV4cCI6MjAzNjY4MjAyM30.trP8EmOOpgoF7h1x-xbvFJfqIr4VKfK9K_-RZKvzkfY"
    }
})