class CardOfTrain{
    constructor(title, image, description){
        this.title = title
        this.image = image
        this.description = description
    }
    draw(){
        let div = document.createElement("div")
        div.classList.add("train__card")
        let title = document.createElement("h1")
        title.classList.add("train__title")
        title.innerHTML = this.title
        div.append(title)

        let divSecond = document.createElement("div")
        divSecond.classList.add("train__photo")
        div.append(divSecond)
        let img = document.createElement("img")
        img.classList.add("image")
        img.src = this.image
        divSecond.append(img)


        let description = document.createElement("div")
        description.classList.add("train__description")
        div.append(description)
        let about = document.createElement("p")
        about.classList.add("train__description-about")
        about.innerHTML = this.description
        description.append(about)
        return div
    }
}