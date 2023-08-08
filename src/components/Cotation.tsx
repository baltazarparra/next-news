export default async function Cotation() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL', {
        next: {
            revalidate: 60
        }
    })

    const price = await response.json()

    return (
        <small>Current Dollar cotation: {parseFloat(price.USDBRL.low).toFixed(2)}</small>
    )
}
