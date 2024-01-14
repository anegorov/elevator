interface Page {
    name: string;
    path: string;
    child: ChildPage[];
}

interface ChildPage {
    name: string;
    path: string;
    content: string[];
}