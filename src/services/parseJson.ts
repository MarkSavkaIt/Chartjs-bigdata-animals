import axios from "axios"

type catDataType = {
    data?: any,
    cat?: any
}

const requestCats = async (animal: string, filter?: string) => {
    return axios({
        method: "GET",
        url: `http://localhost:5000/json/${animal}/${filter ? filter + "/" : ""}`
    })
    .then(result => {
        const {data}:catDataType = result;
        return filter ? data : data.cat
    })
    .catch(err => {
        console.log("err", err); 
        return err
    })
}

export default requestCats