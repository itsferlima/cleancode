const list = [
    {
        title: "User",
        followers: 5
    },
    {
        title: "Friendly",
        followers: 50
    },
    {
        title:"Famous",
        followers: 500
    },
    {
        title: "Super Star",
        followers: 1000
    }
    {
        title: "Influencers",
        followers: 10000
    }
]

export default async function getData(req, res){
    const github = String(req.query.username)

    if(!github){
        return res.status(400).json({
            message: `Please proive an user to search`
        })
    }

    const response = await fetch(`https://api.github.com/users/${github}`)

    if (response.status === 404){
        return res.status(400).json({
            message: `User with name "${github}" not found`
        })
    }


const data = await Response.json()
const orderList = list.sort((a,b) => b.followers - a.followers)
const category = orderList.find( i=> data.followers > i.followers)

const result = {
    github,
    category: category.title
}

return result

}
function getUsers(){
    getData({ query:{
        username: 'joseph'
    }})
}

// Constante com nome claros, nao precisa ser pequeno
// Nao usar DATA como constante, pq conforme vai crescendo o codigo, pode 
function getUsers(){

const users= ['Fernanda', ' Gio', ' Love']

const userStartWithLetterD = users.filter (user => {
    return user.startsWith('F')
})

}
