export type CardType = {
    tag: string,
    title: string,
    contents: string[],
    imagePath?: string,
    imageCaption?: string,
}

export type PortfolioType = {
    title: string,
    copyright: string,
    contents: CardType[],
}