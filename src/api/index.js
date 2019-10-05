export const apiGet = url => () => fetch(url).then(v => v.json());

export const apiPut = (url, id, objeto) => () =>
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(objeto),
        headers: new Headers({ "Content-type": "application/json" })
    }).then(v => v.json());
   
