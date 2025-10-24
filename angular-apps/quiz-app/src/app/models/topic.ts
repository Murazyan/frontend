export class Topic{
    name: string;
    id: string;
    

    
    constructor(id: string){
        this.id = id;
    }

    static compareByName(a: Topic, b: Topic): number {
        return a.name.localeCompare(b.name);
      }
}

export class TopicList{
    topics: Topic[];
}