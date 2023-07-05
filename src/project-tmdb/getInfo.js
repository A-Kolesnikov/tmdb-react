const fetch = require('node-fetch')
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwYTBmMWQ3ZjI4ZDcxOTFiOTFmZDczODdkMWE3ZCIsInN1YiI6IjY0OWFmYjFkN2UzNDgzMDBhY2MzOTdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egwmn-oqHF-VC6_ifTiRFKpiiBvO0slCgTM8cotn3CY'
    }
};

export async function downloadGallery(addr, setFunc) {
    try {
        let response = await fetch(addr, options)
        let decode = await response.json()
        await new Promise(resolve => setTimeout(resolve, 200)) //server delay imitation

        setFunc(decode.results)

    } catch (err) {
        console.error('error' + err)
    }
}

export async function downloadTitle(addr, setFunc) {
    try {
        let response = await fetch(addr, options)
        let decode = await response.json()
        await new Promise(resolve => setTimeout(resolve, 200)) //server delay imitation

        setFunc(decode)

    } catch (err) {
        console.error('error' + err)
    }
}