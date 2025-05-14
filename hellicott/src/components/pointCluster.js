export class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistanceTo(point){
        const distSqrd = (point.x - this.x)**2 + (point.y - this.y)**2
        return Math.sqrt(distSqrd);
    }

}

export class Cluster {
    constructor(id) {
        this.id = id;
        this.points = [];
        this.centroid = Point(Math.random() * 12, Math.random() * 12)
    }

    addPoint(point){
        this.points.push(point);
    }

    updateCentroid(){
        const xTotal = points.reduce((total, point) => total + point.x);
        const yTotal = points.reduce((total, point) => total + point.y);
        const numOfPoints = this.points.length;
        this.centroid = Point(xTotal/numOfPoints, yTotal/numOfPoints);
    }

}