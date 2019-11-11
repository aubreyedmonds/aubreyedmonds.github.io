"using strict"

class Book{
    constructor(image, title, about){
    this.image = image;
    this.title = title;
    this.about = about;
}

getimage(){
    return this.image;
}

gettitle(){
    return this.title;
}

getabout(){
    return this.about;
}

setimage(){
    this.image = image;
}

settitle(){
    this.title = title;
}

setabout(){
    this.about = about;
}

