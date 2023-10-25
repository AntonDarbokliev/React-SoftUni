const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl,{
        // mode : 'no-cors'
    })
    console.log(response);
    const result = await response.json()

    return result.users
}

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`)
    const result = await response.json()

    return result.user
}