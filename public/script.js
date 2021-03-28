let button = document.querySelector(".btn-push")
let storyEan = document.querySelector(".story-ean")

fetch('https://127.0.0.1:8000/api/graphql',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        query: `
            query{
                stories{
                    edges{
                        node{
                            ean
                        }
                    }
                }
            }
        `        
    })
})
.then(res => res.json())
.then(data => {
        let stories = data.data.stories.edges
        button.onclick = function () { 
            if (stories.length > 0) {
                var alea = Math.floor(Math.random() * stories.length);
                storyEan.innerHTML = stories[alea].node.ean
                }
        }
        
})
