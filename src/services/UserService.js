const url = "http://localhost:3001/users";

class UserService{

    async getUsers(){
        const resp = await fetch(url);
        return await resp.json();
                // .then(json=>console.log(json))
    }

    addUser(user){
        return fetch(url,
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json"
                }
            })
        }
        
        async deleteUser(user){
            const resp = await fetch(`${url}/${user.id}`, {
                method: "DELETE"
            });
            return resp;
        }
        
        async updateUser(user){
            const resp = await fetch(`${url}/${user.id}`,
            {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json"
                }            
        })
        return resp;
    }

}

export default Object.freeze(new UserService());