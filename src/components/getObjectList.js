const getObjectList = async () => {
    console.log('запрос');
    const URL = "http://134.209.138.34/items";
    const result = await fetch(URL);
    const data = await result.json();
    return data;
}

const getObjectInfo = async (id) => {
    const URL = `http://134.209.138.34/item/${id}`;
    const result = await fetch(URL);
    const data = await result.json();
    console.log(data);
    return data;
}


export { getObjectList, getObjectInfo }