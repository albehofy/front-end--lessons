export interface ISahpe{
    draw()
}

export class Triangle implements ISahpe {
    public draw() {
        console.log('draw triangle')
    }
}

export class Circle implements ISahpe {
    public draw() {
        console.log('draw circle')
    }
}

// class Square implements ISahpe {
//     public draw() {
//         console.log('draw triangle')
//     }
// }