import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { Schema } from './schema/schema';
import * as mongoose from 'mongoose';
import * as  cors from 'cors';
import * as  fs from 'fs';
import * as path from 'path';

const app = express();

// allow cors
app.use(cors())

// connect to mongodb database
// make sure to replace my db string && creds width your own
mongoose.connect('mongodb://127.0.0.1:32768/wedding-invitation', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log("connected to db!")
})

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.use((req, res) => {
    let currentPath = ''
    if (req.path == '/') {
        currentPath = '/index.html'
    } else {
        currentPath = req.path
    }
    if (currentPath.indexOf(".html") >= 0) {
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.send(fs.readFileSync(path.join(__dirname, 'html', currentPath), {
            encoding: 'utf-8'
        }));
    } else if (currentPath.indexOf("favicon.icon") >= 0) {
        res.setHeader("Content-Type", "image/x-icon")
        return res.send(fs.readFileSync(path.join(__dirname, 'html', currentPath), {
            encoding: 'utf-8'
        }))
    } else if (currentPath.indexOf(".css") >= 0) {
        res.setHeader("Content-Type", "text/css; charset=utf-8")
        return res.send(fs.readFileSync(path.join(__dirname, currentPath), {
            encoding: 'utf-8'
        }));
    } else if (currentPath.indexOf(".js") >= 0) {
        res.setHeader("Content-Type", "application/javascript; charset=utf-8")
        return res.send(fs.readFileSync(path.join(__dirname, currentPath), {
            encoding: 'utf-8'
        }));
    }
})

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});