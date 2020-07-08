import Prices from './prices.model';
import CreatorsComic from './creators-comic.model';
import Thumbnail from './thumbnail.model';

export default class Comic {
    id: number;
    title: string;
    type: string;
    prices: Prices[];
    creators: CreatorsComic[];
    description: string;
    format: string;
    thumbnail: Thumbnail;
};
