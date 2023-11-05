

interface CaseStudy {
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
}

export default CaseStudy;
