import { PrismicText } from './prismic-text';
import { PrismicLink } from './prismic-link';

export interface Festival {
    name: string;
    description: [PrismicText];
    date_start: Date;
    date_end: Date;
    city: string;
    place: string;
    website: PrismicLink;
    volunteer_website: PrismicLink;
    volunteer_date: Date;
    poster: {
        url: string;
    };
    info: string;
    networks: PrismicLink[];
}