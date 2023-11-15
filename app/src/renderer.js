import { FaceToMesh } from "./face.js"

class Index {
    constructor() {
        this.state = {
            facemesh: new FaceToMesh()
        }
    }
}

new Index()