export interface IStep {
    steps?: string,
    step: string;
    currentStep: string;
}

export interface ICardList {
    count: number;
    content: string;
    icon: string;
    color: string;
}

export interface ISideBar {
    title: string;
    icon: string;
}

export interface ITableList {
    id: string;
    dateRemoved: string;
    link: string;
    source: string;
    action: string;
}

export interface ITitle {
    title: string;
    content: string;
}