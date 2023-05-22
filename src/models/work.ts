

class Work {
    id: string;
    title: string;
    image: string;
    location: string; 

    constructor(data : any) {
        this.id = data.id;

        this.title = data.title;
        this.image = data.image;
        this.location = data.location;
    }
}

export default Work; 
