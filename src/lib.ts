class Counter {
    // create private field tokens which is a map of string to number
    #tokens: Map<string, number> = new Map();

    constructor(tokensList: string[]) {
        tokensList.forEach((token: string) => {
            const tokenValue = this.#tokens.get(token) || 0;
            this.#tokens.set(token, tokenValue + 1);
        });
    }

    tokenStats(): Map<string, number> {
        return this.#tokens;
    }
}


export default Counter;