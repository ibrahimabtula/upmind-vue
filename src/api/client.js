import axios from 'axios';

export default {
    getClients(page, perPage, sortField, sortOrder, search, cb, errorCb){
        let url = 'https://5b9a74b8d203ad0014619cbf.mockapi.io/api/mock/clients?' +
        `page=${page}` + 
        `&limit=${perPage}` + 
        `&sortBy=${sortField}` + 
        `&order=${sortOrder}` + 
        `&search=${search}`;

        axios.get(url)
        .then(response =>{
            if(response.status === 200){
                cb(response.data);
            }else{
                // If it's not 200 treat it like an error
                errorCb(response);
            }
        })
        .catch(e =>{
            errorCb(e);
        })
    }
}