class CardNews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const container = document.createElement("div")
        container.setAttribute("class", "container")

        const cards = document.createElement("div")
        cards.setAttribute("class", "card")

        container.appendChild(cards)

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card-left")
        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right")

        cards.appendChild(cardLeft)
        cards.appendChild(cardRight)

        const span = document.createElement("span")
        const autor = this.getAttribute("autor")

        autor && autor.trim() !== "" ? span.textContent = `by ${autor}` : span.textContent = "by Marquim"


        const h1 = document.createElement("h1")
        const nameNotice = this.getAttribute("notice")

        nameNotice && nameNotice.trim() !== "" ? h1.textContent = nameNotice : h1.textContent = "Darth Vader contrata Devs!"


        const p = document.createElement("p")
        const noticeDescription = this.getAttribute("description")

        noticeDescription && noticeDescription.trim() !== "" ? p.textContent = noticeDescription : p.textContent = "Darth Vader procura desenvolvedores."


        cardLeft.appendChild(span)
        cardLeft.appendChild(h1)
        cardLeft.appendChild(p)

        const img = document.createElement("img")
        const src = this.getAttribute("img")
        img.src = src || "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"

        img.alt = "Darth Vader"

        cardRight.appendChild(img)

        return cards
    }

    styles() {
        const style = document.createElement("style")
        style.textContent =
            `
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 720px;
    height: 220px;
    display: flex;
    flex-direction: row;
    box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
}

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card-left span {
    color: rgba(0, 0, 0, 0.64);
    font-weight: bold;
}

.card-left h1 {
    margin-top: 15px;
    font-size: 25px;
    font-weight: bold;
}

.card-left p {
    color: gray;
}

.card-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 200px;
}

.card-right img {
    background-color: black;
    color: white;
    width: 150px;
}
            `

        return style
    }
}

customElements.define("card-news", CardNews)