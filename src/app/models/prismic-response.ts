import { PrismicResult } from './prismic-result';

export interface PrismicResponse<T> {
    page: number;
    results_per_page: number;
    results_size: number;
    total_results_size: number;
    total_pages: number;
    next_page: number;
    prev_page: number;
    results : PrismicResult<T>[];
    version: string;
    license: string;
}