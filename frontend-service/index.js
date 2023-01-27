const express = require('express')
const app = express()
const axios = require('axios');

app.use(express.json());

const DAPR_HOST = process.env.DAPR_HOST || "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || "3005";

let axiosConfig = {
        headers: {
                "dapr-app-id": "dapr1"
        }
};

app.get('/', (req, res) => {

        var url = `${DAPR_HOST}:${DAPR_HTTP_PORT}/`;

        axios
                .get(url, axiosConfig)
                .then(axRes => {
                        console.log(`statusCode: ${axRes.status}`);
                        console.log(axRes);
                        res.send(axRes.data);
                })
                .catch(error => {
                        console.error(error);
                });
});

app.listen(5000);