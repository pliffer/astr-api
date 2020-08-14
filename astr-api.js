const request = require('request');

module.exports = function Astr(jwt){

    let that = this;

    this.jwt = jwt;

    this.host = 'astr.me';

    this.toObject = (string) => {

        try{

            let obj = JSON.parse(string);
            return obj;

        } catch(e){

            throw e;

        }

    }

    this.tree = () => {

        return new Promise((resolve, reject) => {

            request.get({

                url: `https://${that.host}/api/lunastro/tree`,

                headers:{
                    'Authorization': `Bearer ${that.jwt}`,
                }

            }, (err, body, res) => {

                if(err) return reject(err);

                resolve(that.toObject(res).message);

            });

        });

    }

}
