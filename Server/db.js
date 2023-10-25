import NodeCouchDb from 'node-couchdb';
export const couch = new NodeCouchDb({
    auth: {
        user: "admin",
        pass: "admin"
    }
});