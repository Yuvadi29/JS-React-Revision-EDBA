const fetchData = (url) => {
    setTimeout(() => {
        if(status == 200) {
            processData();
            sd();
        } else {
            nd();
        }
    }, 3000)
}

const sd = () => {
    console.log("done");
}

const nd = () => {
    console.log("no data");
}