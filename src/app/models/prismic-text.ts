export interface PrismicText {
    type: "heading" | "paragraph";
    text: string;
    spans: [{
        start: number;
        end: number;
        type: "strong";
    }]
};