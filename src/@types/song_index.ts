type FixedLengthArray<TItem, TLength extends number>
= [TItem, ...TItem[]] & { length: TLength };

export interface SongIndex {
    version: number;
    index: any;
}

export interface SongIndexV1 {
    version: 1;
    index: FixedLengthArray<number, 8>;
}
