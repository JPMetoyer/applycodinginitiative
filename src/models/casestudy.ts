

class CaseStudy {
    id: string;
    logo: string;
    company: string;

    title: string;
    challenge: string;
    audience: string;
    results: string;

    thumbnail: string;
    location: string;
    deliverables: string[];

    before: string[];
    after: string[];
    impact: string[];


    reviews: {
        name: string;
        image: string;
        title: string;
        comment: string;
    }[];



    constructor(data: any) {
        this.id = data.id;
        this.logo = data.logo; 
        this.company = data.company; 

        this.title = data.title;
        this.challenge = data.challenge;
        this.audience = data.audience;
        this.results = data.results;

        this.thumbnail = data.thumbnail;
        this.location = data.location;
        this.deliverables = data.deliverables;

        this.before = data.before;
        this.after = data.after;
        this.impact = data.impact;

        this.reviews = data.reviews;
    }
}

export default CaseStudy;
