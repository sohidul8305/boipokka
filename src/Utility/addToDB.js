
const getStoredBook = () => {
    const getStoredBookSTR = localStorage.getItem("readList")

    if (getStoredBookSTR) {
        const storedBookData = JSON.parse(getStoredBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}

const addToStoredBD = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert("already exit")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)

    }
}

export { addToStoredBD, getStoredBook }