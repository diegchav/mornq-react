class Color {

    static blue = '#0a84ff';
    static green = '#30d158';
    static indigo = '#5e5ce6';
    static orange = '#ff9f0a';
    static pink = '#ff375f';
    static purple = '#bf5af2';
    static red = '#ff453a';
    static teal = '#64d2ff';
    static yellow = '#ffd60a';

    static #colors = [
        Color.blue,
        Color.green,
        Color.indigo,
        Color.orange,
        Color.pink,
        Color.purple,
        Color.red,
        Color.teal,
        Color.yellow
    ]

    static random() {
        return this.#colors[Math.floor(Math.random() * this.#colors.length)]
    }

}

export default Color;