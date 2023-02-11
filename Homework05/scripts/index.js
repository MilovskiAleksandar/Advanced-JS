
async function countryBorders(code) {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const country = await response.json();
    console.log(`Country: `,country[0])

    const border = country[0].borders;
    console.log('Neighbours')
    for (const neighbour of border) {
        const borderApiCall = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        const borderResponse = await borderApiCall.json();
        console.log(borderResponse[0])

    }
}
countryBorders('MKD')
