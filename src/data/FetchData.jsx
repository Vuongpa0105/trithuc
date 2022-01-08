const FetchData = async (raw) => {
    const dataText = await fetch(raw);
    const data = dataText.text();
    return data;
}

export default FetchData;
