export interface PrismicResult<T> {
    id: string;
    uid: string;
    type: string;
    href: string;
    tags: string[];
    first_publication_date: Date;
    last_publication_date: Date;
    slugs : string[];
    linked_documents: string[];
    lang: string;
    alternate_languages: string[];
    data: T;
}