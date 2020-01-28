const getObjectList = async () => {
    console.log('запрос');
    const URL = "http://134.209.138.34/items";
    const result = await fetch(URL);
    const data = await result.json();
    return data;
}

export default getObjectList