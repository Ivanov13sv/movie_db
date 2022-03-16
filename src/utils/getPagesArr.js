export const getPagesArr = (totalCount, limit) =>{

    const totalPages = Math.ceil(totalCount / limit);

    let res = []

    for (let i = 0; i < totalPages; i++){
        res.push(i + 1);
    }
    return res

}
