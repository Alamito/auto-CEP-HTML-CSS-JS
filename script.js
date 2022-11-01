let flagCep = false;

const CEP = document.querySelector('.CEP');
const state = document.querySelector('.state');
const city = document.querySelector('.city');
const district = document.querySelector('.district');
const address = document.querySelector('.address');

function getCEP() {
    setInterval(() => {
        const cep = CEP.value + "";
        if (cep.length === 5) {
            CEP.value = CEP.value + "-";
        } else if (cep.length === 9) {
            getAndPrintData(cep);
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
        .catch(error => console.error(error))
} 

getCEP();