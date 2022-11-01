document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        backspace = true;
    } else {
        backspace = false;
    }
});

function getCEP() {
    setInterval(() => {
        const cep = CEP.value + "";
        if (cep.length === 5 && backspace === false) {
            CEP.value = CEP.value + "-";
        } else if (cep.length === 8 && cep.indexOf("-") === -1) {
            CEP.value = inserirTexto(CEP.value, "-", 5);
        }
        else if (cep.length === 9 && flagCep === false) {
            getAndPrintData(cep);
            flagCep = true;
        } else if (cep.length != 9) {
            resetData();
            flagCep = false;
        }
    }, 10)
}

function getAndPrintData(cep) {
    const url = `https://cdn.apicep.com/file/apicep/${cep}.json`
    axios.get(url)
        .then(response => {
            const data = response.data;
            state.value = data.state;
            city.value = data.city;
            district.value = data.district;
            address.value = data.address;
        })
        .catch(error => {
            address.value = "Not Found";
            console.error(error);
        })
} 

function resetData() {
    state.value = "";
    city.value = "";
    district.value = "";
    address.value = "";
}

/* fonte: stack overflow
thanks Bruno Peralva */
function inserirTexto(TEXTO_ORIGEM, TEXTO_INSERIDO, INDICE) {
    return(""
        + TEXTO_ORIGEM.substring(0, INDICE)
        + TEXTO_INSERIDO
        + TEXTO_ORIGEM.substring(INDICE)
    );
}

getCEP();