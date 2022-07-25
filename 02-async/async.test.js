const fetchData = require('./async')

it('should return correct data', () => {
    fetchData(1).then(data => {
        expect(data.id).toEqual(1)
    })
})

it('should return correct data', async () => {
    const data = await fetchData(1)
    expect(data.id).toEqual(1)
})