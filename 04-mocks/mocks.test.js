const axios = require('axios')

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data
}

const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

const mockCallback = jest.fn(x => 42 + x);

describe('mock callback', () => {

    beforeEach(() => {
        forEach([0, 1], mockCallback);
    })

    it("The mock function is called twice", () => {
        expect(mockCallback.mock.calls.length).toBe(2);
    })


    it("The first argument of the first call to the function was 0", () => {
        expect(mockCallback.mock.calls[0][0]).toBe(0);
    })

    it("The first argument of the second call to the function was 1", () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    })

    it("The return value of the first call to the function was 42", () => {
        expect(mockCallback.mock.results[0].value).toBe(42);
    })

    it("The return value of the first call to the function was 43", () => {
        expect(mockCallback.mock.results[1].value).toBe(43);
    })
})

it('mock return', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValue('Hello!');
    const results1 = mock();
    const results2 = mock();
    const results3 = mock();
    expect(results1).toBe(true);
    expect(results2).toBe(false);
    expect(results3).toBe('Hello!');
})

it('mock axios', async () => {
    jest.spyOn(axios, 'get').mockReturnValueOnce({
        data: {
            id: 1,
            todo: 'Get 1M subscribers'
        }
    });
    const results = await fetchData(1);

    expect(results.todo).toBe('Get 1M subscribers');
})
