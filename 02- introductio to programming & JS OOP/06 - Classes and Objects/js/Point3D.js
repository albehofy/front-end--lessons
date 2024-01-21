class Point3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    printPoint() {
        console.log(this.x, this.y, this.z);

    }
    
    static calculatDistance(p1, p2) {
        var xDistance = Math.pow((p2.x - p1.x));
        var yDistance = Math.pow((p2.y - p1.y));
        var zDistance = Math.pow((p2.z - p1.z));
        var dist = Math.sqrt(xDistance + yDistance + zDistance);
        return dist;
    }
}
